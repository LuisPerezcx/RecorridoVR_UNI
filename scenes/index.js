/* ========================================
   ÍNDICE PRINCIPAL DE ESCENAS
   Combina todas las áreas en un único objeto global 'scenes'
   
   La propiedad "area" de cada escena ya no es necesaria -
   está implícita en la estructura de archivos separados
   
   ═══════════════════════════════════════════════════════════
   NUMERACIÓN DE ESCENAS POR ÁREA:
   ═══════════════════════════════════════════════════════════
   ⚠️  IMPORTANTE: Cada área tiene su propio RANGO de números
   
   area1-entrada-pinos.js    → Escenas 1-7    (7 escenas)
   area2-estacionamiento.js  → Escenas 8-14   (7 escenas) ← COMIENZA EN 8
   area3-biblioteca.js       → Escenas 15-22  (8 escenas) ← COMIENZA EN 15
   area4-...
   
   ⭐ CLAVE: La primera escena de cada nueva área comienza donde
      terminó la anterior (NO vuelve a empezar en 1)
   
   ═══════════════════════════════════════════════════════════
   CÓMO AGREGAR UNA NUEVA ÁREA AL PROYECTO:
   ═══════════════════════════════════════════════════════════
   
   PASO 1: Crear archivo de la nueva área
   ────────────────────────────────────────
   Archivo: scenes/area2-estacionamiento.js
   
   ⚠️  RECUERDA: Empeza en escena 8 (donde terminó área 1)
   
   Contenido base:
   ┌──────────────────────────────────────────┐
   │ const area2Estacionamiento = {           │
   │   8: {  ← COMIENZA EN 8                  │
   │     image: 'IA fotos/.../.jpg',         │
   │     nextDestination: 9,  ← va a 9      │
   │     nextPos: '10 1.5 -2',               │
   │     prevPos: null,                       │
   │     extraButtons: [],                    │
   │     infoPoints: []                       │
   │   },                                     │
   │   9: { ... },                            │
   │   10: { ... },                           │
   │   // ... más escenas hasta la que sea... │
   │ };                                       │
   └──────────────────────────────────────────┘
   
   PASO 2: Cargar en index.html
   ────────────────────────────────
   Añadir en index.html (ANTES de scenes/index.js):
   <script src="scenes/area1-entrada-pinos.js"></script>
   <script src="scenes/area2-estacionamiento.js"></script>  ← NUEVA
   <script src="scenes/index.js"></script>
   
   PASO 3: Combinar en este archivo
   ─────────────────────────────────
   Modificar la función combineScenes() (abajo):
   return {
     ...area1EntradaPinos,           // Escenas 1-7
     ...area2Estacionamiento,        // Escenas 8-14 ← AGREGAR AQUÍ
   };
   
   ═══════════════════════════════════════════════════════════
   VENTAJAS DE ESTA ESTRUCTURA:
   ═══════════════════════════════════════════════════════════
   ✅ Cada área en su propio archivo → Sin conflictos de merge
   ✅ Múltiples personas pueden trabajar simultáneamente
   ✅ Fácil de mantener y escalar
   ✅ Claridad: cada archivo = una zona del campus
   
   ======================================== */

/**
 * Combina todos los objetos de escenas de diferentes áreas
 * en un único objeto 'scenes' que usa la aplicación.
 * 
 * Sintaxis: ...areaXNombre expande todas las escenas de esa área
 * Resultado: un objeto con claves numéricas (1, 2, 3, 4, 5, 6, 7, 8, ...)
 * 
 * EJEMPLO:
 * area1EntradaPinos = { 1: {...}, 2: {...}, 3: {...}, 4: {...}, ... }
 * area2Estacionamiento = { 8: {...}, 9: {...}, 10: {...}, ... }
 * Resultado: scenes = { 1: {...}, 2: {...}, ..., 8: {...}, 9: {...}, ... }
 */
function combineScenes() {
  return {
    ...area1EntradaPinos,       // Escenas 1-7
    ...area2Estacionamiento
    // ...area2EstacionamientoBiblioteca,  // Escenas 8+ (descomentar cuando exista)
    // ...area3OtroLugar,                   // Escenas X+ (agregar más según sea necesario)
  };
}

// Crear el objeto global 'scenes' combinando todas las áreas
const scenes = combineScenes();

console.log(`✅ Escenas cargadas: ${Object.keys(scenes).length} locaciones disponibles`);
