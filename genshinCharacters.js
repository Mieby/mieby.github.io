// Lista de personajes (nombre e imagen)
const genshinCharacters = [
                                                                                                                                                        //Anemo 4
    { name: "Sayu", element: "Anemo", stars: 4, weaponType: "claymore", img: "assets/characters/Sayu.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Lynette", element: "Anemo", stars: 4, weaponType: "sword", img: "assets/characters/Lynette.png",
             reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Objeto 1", img: "ruta/a/imagen/objeto1.png" },
            { name: "Objeto 2", img: "ruta/a/imagen/objeto2.png" }
        ],
        weapons: [
            { name: "Espada de viento", img: "ruta/a/imagen/espada_de_viento.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Faruzán", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Faruzan-new.png",
              reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Objeto 1", img: "ruta/a/imagen/objeto1.png" }
        ],
        weapons: [
            { name: "Cáliz de viento", img: "ruta/a/imagen/caliz_de_viento.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" }
        ]
    },
    { name: "Heizou", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Heizou-new.png",
              reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Objeto 1", img: "ruta/a/imagen/objeto1.png" }
        ],
        weapons: [
            { name: "Varita del viento", img: "ruta/a/imagen/varita_del_viento.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" }
        ]
    },
    { name: "Sacarosa", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Sacarosa.png",
              reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Margarita Voladora", img: "assets/Items/recolleccion/Margatita voladora.png" },
            { name: "Néctar energético", img: "assets/Items/monstruitos/Nectar energetico.png" },
            { name: "Semilla de Huracán", img: "assets/Items/minor boss/Semilla de huracan.png" }
        ],
        weapons: [
            { name: "Filosofía de la Libertad", img: "assets/Items/Libritos/filosofia de la libertad.png" },
            { name: "Alma de Boreas", img: "assets/Items/weekly boss/Alma de Boreas.png" },
        ],
        artifacts: [
            { name: " Coming soon", img: "ruta/a/imagen/artefacto1.png" }
        ]
    },
                                                                                                                                                        // Anemo 5
    { name: "Xiao", element: "Anemo", stars: 5, weaponType: "lance", img: "assets/characters/Anemo5/Xiao.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Jean", element: "Anemo", stars: 5, weaponType: "sword", img: "assets/characters/Anemo5/Jean.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Kazuha", element: "Anemo", stars: 5, weaponType: "sword", img: "assets/characters/Anemo5/Kazuha.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Venti", element: "Anemo", stars: 5, weaponType: "bow", img: "assets/characters/Anemo5/Venti.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Chasca", element: "Anemo", stars: 5, weaponType: "bow", img: "assets/characters/Anemo5/Chasca.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Scaramuccia", element: "Anemo", stars: 5, weaponType: "catalist", img: "assets/characters/Anemo5/Scara.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
    { name: "Xianyun", element: "Anemo", stars: 5, weaponType: "catalist", img: "assets/characters/Anemo5/Xianyun.png",
        reloj: "none", caliz: "none", corona: "none", subs: "none",
        items: [
            { name: "Semilla", img: "ruta/a/imagen/semilla.png" },
            { name: "Lucetta", img: "ruta/a/imagen/lucetta.png" }
        ],
        weapons: [
            { name: "Espada de fuego", img: "ruta/a/imagen/espada_de_fuego.png" },
            { name: "Espada legendaria", img: "ruta/a/imagen/espada_legendaria.png" }
        ],
        artifacts: [
            { name: "Artefacto 1", img: "ruta/a/imagen/artefacto1.png" },
            { name: "Artefacto 2", img: "ruta/a/imagen/artefacto2.png" }
        ]
    },
   
];
