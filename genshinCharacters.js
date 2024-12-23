// Lista de personajes (nombre e imagen)
const genshinCharacters = [
                                                                                                                                                        //Anemo 4
    { name: "Sayu", element: "Anemo", stars: 4, weaponType: "claymore", img: "assets/characters/Sayu.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Lynette", element: "Anemo", stars: 4, weaponType: "sword", img: "assets/characters/Lynette.png",
             reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/objeto1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/objeto2.png" }
        ],
        weapons: [
            { name: "Espada de viento", img: "ruta/a/imagen/espada_de_viento.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Faruzan", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Faruzan-new.png",
              reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/objeto1.png" }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/caliz_de_viento.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Heizou", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Heizou-new.png",
              reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/objeto1.png" }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "ruta/a/imagen/varita_del_viento.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Sucrose", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Sacarosa.png",
              reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Windwheel Aster", es: "Margarita Voladora" }, img: "assets/Items/recolleccion/Margatita voladora.png" },
            { name: { en:"Energy Nectar", es: "Néctar energético" }, img: "assets/Items/monstruitos/Nectar energetico.png" },
            { name: { en:"Hur­ri­cane Seed", es: "Semilla de Huracán" }, img: "assets/Items/minor boss/Semilla de huracan.png" }
        ],
        weapons: [
            { name: { en: "Philosophies of Freedom", es: "Filosofía de la Libertad" }, img: "assets/Items/Libritos/filosofia de la libertad.png" },
            { name: { en: "Spirit Locket of Boreas", es: "Alma de Boreas" }, img: "assets/Items/weekly boss/Alma de Boreas.png" },
        ],
        artifacts: [
            { name:  { en: "Coming soon", es: "Margarita Voladora" }, img: "assets/soon1.png" }
        ]
    },                                                                                                                                                  // Anemo 5
    { name: "Xiao", element: "Anemo", stars: 5, weaponType: "lance", img: "assets/characters/Anemo5/Xiao.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Jean", element: "Anemo", stars: 5, weaponType: "sword", img: "assets/characters/Anemo5/Jean.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Kazuha", element: "Anemo", stars: 5, weaponType: "sword", img: "assets/characters/Anemo5/Kazuha.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Venti", element: "Anemo", stars: 5, weaponType: "bow", img: "assets/characters/Anemo5/Venti.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Chasca", element: "Anemo", stars: 5, weaponType: "bow", img: "assets/characters/Anemo5/Chasca.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Scaramouche", element: "Anemo", stars: 5, weaponType: "catalist", img: "assets/characters/Anemo5/Scara.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Xianyun", element: "Anemo", stars: 5, weaponType: "catalist", img: "assets/characters/Anemo5/Xianyun.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
                                                                                                                                                          //geo 4
    { name: "Gorou", element: "Geo", stars: 4, weaponType: "bow", img: "assets/characters/Geo4/Gorou.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Noelle", element: "Geo", stars: 4, weaponType: "claymore", img: "assets/characters/Geo4/Noelle.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Kachina", element: "Geo", stars: 4, weaponType: "lance", img: "assets/characters/Geo4/Kachina.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Yun Jin", element: "Geo", stars: 4, weaponType: "lance", img: "assets/characters/Geo4/Yun Jin.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Ningguang", element: "Geo", stars: 4, weaponType: "catalist", img: "assets/characters/Geo4/Ninguang.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    }, 
                                                                                                                                                        //Geo 5
    { name: "Albedo", element: "Geo", stars: 5, weaponType: "sword", img: "assets/characters/geo5/Albedo.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Chiori", element: "Geo", stars: 5, weaponType: "sword", img: "assets/characters/geo5/Chiori.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Xilonen", element: "Geo", stars: 5, weaponType: "sword", img: "assets/characters/geo5/Xilonen.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Navia", element: "Geo", stars: 5, weaponType: "catalist", img: "assets/characters/geo5/Navia.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Itto", element: "Geo", stars: 5, weaponType: "catalist", img: "assets/characters/geo5/Itto.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Zhongli", element: "Geo", stars: 5, weaponType: "lance", img: "assets/characters/geo5/Zhongli.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
                                                                                                                                                      //cryo 4
    { name: "Kaeya", element: "Cryo", stars: 4, weaponType: "sword", img: "assets/characters/cryo4/Kaeya.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Layla", element: "Cryo", stars: 4, weaponType: "sword", img: "assets/characters/cryo4/Layla.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Chongyun", element: "Cryo", stars: 4, weaponType: "claymore", img: "assets/characters/cryo4/Chongyun.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Freminet", element: "Cryo", stars: 4, weaponType: "claymore", img: "assets/characters/cryo4/Freminet.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Mika", element: "Cryo", stars: 4, weaponType: "lance", img: "assets/characters/cryo4/Mika.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Rosaria", element: "Cryo", stars: 4, weaponType: "lance", img: "assets/characters/cryo4/Rosaria.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Diona", element: "Cryo", stars: 4, weaponType: "bow", img: "assets/characters/cryo4/Diona.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Charlotte", element: "Cryo", stars: 4, weaponType: "catalist", img: "assets/characters/cryo4/Charlotte.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
                                                                                                                                                  //Cryo5
    { name: "Ayaka", element: "Cryo", stars: 5, weaponType: "sword", img: "assets/characters/cryo4/Charlotte.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
     
];
