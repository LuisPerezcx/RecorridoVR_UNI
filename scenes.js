/* ========================================
   CONFIGURACIÓN DE ESCENAS - RECORRIDO UNIVERSIDAD
   Almacena la definición de todas las escenas y rutas de navegación
   
   ESTRUCTURA DE CADA ESCENA:
   - image: ruta de la imagen panorámica
   - nextDestination: número de escena del botón next (o null si es la última)
   - nextPos: posición X Y Z del botón next
   - showPrev: true/false - mostrar el botón prev automático a 180°
   - extraButtons: array de botones personalizados adicionales
   
   ESTRUCTURA DE EXTRA BUTTONS:
   {
     destination: número_escena,
     pos: 'x y z',
     color: '#hexcolor',
     type: 'nombre_botón'
   }
   
   ESTRUCTURA DE INFO POINTS:
   {
     pos: 'x y z',
     text: 'descripción del punto',
     color: '#hexcolor'
   }
   ======================================== */

const scenes = {
  1: {
    image: 'IA fotos/entrada-pinos/1.PHOTOSPHERE.jpg',
    nextDestination: 2,
    nextPos: '14.75 1.009 -1.036',
    showPrev: false,
    extraButtons: [
      {
        destination: 3,
        pos: '-15 1.5 -8',
        color: '#f39c12',
        type: 'capilla'
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
  2: {
    image: 'IA fotos/entrada-pinos/2.PHOTOSPHERE.jpg',
    nextDestination: 3,
    nextPos: '13.264 0.500 -0.508',
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  },
  3: {
    image: 'IA fotos/entrada-pinos/3.PHOTOSPHERE.jpg',
    nextDestination: 4,
    nextPos: '13.25 0.500 0.200',
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  },
  4: {
    image: 'IA fotos/entrada-pinos/4.PHOTOSPHERE.jpg',
    nextDestination: 5,
    nextPos: '-13.493 0.113 0.090',
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  },
  5: {
    image: 'IA fotos/entrada-pinos/5.PHOTOSPHERE.jpg',
    nextDestination: 6,
    nextPos: '2 1.6 -5',
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  },
  6: {
    image: 'IA fotos/entrada-pinos/6.PHOTOSPHERE.jpg',
    nextDestination: 7,
    nextPos: '-5 1.6 -1',
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  },
  7: {
    image: 'IA fotos/entrada-pinos/7.PHOTOSPHERE.jpg',
    nextDestination: null,
    nextPos: null,
    showPrev: true,
    extraButtons: [],
    infoPoints: []
  }
};
