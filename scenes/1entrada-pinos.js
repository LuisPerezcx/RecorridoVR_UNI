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
    0: {
        slug: 'entrada-principal0',
        image: 'IA fotos/entrada-pinos/0.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-principal',                  // Slug: segunda escena de entrada
        nextPos: '-14.877 1.023 -0.486',   // Posición del botón NEXT a la derecha
        nextRotation: '-41.150 118.953 -20.215',
        prevPos: null,                       // Primera escena: no hay botón atrás
        extraButtons: [],
        infoPoints: [
            {
                pos: '8 -2 -10', // 
                text: 'Entrada principal\n de la Universidad\n<--', // saltos de línea con \n
                scale: '3 1.5 1.5',          //tamaño de la placa (ajustar) (ancho, alto, profundidad) por lo general solo se toca el ancho (x) y el alto (y)
                rotation: '0 0 0',       //  gira la placa si hace falta por lo generar solo se rota en Y para que quede de frente al usuario x, y, z
                textOffset: '0 2.65 0.2'    // posición del texto sobre la cara (x,y,z) (ajustar para que quede centrado)
            }
        ]
    },
    1: {
        slug: 'entrada-principal',
        image: 'IA fotos/entrada-pinos/1.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-2',                  // Slug: segunda escena de entrada
        nextPos: '14.877 1.023 -0.486',   // Posición del botón NEXT a la derecha
        nextRotation: '-41.150 118.953 -20.215',
        prevPos: null,                       // Primera escena: no hay botón atrás
        extraButtons: [],
        infoPoints: [
            {
                pos: '8 -2 -10', // 
                text: 'Entrada principal\n de la Universidad\n<--', // saltos de línea con \n
                scale: '3 1.5 1.5',          //tamaño de la placa (ajustar) (ancho, alto, profundidad) por lo general solo se toca el ancho (x) y el alto (y)
                rotation: '0 0 0',       //  gira la placa si hace falta por lo generar solo se rota en Y para que quede de frente al usuario x, y, z
                textOffset: '0 2.65 0.2'    // posición del texto sobre la cara (x,y,z) (ajustar para que quede centrado)
            },
            {
                pos: '-10 -2 -2',
                text: 'Edificio de Administracion\n -->', //no acepta acentos a-text no soporta acentos ni caracteres especiales, simplemente omitirlos.
                color: '#9b59b6',
                scale: '3.7 1.5 1',
                rotation: '0 100 0',
                textOffset: '0 2.5 0.2'
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
        nextPos: '13.309 0.500 0.653',     // Botón adelante
        nextRotation: '-48.291 122.865 -34.317',
        prevPos: '-13.396 0.623 1.130',                       // PREV se calcula automático (-13.264 0.500 0.508)
        extraButtons: [],
        infoPoints: []
    },

    3: {
        slug: 'entrada-posgrado',
        image: 'IA fotos/entrada-pinos/3.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-3',
        nextPos: '13.236 0.500 0.189',
        nextRotation: '-43.881 128.131 -22.887',
        prevPos: '-15.606 -1.161 0.544',                       // PREV automático (-13.25 0.500 -0.200)
        prevRotation: '-28.339 -63.288 -12.217',
        extraButtons: [
            {
                destination: 'posgrado-1',                  // Slug: salto directo a capilla
                pos: '0.021 0.145 -15.009',              // A la izquierda y lejos
                rotation: '-41.970 -152.917 -34.666'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    4: {
        slug: 'entrada-pinos-3',
        image: 'IA fotos/entrada-pinos/9.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-4',
        nextPos: '-8.316 0.877 -1.135',
        nextRotation: '-59.687 -128.244 -127.914',
        prevPos: '11.17117 -0.0665 0.0916',                       // PREV automático (13.493 0.113 -0.090)
        prevRotation: '-30.948888 62.58074221 -163.530176',
        extraButtons: [
            {
                destination: 'camino-aulas-e-15',                  // Slug: salto a estacionamiento
                pos: '-6.54895 0.70819 -11.13195',                // A la izquierda y lejos
                rotation:  '-25.83294810 166.41387272 -154.424157'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    //estacionamiento
    5: {
        slug: 'entrada-pinos-4',
        image: 'IA fotos/entrada-pinos/4.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-5',
        nextPos: '-8.316 0.877 -1.135',
        nextRotation: '-59.687 -128.244 -127.914',
        prevPos: '7.590 0.280 0.320',                       // PREV automático (13.493 0.113 -0.090)
        prevRotation: '-29.099 62.028 -158.722',
        extraButtons: [
            {
                destination: 'estacionamiento-entrada',                  // Slug: salto a estacionamiento
                pos: '-4.458 0.170 8.637',                // A la izquierda y lejos
                color: '#1234f3',               // Color naranja
                rotation:  '-51.160 88.450 -109.401'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    6: {
        slug: 'entrada-pinos-5',
        image: 'IA fotos/entrada-pinos/5.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-6',
        nextPos: '-9.304 0.071 -1.372',
        nextRotation: '-43.476 -69.012 -40.630',
        prevPos: '11.259 -1.009 1.897',
        prevRotation: '-38.539 52.296 -147.993',                       // PREV automático (-2 1.6 5)
        extraButtons: [
            {
                destination: 'passillo-a-1',               
                pos: '-0.767 0.342 9.364',            
                rotation: '-21.207 -28.522 -172.339'  
            }
        ],
        infoPoints: []
    },
    7: {
        slug: 'entrada-pinos-6',
        image: 'IA fotos/entrada-pinos/6.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-7',
        nextPos: '0.173 0.727 -10.135',
        nextRotation: '-28.935 -147.378 -12.955',
        prevPos: '-11.059 -0.391 0.923', 
        prevRotation: '-28.339 -63.288 -12.217',                      // PREV automático (-2 1.6 5)
        extraButtons: [
            {
                destination: 'camino-aulas-e-1',
                pos: '8.997 0.477 -4.428',
                rotation: '-25.867 131.243 -6.709'
            }
        ],
        infoPoints: []
    },

    8: {
        slug: 'entrada-pinos-7',
        image: 'IA fotos/entrada-pinos/7.PHOTOSPHERE.jpg',
        nextDestination: 'entrada-pinos-8',
        nextPos: '-9.042 0.693 -0.346',
        nextRotation: '-59.444 -142.459 -127.335',
        prevPos: '8.940 0.755 1.181',                       // PREV automático (5 1.6 1)
        prevRotation: '-27.864 62.143 -170.116', 
        extraButtons: [],
        infoPoints: []
    },

    // ═════════════════════════════════════════════════════════
    // ESCENA 7: ÚLTIMA UBICACIÓN (FIN DEL RECORRIDO)
    // Botones: Solo PREV (explícito) - sin NEXT porque es el final
    // ═════════════════════════════════════════════════════════
    9: {
        slug: 'entrada-pinos-8',
        image: 'IA fotos/entrada-pinos/8.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-3',               // Sin siguiente (última escena)
        nextPos: '8.577 0.223 -0.640',                       // SIN botón NEXT
        nextRotation: '-52.648 133.542 -27.621',
        prevPos: '-8.666 -0.349 -0.774',                       // PREV automático (5 1.6 1)
        prevRotation: '-24.331 -63.573 -15.366',
        extraButtons: [],
        infoPoints: []
    }
};
