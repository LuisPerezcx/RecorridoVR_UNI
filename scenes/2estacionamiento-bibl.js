const area2Estacionamiento = {
    8: {
        slug: 'estacionamiento-entrada',
        image: 'IA fotos/estacionamiento-biblioteca/1.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-2',                  // Slug: siguiente
        nextPos: '-13.925 0.593 9.358',            // Posición del botón NEXT
        nextRotation: '-21.951 -30.990 -10.915',    // (Opcional) Rotación del botón NEXT
        prevDestination: 'entrada-pinos-4',                  // Slug: vuelve a entrada pinos 4
        prevPos: '12.721 1.009 0.456',            // Posición del botón PREV
        prevRotation: '-21.941 105.441 -10.915',    // (Opcional) Rotación del botón PREV
        extraButtons: [],
        infoPoints: []
    },
    9: {
        slug: 'estacionamiento-2',
        image: 'IA fotos/estacionamiento-biblioteca/2.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-3',                  // Slug: a escena 3
        nextPos: '-13.082 0.214 0.894', 
        nextRotation: '-18.069 -99.932 -177.858',    // Botón adelante
        prevPos: null,                       // PREV se calcula automático (-13.264 0.500 0.508)
        extraButtons: [
            {
                destination: 'camino-instituto-1',                  // Slug: salto directo a capilla
                pos: '0.214 0.487 -11.556',              // A la izquierda y lejos
                rotation: '-6.353 119.473 -162.669'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    10: {
        slug: 'estacionamiento-3',
        image: 'IA fotos/estacionamiento-biblioteca/3.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-4',
        nextPos: '-10.709 -0.189 -13.704',
        nextRotation: '-43.317 168.572 41.600',
        prevPos: '13.989 0.121 0.940',
        prevRotation: '-28.628 44.324 94.403',
        extraButtons: [],
        infoPoints: []
    },
    11: {
        slug: 'estacionamiento-4',
        image: 'IA fotos/estacionamiento-biblioteca/4.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-5',
        nextPos: '-13.703 0.374 0.328',
        nextRotation: '-22.358 -27.062 -37.642',
        prevPos: '11.483 -1.602 11.473',
        prevRotation: '-32.582 94.618 131.556',
        extraButtons: [],
        infoPoints: []
    },
    12: {
        slug: 'estacionamiento-5',
        image: 'IA fotos/estacionamiento-biblioteca/5.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-6',
        nextPos: '-13.500 0.500 0.429',
        nextRotation: '-46.471 -54.931 -40.220',
        prevPos: '13.608 0.296 2.966',
        prevRotation: '-27.444 48.806 -161.426',
        extraButtons: [],
        infoPoints: []
    },
    13: {
        slug: 'estacionamiento-6',
        image: 'IA fotos/estacionamiento-biblioteca/6.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-7',
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
    14: {
        slug: 'estacionamiento-7',
        image: 'IA fotos/estacionamiento-biblioteca/7.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-8',
        nextPos: '-13.5 0.500 0.429',
        prevPos: '13.262 -2.928 -7.908',
        extraButtons: [],
        infoPoints: []
    },
    15: {
        slug: 'estacionamiento-8',
        image: 'IA fotos/estacionamiento-biblioteca/8.PHOTOSPHERE.jpg',
        nextDestination: null,
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
};
