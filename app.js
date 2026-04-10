/* ========================================
   SCRIPT PRINCIPAL - Recorrido Universidad VR
   OPTIMIZADO PARA META QUEST 3
   ======================================== */

// ⚙️ CONFIGURACIÓN DE DESARROLLO
const startingScene = 1;  // CAMBIAR AQUÍ para empezar en otra escena (1-7)

let currentLocation = startingScene;
let activeLaser = 'right';  // 'left' o 'right' - controla qué láser está visible

/**
 * Actualiza la escena actual: cambia la imagen, regenera botones y orienta la cámara.
 */
function updateScene() {
  const currentScene = scenes[currentLocation];
  if (!currentScene) {
    console.error(`❌ Escena ${currentLocation} no existe`);
    return;
  }

  // Cambiar la imagen del skybox
  const skybox = document.querySelector('#skybox');
  if (skybox) {
    skybox.setAttribute('src', currentScene.image);
  }
  
  // Actualizar display de ubicación
  const locationDisplay = document.querySelector('#location-display');
  if (locationDisplay) {
    locationDisplay.textContent = `${currentLocation}/7`;
  }
  
  // Generar botones dinámicamente
  createButtonsForScene();
  createInfoPointsForScene();
  
  // Orientar la cámara hacia el botón NEXT
  orientCameraToNextButton();
  
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
 * - Botón PREV: calculado automáticamente 180° atrás (si showPrev es true)
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
      type: 'next'
    });
    buttonIndex++;
  }
  
  // ===== CREAR BOTÓN PREV (calculado automáticamente) =====
  if (currentScene.showPrev && currentScene.nextPos) {
    const prevPos = calculatePrevPosition(currentScene.nextPos);
    // El destino prev es la escena anterior
    const prevDestination = currentLocation - 1;
    
    if (prevDestination > 0) {
      buttonsToCreate.push({
        destination: prevDestination,
        pos: prevPos,
        color: '#ff6b6b',
        icon: '⬅',
        type: 'prev'
      });
      buttonIndex++;
    }
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
    btnEntity.setAttribute('data-destination', btnConfig.destination);
    btnEntity.setAttribute('position', btnConfig.pos);
    btnEntity.setAttribute('geometry', 'cylinder: torus; radius: 1.5; height: 0.6;');
    btnEntity.setAttribute('material', `color: ${btnConfig.color}; opacity: 0.5; emissive: ${btnConfig.color};`);
    
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
 * Los puntos muestran un icono clickeable que revela texto descriptivo.
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
    infoEntity.setAttribute('background', 'color: white; opacity: 0.8;');
    
    // Geometría visible (pequeña esfera)
    infoEntity.setAttribute('geometry', 'primitive: sphere; radius: 0.3;');
    infoEntity.setAttribute('material', `color: ${infoPoint.color}; opacity: 0.6;`);
    
    // Texto de información (inicialmente invisible)
    const textEntity = document.createElement('a-text');
    textEntity.setAttribute('value', infoPoint.text);
    textEntity.setAttribute('align', 'center');
    textEntity.setAttribute('anchor', 'center');
    textEntity.setAttribute('position', '0 -1.5 0');
    textEntity.setAttribute('scale', '2 2 2');
    textEntity.setAttribute('color', infoPoint.color);
    textEntity.setAttribute('visible', 'false');
    textEntity.setAttribute('class', 'info-text');
    
    infoEntity.appendChild(textEntity);
    container.appendChild(infoEntity);
    
    // Mostrar/ocultar texto SOLO con cursor visual (no raycaster de controles)
    infoEntity.addEventListener('mouseenter', () => {
      textEntity.setAttribute('visible', 'true');
      console.log(`ℹ️ Cursor sobre info punto ${index}: ${infoPoint.text}`);
    });
    
    infoEntity.addEventListener('mouseleave', () => {
      textEntity.setAttribute('visible', 'false');
    });
  });
  
  console.log(`ℹ️ Se crearon ${currentScene.infoPoints.length} puntos de información para la escena ${currentLocation}`);
}

/**
 * Orienta el skybox y botones hacia el botón NEXT para una navegación natural
 * Mantiene look-controls activo para que el usuario mueva su cabeza
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
    skybox.setAttribute('rotation', `0 ${angleDeg} 0`);
  }
  if (buttonsContainer) {
    buttonsContainer.setAttribute('rotation', `0 ${angleDeg} 0`);
  }
  
  console.log(`📷 Skybox y botones orientados a ${angleDeg}° hacia botón NEXT en posición [${x}, ${y}, ${z}]`);
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
 * Navega a una escena específica basado en el botón presionado.
 */
function handleNavigation(button) {
  const destination = button.dataset.destination;
  
  if (destination === 'null' || destination === null) {
    console.log('🚫 Este botón no tiene destino');
    return;
  }
  
  const destinationScene = parseInt(destination);
  if (scenes[destinationScene]) {
    currentLocation = destinationScene;
    updateScene();
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
 * Aplica efecto hover
 */
function setButtonHover(button, isHovering) {
  if (!button) return;
  
  // Obtener el color actual del botón
  const currentColor = button.getAttribute('material')?.color || '#ffffff';
  
  if (isHovering) {
    // Hacer más brillante (aumentar escala)
    button.setAttribute('scale', '1.5 1.5 1.5');
  } else {
    // Volver al tamaño normal
    button.setAttribute('scale', '1 1 1');
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
  
  updateScene();
  setActiveLaser('right');  // Láser derecho activo al inicio
  console.log('✅ Sistema listo.');
});

