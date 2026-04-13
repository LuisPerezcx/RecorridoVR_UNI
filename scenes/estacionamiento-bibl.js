const area2Estacionamiento = {
    8: {
        image: 'IA fotos/estacionamiento-biblioteca/1.PHOTOSPHERE.jpg',
        nextDestination: 9,                  // El botón NEXT lleva a escena 9
        nextPos: '-14.212 1.5 8.9',            // Posición del botón NEXT
        prevDestination: 4,                  // PREV va a escena 4 en lugar de 7
        prevPos: '13.867 1.5 2.287',            // Posición del botón PREV
        extraButtons: [],
        infoPoints: []
    },
    9: {
        image: 'IA fotos/estacionamiento-biblioteca/2.PHOTOSPHERE.jpg',
        nextDestination: 10,                  // El botón NEXT lleva a escena 10
        nextPos: '-13 0.500 1.382',     // Botón adelante
        prevPos: null,                       // PREV se calcula automático (-13.264 0.500 0.508)
        extraButtons: [],
        infoPoints: []
    },
    10: {
        image: 'IA fotos/estacionamiento-biblioteca/3.PHOTOSPHERE.jpg',
        nextDestination: 11,
        nextPos: '-10.241 -0.680 -14.045',
        prevPos: '13.5 0.500 0.314',                  
        extraButtons: [],
        infoPoints: []
    },
    11: {
        image: 'IA fotos/estacionamiento-biblioteca/4.PHOTOSPHERE.jpg',
        nextDestination: 12,
        nextPos: '-13.703 0.374 0.328',
        prevPos: '11.483 -2.038 11.473',               
        extraButtons: [],
        infoPoints: []
    },
    12: {
        image: 'IA fotos/estacionamiento-biblioteca/5.PHOTOSPHERE.jpg',
        nextDestination: 13,
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,      
        extraButtons: [],
        infoPoints: []
    },
    13: {
        image: 'IA fotos/estacionamiento-biblioteca/6.PHOTOSPHERE.jpg',
        nextDestination: 14,
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,                      
        extraButtons: [],
        infoPoints: []
    },
    14: {
        image: 'IA fotos/estacionamiento-biblioteca/7.PHOTOSPHERE.jpg',
        nextDestination: 15,
        nextPos: '-13.5 0.500 0.429',
        prevPos: '13.262 -2.928 -7.908',
        extraButtons: [],
        infoPoints: []
    },
    15: {
        image: 'IA fotos/estacionamiento-biblioteca/8.PHOTOSPHERE.jpg',
        nextDestination: null,
        nextPos: '-13.5 0.500 0.429',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
};
