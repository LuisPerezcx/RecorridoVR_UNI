const camInstituto = {
    17: {
        slug: 'camino-instituto-1',
        image: 'IA fotos/camino-instituto/1.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-2',
        prevDestination: 'estacionamiento-2',
        nextPos: '-13.25 0.500 0.200',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
    18: {
        slug: 'camino-instituto-2',
        image: 'IA fotos/camino-instituto/2.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-3',
        nextPos: '-13.25 0.500 0.200',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
    19: {
        slug: 'camino-instituto-3',
        image: 'IA fotos/camino-instituto/3.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-4',
        nextPos: '-13.25 0.500 0.200',
        prevPos: null,
        extraButtons: [
            {
                destination: 'entrada-pinos-7',                  // Slug: salto directo a capilla
                pos: '2.157 0.201 -11.58',              // A la izquierda y lejos
                rotation: '-9.95 -169.064 -13.866'  // (Opcional) Rotación del botón
            }
        ],
        infoPoints: []
    },
    20: {
        slug: 'camino-instituto-4',
        image: 'IA fotos/camino-instituto/4.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-5',
        nextPos: '-13.25 0.500 0.200',
        prevPos: null,
        extraButtons: [],
        infoPoints: []
    },
    21: {
        slug: 'camino-instituto-5',
        image: 'IA fotos/camino-instituto/5.PHOTOSPHERE.jpg',
        nextDestination: null,
        nextPos: null,
        prevPos: '7.5 -0.500 -3.03',
        prevRotation: '-6.7 79.6 -171',
        extraButtons: [],
        infoPoints: []
    },
}