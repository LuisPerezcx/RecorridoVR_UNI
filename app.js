/* ========================================
   SCRIPT PRINCIPAL - Recorrido Universidad VR
   OPTIMIZADO PARA META QUEST 3
   ======================================== */

// ⚙️ CONFIGURACIÓN DE DESARROLLO
// Puede ser un número (índice global) o un slug (recomendado)
const startingScene = 'entrada-principal';  // CAMBIAR AQUÍ: usar slug en lugar de número

let currentLocation = null; // se resuelve desde `startingScene` en la inicialización
let activeLaser = 'right';  // 'left' o 'right' - controla qué láser está visible
let preloadedSceneData = {};  // Caché para escenas precargadas

/**
 * Preload (precarga) de la siguiente escena para mejor performance
 * Se ejecuta de fondo mientras el usuario está viendo la escena actual
 * TAMBIÉN precalcula el ángulo de rotación para evitar el jank
 */
function preloadNextScene(sceneNumber) {
  const nextScene = scenes[sceneNumber];
  if (!nextScene || preloadedSceneData[sceneNumber]) {
    return;  // Ya está precargada
  }
  
  // Precargar imagen en background
  const img = new Image();
  img.src = nextScene.image;
  
  // ⚡ PRECALCULAR el ángulo de rotación para la siguiente escena
  let nextAngle = 0;
  if (nextScene.nextPos) {
    const coords = nextScene.nextPos.split(' ').map(v => parseFloat(v));
    const [x, y, z] = coords;
    const angleRad = Math.atan2(z, x);
    nextAngle = angleRad * (180 / Math.PI);
  }
  
  preloadedSceneData[sceneNumber] = {
    image: img,
    angle: nextAngle,  // Ángulo precalculado
    loadedAt: Date.now()
  };
  
  console.log(`⚡ Preload: Escena ${sceneNumber} lista (ángulo: ${nextAngle}°)`);
}

/**
 * Actualiza la escena actual: cambia la imagen, regenera botones y orienta la cámara.
 * @param {boolean} skipOrient - Si true, no reorienta la cámara (ya fue hecha en handleNavigation)
 */
function updateScene(skipOrient = false) {
  const currentScene = scenes[currentLocation];
  if (!currentScene) {
    console.error(`❌ Escena ${currentLocation} no existe`);
    return;
  }

  // ⚡ Solo orienta si NO fue orientada previamente en handleNavigation
  if (!skipOrient) {
    orientCameraToNextButton();
  }
  
  // Cambiar la imagen del skybox
  const skybox = document.querySelector('#skybox');
  if (skybox) {
    skybox.setAttribute('src', currentScene.image);
  }
  
  // Actualizar display de ubicación (mostrar slug y número total dinámico)
  const locationDisplay = document.querySelector('#location-display');
  if (locationDisplay) {
    const totalScenes = Object.keys(scenes).length;
    const sceneSlug = currentScene && currentScene.slug ? currentScene.slug : `Escena ${currentLocation}`;
    // Mostrar índice relativo (originalIndex) si existe, si no usar el índice global
    const relativeIndex = currentScene && currentScene.originalIndex ? currentScene.originalIndex : currentLocation;
    locationDisplay.textContent = `${sceneSlug} — ${relativeIndex}`;
  }
  
  // Generar botones dinámicamente
  createButtonsForScene();
  createInfoPointsForScene();
  
  // ⚡ PRELOAD de la siguiente escena para mejor UX
  if (currentScene.nextDestination) {
    preloadNextScene(currentScene.nextDestination);
  }
  // Preload de botones con destino (extraButtons)
  if (currentScene.extraButtons) {
    currentScene.extraButtons.forEach(btn => {
      preloadNextScene(btn.destination);
    });
  }
  
  console.log(`✅ Escena ${currentLocation} cargada`);
}

/**
 * Orienta la cámara hacia la dirección correcta según la escena
 */
/**
 * Genera dinámicamente los botones para la escena actual.
 * Limpia los botones antiguos y crea los nuevos.
 * 
 * Estructura de botones:
 * - Botón NEXT: especificado en nextPos
 * - Botón PREV: usa prevPos explícito, o se calcula 180° de nextPos, o se omite
 * - Botones adicionales: definidos en extraButtons
 */
function createButtonsForScene() {
  const container = document.querySelector('#buttons-container');
  
  // Limpiar botones anteriores
  container.innerHTML = '';
  
  const currentScene = scenes[currentLocation];
  if (!currentScene) {
    console.error(`❌ Escena ${currentLocation} no tiene definición`);
    return;
  }
  
  const buttonsToCreate = [];
  let buttonIndex = 0;
  
  // ===== CREAR BOTÓN NEXT =====
  if (currentScene.nextDestination !== null && currentScene.nextPos) {
    buttonsToCreate.push({
      destination: currentScene.nextDestination,
      pos: currentScene.nextPos,
      color: '#1db954',
      icon: '➔',
      type: 'next',
      rotation: currentScene.nextRotation || '-46.261 120.859 -10.935'  // Rotación customizable
    });
    buttonIndex++;
  }
  
  // ===== CREAR BOTÓN PREV =====
  // Lógica: 
  // 1. Si hay prevDestination explícito, usarlo; si no, calcular prevDestination = currentLocation - 1
  // 2. Luego, usar prevPos explícito o calcular a partir de nextPos
  let prevPosition = null;
  let prevDestination = currentScene.prevDestination !== undefined ? currentScene.prevDestination : currentLocation - 1;
  
  // Resolver prevDestination si es un slug
  prevDestination = resolveDestination(prevDestination) || prevDestination;
  
  if (currentScene.prevPos) {
    // Si hay prevPos explícito, usarlo
    prevPosition = currentScene.prevPos;
    console.log(`📍 Using explicit prevPos: ${prevPosition}`);
  } else if (currentScene.nextPos && prevDestination > 0) {
    // Si no hay prevPos explícito pero hay nextPos, calcular automáticamente
    prevPosition = calculatePrevPosition(currentScene.nextPos);
    console.log(`📍 Calculated prevPos from nextPos: ${prevPosition}`);
  }
  
  if (prevPosition && prevDestination > 0) {
    buttonsToCreate.push({
      destination: prevDestination,
      pos: prevPosition,
      color: '#ff6b6b',
      icon: '⬅',
      type: 'prev',
      rotation: currentScene.prevRotation || '-28.339 -63.288 -12.217'  // Rotación customizable
    });
    buttonIndex++;
  }
  
  // ===== AGREGAR BOTONES ADICIONALES =====
  if (currentScene.extraButtons && currentScene.extraButtons.length > 0) {
    currentScene.extraButtons.forEach((btnConfig) => {
      buttonsToCreate.push(btnConfig);
    });
  }
  
  // ===== CREAR ENTIDADES DE BOTONES =====
  buttonsToCreate.forEach((btnConfig, index) => {
    // Crear entidad del botón
    const btnEntity = document.createElement('a-entity');
    btnEntity.setAttribute('class', 'clickable');
    btnEntity.setAttribute('data-button-id', index);
    btnEntity.setAttribute('data-button-type', btnConfig.type || 'extra');
    
    // Resolver el destino (slug → número) para guardarlo
    const resolvedDestination = resolveDestination(btnConfig.destination) || btnConfig.destination;
    btnEntity.setAttribute('data-destination', resolvedDestination);
    
    btnEntity.setAttribute('position', btnConfig.pos);
    
    // Usar modelo glTF en lugar de geometría cilíndrica
    btnEntity.setAttribute('gltf-model', '#arrow-model');
    btnEntity.setAttribute('scale', '7.5 7.5 7.5');
    
    // Aplicar rotación (del config o por defecto según tipo)
    if (btnConfig.rotation) {
      btnEntity.setAttribute('rotation', btnConfig.rotation);
    } else if (btnConfig.type === 'prev') {
      btnEntity.setAttribute('rotation', '-28.339 -63.288 -12.217');  // Rotación por defecto para prev
    } else {
      btnEntity.setAttribute('rotation', '-46.261 120.859 -10.935');  // Rotación por defecto para next
    }
    
    // Debug: Log para verificar que se crea
    console.log(`🎯 Arrow creado en ${btnConfig.pos} - Tipo: ${btnConfig.type}`);
    
    container.appendChild(btnEntity);
    
    // Añadir event listeners
    btnEntity.addEventListener('mouseenter', () => setButtonHover(btnEntity, true));
    btnEntity.addEventListener('mouseleave', () => setButtonHover(btnEntity, false));
    btnEntity.addEventListener('click', () => handleNavigation(btnEntity));
    
    btnEntity.addEventListener('raycaster-intersection', () => {
      console.log(`🔵 Raycaster en botón ${btnConfig.type || 'extra'} (${index})`);
      setButtonHover(btnEntity, true);
    });
    
    btnEntity.addEventListener('raycaster-intersection-cleared', () => {
      setButtonHover(btnEntity, false);
    });
  });
  
  console.log(`✨ Se crearon ${buttonsToCreate.length} botones para la escena ${currentLocation}`);
}

/**
 * Crea dinámicamente los puntos de información para la escena actual.
 * Los puntos muestran un icono clickeable que revela texto descriptivo con fondo blanco.
 */
function createInfoPointsForScene() {
  const container = document.querySelector('#buttons-container');
  const currentScene = scenes[currentLocation];
  
  if (!currentScene || !currentScene.infoPoints || currentScene.infoPoints.length === 0) {
    return;
  }
  
  currentScene.infoPoints.forEach((infoPoint, index) => {
    // Crear entidad del punto de info
    const infoEntity = document.createElement('a-entity');
    infoEntity.setAttribute('class', 'info-point');
    infoEntity.setAttribute('data-info-id', index);
    infoEntity.setAttribute('position', infoPoint.pos);
    
    // Geometría visible (pequeña esfera clickeable)
    infoEntity.setAttribute('geometry', 'primitive: sphere; radius: 0.3;');
    infoEntity.setAttribute('material', `color: ${infoPoint.color}; opacity: 0.6;`);
    
    // Crear contenedor para el texto
    // Billboard: siempre mira hacia la cámara
    const textContainer = document.createElement('a-entity');
    textContainer.setAttribute('position', '0 -1.5 0');
    textContainer.setAttribute('visible', 'false');
    textContainer.setAttribute('class', 'info-text-container');
    textContainer.setAttribute('billboard', '');  // Siempre mira a la cámara
    
    // Texto de información con mejor contraste y legibilidad
    const textEntity = document.createElement('a-text');
    textEntity.setAttribute('value', infoPoint.text);
    textEntity.setAttribute('align', 'center');
    textEntity.setAttribute('anchor', 'center');
    textEntity.setAttribute('position', '0 0 0');
    textEntity.setAttribute('scale', '1.5 1.5 1.5');  // Más grande para VR
    textEntity.setAttribute('color', infoPoint.color);
    textEntity.setAttribute('font', 'https://cdn.aframe.io/fonts/Roboto-msdf.json');
    textEntity.setAttribute('fontImage', 'https://cdn.aframe.io/fonts/Roboto-msdf.png');
    textEntity.setAttribute('maxWidth', '4');
    textEntity.setAttribute('wrapCount', '16');
    textEntity.setAttribute('letterSpacing', '3');  // Más espaciado
    textEntity.setAttribute('lineHeight', '65');  // Espaciado entre líneas
    // Outline grueso para mejor contraste
    textEntity.setAttribute('outlineWidth', '0.15');
    textEntity.setAttribute('outlineColor', '#000000');
    // Fondo adaptativo que se ajusta mejor al texto
    const bgEntity = document.createElement('a-plane');
    bgEntity.setAttribute('position', '0 0 -0.1');
    bgEntity.setAttribute('width', '5');  // Más ancho para cualquier texto
    bgEntity.setAttribute('height', '2.5');  // Más alto para multi-línea
    bgEntity.setAttribute('material', 'color: #000000; opacity: 0.15; side: double;');
    bgEntity.setAttribute('class', 'info-bg-subtle');
    textContainer.appendChild(bgEntity);
    
    textEntity.setAttribute('class', 'info-text');
    textContainer.appendChild(textEntity);
    
    infoEntity.appendChild(textContainer);
    container.appendChild(infoEntity);
    
    // Mostrar/ocultar texto + fondo SOLO con cursor visual (no raycaster de controles)
    infoEntity.addEventListener('mouseenter', () => {
      textContainer.setAttribute('visible', 'true');
      console.log(`ℹ️ Cursor sobre info punto ${index}: ${infoPoint.text}`);
    });
    
    infoEntity.addEventListener('mouseleave', () => {
      textContainer.setAttribute('visible', 'false');
    });
  });
  
  console.log(`ℹ️ Se crearon ${currentScene.infoPoints.length} puntos de información para la escena ${currentLocation}`);
}

/**
 * Orienta el skybox y botones hacia el botón NEXT sin transición
 * Para VR es mejor instantáneo (evita mareo)
 */
function orientCameraToNextButton() {
  const currentScene = scenes[currentLocation];
  if (!currentScene || !currentScene.nextPos) {
    return;
  }
  
  // Parsear la posición del botón NEXT
  const coords = currentScene.nextPos.split(' ').map(v => parseFloat(v));
  const [x, y, z] = coords;
  
  // Calcular el ángulo en el eje Y (yaw) usando atan2
  const angleRad = Math.atan2(z, x);
  const angleDeg = angleRad * (180 / Math.PI);
  
  // Rotar el skybox y los botones para que apunten hacia el NEXT
  const skybox = document.querySelector('#skybox');
  const buttonsContainer = document.querySelector('#buttons-container');
  
  if (skybox) {
    // ⚡ Cambio instantáneo (sin animación para no marear en VR)
    skybox.setAttribute('rotation', `0 ${angleDeg} 0`);
  }
  if (buttonsContainer) {
    buttonsContainer.setAttribute('rotation', `0 ${angleDeg} 0`);
  }
  
  console.log(`📷 Skybox y botones orientados instantáneamente a ${angleDeg}°`);
}

/**
 * Calcula la posición del botón PREV (180° atrás del NEXT)
 * Si nextPos es 'x y z', prevPos será '-x y -z'
 * @param {string} nextPosString - Posición del botón next (ej: '3 1.6 -4')
 * @returns {string} Posición calculada del prev
 */
function calculatePrevPosition(nextPosString) {
  const coords = nextPosString.split(' ').map(v => parseFloat(v));
  
  if (coords.length !== 3) {
    console.error('❌ Formato de posición inválido:', nextPosString);
    return nextPosString;
  }
  
  const [x, y, z] = coords;
  // Invertir X y Z para rotar 180 grados alrededor del eje Y
  const prevPos = `${-x} ${y} ${-z}`;
  
  console.log(`📍 Prev calculado: "${nextPosString}" → "${prevPos}"`);
  return prevPos;
}

/**
 * Resuelve el valor de `startingScene` que puede ser slug, número o string-numero
 * Devuelve un número de escena válido (fallback = 1)
 */
function resolveStartScene(ref) {
  if (ref === null || ref === undefined) return 1;
  if (typeof ref === 'number') return ref;
  const parsed = parseInt(ref);
  if (!isNaN(parsed)) return parsed;
  if (typeof resolveDestination === 'function') {
    const resolved = resolveDestination(ref);
    if (resolved) return resolved;
  }
  console.warn('⚠️ startingScene no válido, usando 1 como fallback:', ref);
  return 1;
}

/**
 * Navega a una escena específica basado en el botón presionado.
 * Soporta slugs (textuales) y números para especificar destinos.
 */
function handleNavigation(button) {
  const destination = button.dataset.destination;
  
  if (destination === 'null' || destination === null) {
    console.log('🚫 Este botón no tiene destino');
    return;
  }
  
  // Convertir slug a número si es necesario
  const destinationScene = parseInt(destination) || resolveDestination(destination);
  
  if (destinationScene && scenes[destinationScene]) {
    // ⚡ ANTES de cambiar de escena: Orienta la cámara a la siguiente escena
    const nextScene = scenes[destinationScene];
    if (nextScene && nextScene.nextPos) {
      const coords = nextScene.nextPos.split(' ').map(v => parseFloat(v));
      const [x, y, z] = coords;
      const angleRad = Math.atan2(z, x);
      const angleDeg = angleRad * (180 / Math.PI);
      
      // Rotar skybox y botones ANTES de cambiar escena
      const skybox = document.querySelector('#skybox');
      const buttonsContainer = document.querySelector('#buttons-container');
      
      if (skybox) {
        skybox.setAttribute('rotation', `0 ${angleDeg} 0`);
      }
      if (buttonsContainer) {
        buttonsContainer.setAttribute('rotation', `0 ${angleDeg} 0`);
      }
    }
    
    // AHORA sí cambiar de escena (la cámara ya está orientada correctamente)
    currentLocation = destinationScene;
    updateScene(true);  // true = ya fue orientada en handleNavigation, no re-rotar
    
    // ⚡ Preload escenas accesibles desde aquí
    const scene = scenes[destinationScene];
    if (scene.nextDestination) {
      preloadNextScene(scene.nextDestination);
    }
    
    console.log(`🎯 Navegando a escena: ${destinationScene}`);
  } else {
    console.error(`❌ La escena ${destinationScene} no existe`);
  }
}

/**
 * Feedback visual
 */
function triggerFeedback() {
  console.log('✨ Click ejecutado');
}

/**
 * Cambia qué láser está activo (visible)
 */
function setActiveLaser(hand) {
  const leftCtrl = document.querySelector('#left-controller');
  const rightCtrl = document.querySelector('#right-controller');
  
  if (hand === 'left') {
    leftCtrl.setAttribute('raycaster', 'showLine', 'true');
    rightCtrl.setAttribute('raycaster', 'showLine', 'false');
    activeLaser = 'left';
    console.log('🔵 Láser izquierdo ACTIVO');
  } else {
    leftCtrl.setAttribute('raycaster', 'showLine', 'false');
    rightCtrl.setAttribute('raycaster', 'showLine', 'true');
    activeLaser = 'right';
    console.log('🟠 Láser derecho ACTIVO');
  }
}

/**
 * Aplica efecto hover para modelos glTF
 */
function setButtonHover(button, isHovering) {
  if (!button) return;
  
  if (isHovering) {
    // Agrandar el modelo
    button.setAttribute('scale', '8.5 8.5 8.5');
  } else {
    // Volver al tamaño normal
    button.setAttribute('scale', '7.5 7.5 7.5');
  }
}

// ===== INICIALIZACIÓN =====


document.addEventListener('DOMContentLoaded', function() {
  console.log('🎮 Inicializando Recorrido VR para Meta Quest 3...');
  
  const rightController = document.querySelector('#right-controller');
  const leftController = document.querySelector('#left-controller');
  
  if (!rightController || !leftController) {
    console.error('❌ No se encontraron los controles');
    return;
  }
  
  // ===== DETECCIÓN DE GATILLO - CONTROL DERECHO =====
  
  rightController.addEventListener('triggerdown', () => {
    setActiveLaser('right');
  });
  
  rightController.addEventListener('triggerup', () => {
    console.log('🎮 TRIGGER DERECHO PRESIONADO');
    const raycaster = rightController.components.raycaster;
    
    if (raycaster && raycaster.intersectedEls.length > 0) {
      const intersectedEl = raycaster.intersectedEls[0];
      console.log('🎯 Elemento detectado:', intersectedEl.id);
      
      if (intersectedEl.classList.contains('clickable')) {
        handleNavigation(intersectedEl);
      }
    }
  });
  
  // ===== DETECCIÓN DE GATILLO - CONTROL IZQUIERDO =====
  
  leftController.addEventListener('triggerdown', () => {
    setActiveLaser('left');
  });
  
  leftController.addEventListener('triggerup', () => {
    console.log('🎮 TRIGGER IZQUIERDO PRESIONADO');
    const raycaster = leftController.components.raycaster;
    
    if (raycaster && raycaster.intersectedEls.length > 0) {
      const intersectedEl = raycaster.intersectedEls[0];
      console.log('🎯 Elemento detectado:', intersectedEl.id);
      
      if (intersectedEl.classList.contains('clickable')) {
        handleNavigation(intersectedEl);
      }
    }
  });
  
  // ===== INICIALIZAR ESCENA =====
  
  // Resolver `startingScene` (puede ser slug o número) antes de inicializar
  currentLocation = resolveStartScene(startingScene);
  updateScene();
  setActiveLaser('right');  // Láser derecho activo al inicio
  
  // ⚡ Preload inicial de las primeras 3 escenas para mejor UX
  preloadNextScene(2);
  preloadNextScene(3);
  
  console.log('✅ Sistema listo.');
});

