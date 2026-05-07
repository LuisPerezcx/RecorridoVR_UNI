/* ========================================
   ÍNDICE PRINCIPAL DE ESCENAS
   Combina todas las áreas en un único objeto global 'scenes'
   
   AHORA CON SOPORTE PARA SLUGS:
   - Cada escena tiene un ID textual único (slug)
   - Las referencias usan slugs en lugar de números
   - Esto permite agregar/eliminar escenas sin renumerar nada
   
   ═══════════════════════════════════════════════════════════
   NUMERACIÓN DE ESCENAS POR ÁREA:
   ═══════════════════════════════════════════════════════════
   ⚠️  IMPORTANTE: Cada área tiene su propio RANGO de números
   
   area1-entrada-pinos.js    → Escenas 1-7    (7 escenas)
   area2-estacionamiento.js  → Escenas 8-15   (8 escenas) ← COMIENZA EN 8
   area3-biblioteca.js       → Escenas 16-...          ← COMIENZA EN 16
   
   ⭐ CLAVE: La primera escena de cada nueva área comienza donde
      terminó la anterior (NO vuelve a empezar en 1)
   
   ═══════════════════════════════════════════════════════════
   SLUG NAMING CONVENTION:
   ═══════════════════════════════════════════════════════════
   area-name-description
   
   Ejemplos:
   - 'entrada-principal' (escena 1)
   - 'entrada-pinos-2' (escena 2)
   - 'entrada-capilla' (escena 3)
   - 'estacionamiento-entrada' (escena 8)
   - 'estacionamiento-2' (escena 9)
   
   ======================================== */

/**
 * Combina todos los objetos de escenas de diferentes áreas
 * en un único objeto 'scenes' que usa la aplicación.
 * 
 * TAMBIÉN crea un mapeo reverso: slug → número de escena
 * para resolver referencias automáticamente.
 */
function combineScenes() {
  // Lista de áreas en el orden deseado; agregar nuevas áreas aquí
  const areas = [
    area1EntradaPinos,
    area2Estacionamiento,
    posgrado,
    camInstituto,
    biblioteca,
    caminoAulasE,
    pasilloA,
    pasilloC,
    caminoSalas,
    caminoCafe,
    labsBiologia,
  ];

  const combined = {};
  let index = 1;

  // Para cada área, iterar sus escenas en el orden de sus claves numéricas
  for (const area of areas) {
    if (!area) continue;
    const entries = Object.entries(area).sort((a, b) => Number(a[0]) - Number(b[0]));
    for (const [origKey, sceneData] of entries) {
      // No mutamos el objeto original: clonamos y añadimos el índice relativo
      combined[index] = Object.assign({}, sceneData, { originalIndex: Number(origKey) });
      index++;
    }
  }

  return combined;
}

/**
 * Crea un mapeo reverso: slug → número de escena
 * Permite convertir referencias como 'entrada-principal' → 1
 */
function createSlugMap() {
  const slugMap = {};
  for (const [sceneNumber, sceneData] of Object.entries(scenes)) {
    if (sceneData.slug) {
      slugMap[sceneData.slug] = parseInt(sceneNumber);
    }
  }
  return slugMap;
}

// Crear el objeto global 'scenes' combinando todas las áreas
const scenes = combineScenes();

// Crear mapeo de slugs → números
const slugMap = createSlugMap();

console.log(`✅ Escenas cargadas: ${Object.keys(scenes).length} locaciones disponibles`);
console.log(`📍 Slugs mapeados: ${Object.keys(slugMap).length}`);

/**
 * Resuelve un slug o número a su número de escena
 * Soporta ambos: strings (slugs) o números (compatibilidad hacia atrás)
 * 
 * @param {string|number} destination - Slug (string) o número (number)
 * @returns {number|null} Número de escena o null si no existe
 * 
 * EJEMPLOS:
 * resolveDestination('entrada-principal')      → 1
 * resolveDestination('estacionamiento-entrada') → 8
 * resolveDestination(5)                         → 5 (número directo)
 * resolveDestination(null)                      → null
 */
function resolveDestination(destination) {
  if (destination === null || destination === undefined) {
    return null;
  }
  
  // Si ya es un número, devolverlo tal cual (compatibilidad hacia atrás)
  if (typeof destination === 'number') {
    return destination;
  }
  
  // Si es string y está en el mapa de slugs, resolver
  if (typeof destination === 'string') {
    const resolved = slugMap[destination];
    if (resolved !== undefined) {
      return resolved;
    } else {
      console.warn(`⚠️  Slug no encontrado: "${destination}"`);
      return null;
    }
  }
  
  return null;
}
