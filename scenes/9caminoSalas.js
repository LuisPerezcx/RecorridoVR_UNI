const caminoSalas = {
    1: {
        slug: 'camino-salas-1',
        image: 'IA fotos/caminoSalas/1.PHOTOSPHERE.jpg',
        nextDestination: 'camino-ingles-1',
        prevDestination: 'camino-instituto-5',
        nextPos: '-13.265 0.490 -0.331',
        nextRotation: '-41.463 -128.382 -157.402',
        prevPos: '13.211 -0.726 1.845',
        prevRotation: '-22.499 61.209 -170.760',
        extraButtons: [
            {
                destination: 'camino-salas-2',
                pos: '2.283 0.201 -11.575',
                rotation: '-12.694 -168.937 -14.514'
            }
        ],
    },
    2: {
        slug: 'camino-salas-2',
        image: 'IA fotos/caminoSalas/2.PHOTOSPHERE.jpg',
        nextDestination: 'camino-salas-3',
        nextPos: '-13.264 0.716 -0.365',
        nextRotation: '-40.950 -62.973 -31.941',
        prevPos: '7.248 -1.270 4.008',
        prevRotation: '-8.271 30.861 -172.023',
        extraButtons: [],
        infoPoints: []
    },
    3: {
        slug: 'camino-salas-3',
        image: 'IA fotos/caminoSalas/3.PHOTOSPHERE.jpg',
        nextDestination: 'camino-salas-4',
        nextPos: '-5.424 0.299 11.940',
        nextRotation: '-41.546 26.564 -25.988',
        prevPos: '7.386 -0.197 0.170',
        prevRotation: '-8.269 68.122 -175.320',
        extraButtons: [
            {
                destination: 'labtur-1',
                pos: '-3.99506 0.02348 -8.55413',
                rotation: '-19.309823611499002 -176.56267414751449 -1.5784987255854181'
            }
        ],
        infoPoints: []
    },
    4: {
        slug: 'camino-salas-4',
        image: 'IA fotos/caminoSalas/4.PHOTOSPHERE.jpg',
        nextDestination: 'camino-salas-5',
        nextPos: '-13.260 0.500 -0.474',
        nextRotation: '-20.015 -116.501 -173.163',
        prevPos: '7.384 -1.314 0.202',
        prevRotation: '-10.734 66.433 179.063',
        extraButtons: [],
        infoPoints: []
    },
    5 : {
        slug: 'camino-salas-5',
        image: 'IA fotos/caminoSalas/5.PHOTOSPHERE.jpg',
        nextDestination: null,
        nextPos: '2.157 0.201 -11.58',
        nextRotation: '-9.95 -169.064 -13.866',
        prevPos: '7.321 -0.310 1.981',
        prevRotation: '-8.012 53.465 -173.812',
        extraButtons: [],
        infoPoints: [
            {
                pos: '-21.356 -2.971 0.977', // 
                text: 'Camino hacia \ncentro de idiomas \n-->', // saltos de línea con \n
                scale: '3 1.5 1.5',          //tamaño de la placa (ajustar) (ancho, alto, profundidad) por lo general solo se toca el ancho (x) y el alto (y)
                rotation: '-5.516 107.924 0.531',       //  gira la placa si hace falta por lo generar solo se rota en Y para que quede de frente al usuario x, y, z
                textOffset: '0.2 2.60 0'    // posición del texto sobre la cara (x,y,z) (ajustar para que quede centrado)         
            }             
        ],
        extraButtons: [
            {
                destination: 'camino-ingles-4',
                pos:  '-13.915 -0.035 -7.183',
                rotation: '-7.137 -106.566 -9.926'
            }
        ],
    }
}