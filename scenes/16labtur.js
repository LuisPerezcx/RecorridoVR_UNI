const labtur = {
    1: {
        slug: 'labtur-1',
        image: 'IA fotos/labtur/1.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-2',
        prevDestination: 'camino-salas-3',
        nextPos: '-12.04007 1.256 0.4256',
        nextRotation: '-33.80565582830883 -97.46871531867998 -172.77656903729002',
        prevPos: '7.98086 0.53531 9.55313',
        prevRotation: '-30.28826792400071 25.780235991911393 178.58406924873603',
        extraButtons: [],
        infoPoints: []
    },
    2: {
        slug: 'labtur-2',
        image: 'IA fotos/labtur/2.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-3',
        prevDestination: 'labtur-1',
        nextPos: '-12.77114 0.83325 -1.08659',
        nextRotation: '-14.700378149671533 -133.63209247395218 -168.6220520647964',
        prevPos: '11.94111 0.19045 2.22046',
        prevRotation: '-22.11788976543517 91.61308665244299 -5.509562157977996',
        extraButtons: [],
        infoPoints: []
    },
    3: {
        slug: 'labtur-3',
        image: 'IA fotos/labtur/3.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-4',
        prevDestination: 'labtur-2',
        nextPos: '-13.28914 1.42282 -0.52632',
        nextRotation: '-17.25920766272579 -118.49683935777635 -171.76472557108897',
        prevPos: '10.94229 0.29021 -5.56905',
        prevRotation: '-14.535939262468984 133.69683670480194 -8.623587774514021',
        extraButtons: [],
        infoPoints: []
    },
    4: {
        slug: 'labtur-4',
        image: 'IA fotos/labtur/4.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-5',
        prevDestination: 'labtur-3',
        nextPos: '-13.12219 0.50013 -2.58949',
        nextRotation: '-19.57338419725918 -111.80984893080449 178.46317515396342',
        prevPos: '9.11084 0.83625 -1.53131',
        prevRotation: '-15.664093161081578 119.7212501659709 -6.737983670738481',
        extraButtons: [
            {
                destination: 'labtur-8',
                pos: '-1.58083 0.68753 -8.01023',
                rotation: '-26.515340843064237 -147.5314756260308 -16.732086491205433'
            }
        ],
        infoPoints: []
    },
    5: {
        slug: 'labtur-5',
        image: 'IA fotos/labtur/5.PHOTOSPHERE.jpg',
        nextDestination: "labtur-7",
        prevDestination: 'labtur-4',
        nextPos: '-8.56521 0.4043 -0.87695',
        nextRotation: '-10.971568818960133 -116.82093780701868 176.8898330485342',
        prevPos: '0.53052 0.5 9.21721',
        prevRotation: '-17.5680319143013 -14.538804051444638 176.45266625084938',
        extraButtons: [
            {
                destination: 'labtur-6',
                pos: '8.25613 0.61165 -2.29467',
                rotation: '-8.45188 131.3368235466581 -6.419992094440874'
            }
        ],
        infoPoints: []
    },
    6: {
        slug: 'labtur-6',
        image: 'IA fotos/labtur/6.PHOTOSPHERE.jpg',
        nextDestination: null,
        prevDestination: 'labtur-5',
        nextPos: '-13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '7.80223 0.10717 -6.39734',
        prevRotation: '-14.606413071270076 135.2128830307181 -11.201897852602725',
        extraButtons: [],
        infoPoints: []
    },
    7: {
        slug: 'labtur-7',
        image: 'IA fotos/labtur/7.PHOTOSPHERE.jpg',
        nextDestination: null,
        prevDestination: 'labtur-5',
        nextPos: '-13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '6.25342 0.42 -8.88022',
        prevRotation: '-17.48839078077812 139.66762988786027 173.38275838453842',
        extraButtons: [],
        infoPoints: []
    },
    // SEGUNDO PISO
    8: {
        slug: 'labtur-8',
        image: 'IA fotos/labtur/8.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-9',
        prevDestination: 'labtur-4',
        nextPos: '-9.05329 0.89779 -1.78151',
        nextRotation: '-30.78559529017426 -117.1337727631601 -168.49485543427735',
        prevPos: '-4.44216 -2.58777 5.12168',
        prevRotation: '10.50288934254312 -68.48278046301164 4.500583480752616',
        extraButtons: [],
        infoPoints: []
    },
    9: {
        slug: 'labtur-9',
        image: 'IA fotos/labtur/9.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-10',
        prevDestination: 'labtur-8',
        nextPos: '-9.58247 0.14447 -0.2535',
        nextRotation: '-13.132765622193599 -96.71069215572192 179.69732624467522',
        prevPos: '-2.92448 -2.01134 -7.19874',
        prevRotation: '15.759777112868425 158.2217221675817 -170.9230505700418',
        extraButtons: [],
        infoPoints: []
    },
    10: {
        slug: 'labtur-10',
        image: 'IA fotos/labtur/10.PHOTOSPHERE.jpg',
        nextDestination: 'labtur-12',
        prevDestination: 'labtur-9',
        nextPos: '-12.48544 0.58452 0.8885',
        nextRotation: '-25.325880460372648 -63.44590848601658 161.98147121923014',
        prevPos: '7.15585 0.40957 5.7404',
        prevRotation: '-16.777350157020766 23.091345059362435 -175.8550712705279',
        extraButtons: [
            {
                destination: 'labtur-11',
                pos: '2.33777 0.49025 10.13792',
                rotation: '-9.856592949635552 -53.15845127444265 -157.12565390549645'
            }
        ],
        infoPoints: []
    },
    11: {
        slug: 'labtur-11',
        image: 'IA fotos/labtur/11.PHOTOSPHERE.jpg',
        nextDestination: null,
        prevDestination: 'labtur-10',
        nextPos: '-13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '5.42395 0.31455 4.13885',
        prevRotation: '0.9940817745519783 -14.972533102358673 -162.44900478005692',
        extraButtons: [],
        infoPoints: []
    },
    12: {
        slug: 'labtur-12',
        image: 'IA fotos/labtur/12.PHOTOSPHERE.jpg',
        nextDestination: null,
        prevDestination: 'labtur-10',
        nextPos: '-13.246 0.500 -1.104',
        nextRotation: '-32.620 -107.773 -165.196',
        prevPos: '8.60522 0.5 2.55688',
        prevRotation: '-13.475394383681833 77.7985012540437 -9.373016570545138',
        extraButtons: [],
        infoPoints: []
    }

}