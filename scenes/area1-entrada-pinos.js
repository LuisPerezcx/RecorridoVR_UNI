/* ========================================
   ÁREA 1: ENTRADA PINOS
   Escenas 1-7 del recorrido universitario
   
   ESTRUCTURA DE CADA ESCENA:
   
   {
     image: 'ruta/imagen.jpg',           // Imagen panorámica 360°
     nextDestination: número,             // Escena a la que lleva el botón NEXT (null = no hay)
     nextPos: 'x y z',                    // Posición del botón NEXT en el espacio 3D
     nextRotation: 'x y z',               // (Opcional) Rotación del botón NEXT
     prevDestination: número | undefined, // Escena a la que lleva el botón PREV
                                          // - Si NO se especifica: usa currentLocation - 1 (escena anterior)
                                          // - Si se especifica: va a esa escena exacta (útil para saltar entre áreas)
     prevPos: 'x y z' | null,            // Posición del botón PREV
                                          // - Si es null: se calcula automático a 180° de nextPos
                                          // - Si tiene valor: usa esa posición exacta
     prevRotation: 'x y z',               // (Opcional) Rotación del botón PREV
     extraButtons: [ {...}, {...} ],      // Botones adicionales (ej: accesos directos)
                                          // - Cada botón: {destination, pos, color, rotation (opcional)}
     infoPoints: [ {...}, {...} ]         // Puntos informativos interactivos
   }
   
   EJEMPLO: NAVEGACIÓN LINEAL (dentro del área)
   {
     nextDestination: 2,
     nextPos: '14.75 1.009 -1.036',     // ← NEXT aquí
     nextRotation: '-46.261 120.859 -10.935',  // ← Rotación custom del NEXT (opcional)
     prevDestination: undefined,        // ← PREV va automático a escena 1 (currentLocation - 1)
     prevPos: null,                      // ← Posición calculada automático a 180°
     prevRotation: '-28.339 -63.288 -12.217',  // ← Rotación custom del PREV (opcional)
   }
   
   EJEMPLO: SALTAR A OTRA ÁREA
   {
     nextDestination: 9,
     nextPos: '-6.73 1.5 8.9',          // ← NEXT a escena 9 (Área 2)
     prevDestination: 4,                // ← PREV va a escena 4 EN LUGAR DE escena 7 (la anterior)
     prevPos: '6.73 1.5 -8.9',          // Posición del botón PREV EXPLÍCITA
   }
   
   EJEMPLO: SOLO BOTÓN PREV (sin next)
   {
     nextDestination: null,              // Sin siguiente
     nextPos: null,                      // Sin botón NEXT
     prevDestination: 5,                 // PREV va a escena 5 (explícito)
     prevPos: '5 1.6 1',                // ← PREV EXPLÍCITO
   }
   
   ======================================== */

const area1EntradaPinos = {
    // ═════════════════════════════════════════════════════════
    // ESCENA 1: PRIMERA UBICACIÓN (ENTRADA PRINCIPAL)
    // Botones: NEXT (hacia escena 2) + EXTRA (acceso directo a capilla)
    // ═════════════════════════════════════════════════════════
    1: {
        slug: 'entrada-principal',
        image: 'IA fotos/entrada-pinos/1.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-2',                  // Slug: segunda escena de entrada
        nextPos: '14.75 1.009 -1.036',      // Posición del botón NEXT a la derecha
        prevPos: null,                       // Primera escena: no hay botón atrás
        extraButtons: [
            {
                destination: 'entrada-capilla',                  // Slug: salto directo a capilla
                pos: '-15 1.5 -8',              // A la izquierda y lejos
                color: '#f39c12',               // Color naranja
                rotation: '-47.609 -52.847 -23.141'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: [
            {
                pos: '8 2 -10',
                text: 'Entrada principal de la Universidad',
                color: '#3498db'
            },
            {
                pos: '-8 2 -10',
                text: 'Edificio de Administración',
                color: '#9b59b6'
            }
        ]
    },
    // ═════════════════════════════════════════════════════════
    // ESCENAS 2-6: RECORRIDO LINEAL
    // Botones: NEXT (siguiente) + PREV automático (atrás a 180°)
    // ═════════════════════════════════════════════════════════
    2: {
        slug: 'entrada-pinos-2',
        image: 'IA fotos/entrada-pinos/2.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-posgrado',                  // Slug: a posgrado
        nextPos: '13.264 0.500 -0.508',     // Botón adelante
        prevPos: null,                       // PREV se calcula automático (-13.264 0.500 0.508)
        extraButtons: [],
        infoPoints: []
    },

    3: {
        slug: 'entrada-posgrado',
        image: 'IA fotos/entrada-pinos/3.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-4',
        nextPos: '13.25 0.500 0.200',
        prevPos: null,                       // PREV automático (-13.25 0.500 -0.200)
        extraButtons: [],
        infoPoints: []
    },
    //estacionamiento
    4: {
        slug: 'entrada-pinos-4',
        image: 'IA fotos/entrada-pinos/4.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-5',
        nextPos: '-14.2 0.639 0.090',
        prevPos: null,                       // PREV automático (13.493 0.113 -0.090)
        extraButtons: [
            {
                destination: 'estacionamiento-entrada',                  // Slug: salto a estacionamiento
                pos: '-7.07 0.619 13.2',                // A la izquierda y lejos
                color: '#1234f3',               // Color naranja
                rotation: '-46.261 120.859 -10.935'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },

    5: {
        slug: 'entrada-pinos-5',
        image: 'IA fotos/entrada-pinos/5.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-6',
        nextPos: '0.395 0.746 -11.818',
        prevPos: null,                       // PREV automático (-2 1.6 5)
        extraButtons: [],
        infoPoints: []
    },

    6: {
        slug: 'entrada-pinos-6',
        image: 'IA fotos/entrada-pinos/6.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-7',
        nextPos: '-5 1.6 -1',
        prevPos: null,                       // PREV automático (5 1.6 1)
        extraButtons: [],
        infoPoints: []
    },

    // ═════════════════════════════════════════════════════════
    // ESCENA 7: ÚLTIMA UBICACIÓN (FIN DEL RECORRIDO)
    // Botones: Solo PREV (explícito) - sin NEXT porque es el final
    // ═════════════════════════════════════════════════════════
    7: {
        slug: 'entrada-pinos-7',
        image: 'IA fotos/entrada-pinos/7.PHOTOSPHERE.jpg',
        nextDestination: null,               // Sin siguiente (última escena)
        nextPos: null,                       // SIN botón NEXT
        prevPos: '5 1.6 1',                 // PREV EXPLÍCITO (porque no hay nextPos para calcularlo)
        extraButtons: [],
        infoPoints: []
    }
};
