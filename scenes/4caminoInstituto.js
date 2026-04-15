const camInstituto = {
    17: {
        slug: 'camino-instituto-1',
        image: 'IA fotos/camino-instituto/1.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-2',
        prevDestination: 'estacionamiento-2',
        nextPos: '-13.253 0.123 0.011',
        nextRotation: '-27.802 -55.841 -7.278',
        prevPos: '13.258 -1.861 0.294',
        prevRotation: '-18.357 67.018 -171.341',
        extraButtons: [],
        infoPoints: []
    },
    18: {
        slug: 'camino-instituto-2',
        image: 'IA fotos/camino-instituto/2.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-3',
        nextPos: '-13.265 0.500 -0.784',
        nextRotation: '-32.620 -122.194 -165.196',
        prevPos: '13.238 -0.115 1.242',
        prevRotation: '-35.959 50.644 -159.508',
        extraButtons: [],
        infoPoints: []
    },
    19: {
        slug: 'camino-instituto-3',
        image: 'IA fotos/camino-instituto/3.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-4',
        nextPos: '-13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '13.360 -0.447 -0.024',
        prevRotation: '-22.343 67.504 -173.094',
        extraButtons: [
            {
                destination: 'entrada-pinos-7',                  // Slug: salto directo a capilla
                pos: '2.778 0.201 -11.527',              // A la izquierda y lejos
                rotation: '-21.963 -168.062 -17.488'  // (Opcional) Rotación del botón
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