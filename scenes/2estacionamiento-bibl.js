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
        nextPos: '-13 0.500 1.382',     // Botón adelante
        prevPos: null,                       // PREV se calcula automático (-13.264 0.500 0.508)
        extraButtons: [
            {
                destination: 'camino-instituto-1',                  // Slug: salto directo a capilla
                pos: '0.122 0.934 -11.55',              // A la izquierda y lejos
                rotation: '-47.609 -164.348 -23.141'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    10: {
        slug: 'estacionamiento-3',
        image: 'IA fotos/estacionamiento-biblioteca/3.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-4',
        nextPos: '-10.241 -0.680 -14.045',
        prevPos: '13.5 0.500 0.314',
        extraButtons: [],
        infoPoints: []
    },
    11: {
        slug: 'estacionamiento-4',
        image: 'IA fotos/estacionamiento-biblioteca/4.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-5',
        nextPos: '-13.703 0.374 0.328',
        prevPos: '11.483 -2.038 11.473',
        extraButtons: [],
        infoPoints: []
    },
    12: {
        slug: 'estacionamiento-5',
        image: 'IA fotos/estacionamiento-biblioteca/5.PHOTOSPHERE.jpg',
        nextDestination: 'estacionamiento-6',
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,
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
