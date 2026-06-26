const camInstituto = {
    18: {
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
    19: {
        slug: 'camino-instituto-2',
        image: 'IA fotos/camino-instituto/2.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-3',
        nextPos: '-13.265 0.500 -0.784',
        nextRotation: '-32.620 -122.194 -165.196',
        prevPos: '13.238 -0.115 1.242',
        prevRotation: '-35.959 50.644 -159.508',
        extraButtons: [
            {
                destination: 'passillo-a-2',
                pos: '-5.473 -1.361 -9.960',
                rotation: '-13.441 -137.468 -15.434'
            }
        ],
        infoPoints: [
            {
                pos: '17.665 -2.971 -4.335', // 
                text: 'Departamento de\n finanzas y Biblioteca\n -->', // saltos de línea con \n
                scale: '3 1.5 1.5',          //tamaño de la placa (ajustar) (ancho, alto, profundidad) por lo general solo se toca el ancho (x) y el alto (y)
                rotation: '-5.459 -49.491 0.344',       //  gira la placa si hace falta por lo generar solo se rota en Y para que quede de frente al usuario x, y, z
                textOffset: '0.2 2.60 0'    // posición del texto sobre la cara (x,y,z) (ajustar para que quede centrado)         
            }             
        ]
    },
    20: {
        slug: 'camino-instituto-3',
        image: 'IA fotos/camino-instituto/3.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-4',
        nextPos: '-13.281 1.376 -0.684',
        nextRotation: '-32.572 -119.521 -165.172',
        prevPos: '13.360 -0.447 -0.024',
        prevRotation: '-22.343 67.504 -173.094',
        extraButtons: [
            {
                destination: 'entrada-pinos-7',
                pos: '2.157 0.201 -11.58',
                rotation: '-9.95 -169.064 -13.866'
            },
            {
                destination: 'camino-instituto-6',
                pos: '3.63343 0.86338 10.40293',
                rotation: '-24.218353042384766 -8.569729741771724 -168.36479401478266'
            }
        ],
        infoPoints: [
            {
                pos: '8.840 -1.679 10.306', // 
                text: 'Laboratorio de Redes \n Electronica e IA\n-->', // saltos de línea con \n
                scale: '3 1.5 1.5',          //tamaño de la placa (ajustar) (ancho, alto, profundidad) por lo general solo se toca el ancho (x) y el alto (y)
                rotation: '-10.404 -130.132 1.306',       //  gira la placa si hace falta por lo generar solo se rota en Y para que quede de frente al usuario x, y, z
                textOffset: '0.2 2.60 0.2'    // posición del texto sobre la cara (x,y,z) (ajustar para que quede centrado)         
            }                   
        ]
    },
    21: {
        slug: 'camino-instituto-4',
        image: 'IA fotos/camino-instituto/4.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-5',
        nextPos: '-13.276 0.500 -0.069',
        nextRotation: '-35.765 -111.183 -178.219',
        prevPos: '13.251 -1.684 -0.466',
        prevRotation: '-24.703 110.966 -2.545',
        extraButtons: [
            {
                destination: 'passillo-c-3',
                pos: '3.936 -0.438 -11.571',
                rotation: '-9.950 -179.209 -13.866'
            }
        ],
        infoPoints: []
    },
    22: {
        slug: 'camino-instituto-5',
        image: 'IA fotos/camino-instituto/5.PHOTOSPHERE.jpg',
        nextDestination: 'camino-salas-1',
        nextPos: '8.6514 0.87362 8.28859',
        prevPos: '9.914940.29331-4.35502',
        prevRotation: '-28.582572 81.67112299 -157.2539964', 
        nextRotation: '-31.3316240689 73.6382547035 -19.1625734',
        extraButtons: [],
        infoPoints: []
    },
    //LAB - IA 
    23:{
        slug: 'camino-instituto-6',
        image: 'IA fotos/camino-instituto/6.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-7',
        prevDestination: 'camino-instituto-3',
        nextPos: '-11.30264 0.72106 -1.2793',
        nextRotation: '-22.164299346840767 -148.5822802223007 -152.4514642128192',
        prevPos: '8.62014 -0.40792 -1.11129',
        prevRotation: '-22.343 67.504 -173.094',
        extraButtons: [],
        infoPoints: []
    },
    24:{
        slug: 'camino-instituto-7',
        image: 'IA fotos/camino-instituto/7.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-8',
        nextPos: '-9.79254 0.0206 -0.78548',
        nextRotation: '-30.79762740387201 -142.96099129427225 -164.95340330257375',
        prevPos: '2.53508 -0.467 -9.55482',
        prevRotation: '-14.07929189974972 156.9182431836591 -176.04873100528215',
        extraButtons: [],
        infoPoints: []
    },
    25:{
        slug: 'camino-instituto-8',
        image: 'IA fotos/camino-instituto/8.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-9',
        nextPos: '-7.13256 -0.32124 -0.05032',
        nextRotation: '-12.633719382634652 -112.63433519799776 -172.74906706312373',
        prevPos: '-0.83975 -0.12166 9.56513',
        prevRotation: '-23.12113886470924 -11.566299010305928 -176.66179584607212',
        extraButtons: [],
        infoPoints: []
    },
    26:{
        slug: 'camino-instituto-9',
        image: 'IA fotos/camino-instituto/9.PHOTOSPHERE.jpg',
        nextDestination: 'camino-instituto-10',
        nextPos: '-10.11481 1.32141 -2.35188',
        nextRotation: '-24.259606003634186 -109.31576364860003 -173.7763803897933',
        prevPos: '-0.42655 0.65581 8.5245',
        prevRotation: '-22.34306217892158 -27.758086300702992 -173.09398765579246',
        extraButtons: [],
        infoPoints: []
    },
    27:{
        slug: 'camino-instituto-10',
        image: 'IA fotos/camino-instituto/10.PHOTOSPHERE.jpg',
        nextDestination: null,
        nextPos: '13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '-9.64413 0.62 0.37833',
        prevRotation: '-23.451735512499727 -69.86360874927692 -14.558857574274217',
        extraButtons: [],
        infoPoints: []
    }
}