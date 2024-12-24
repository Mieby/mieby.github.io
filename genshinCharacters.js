// Lista de personajes (nombre e imagen)
const genshinCharacters = [
                                                                                                                                                        //Anemo 4
    { name: "Sayu", element: "Anemo", stars: 4, weaponType: "claymore", img: "assets/characters/Sayu.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        weapons: [
            { name: "Espada de viento", img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Faruzan", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Faruzan-new.png",
              reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        artifacts: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ]
    },
    { name: "Heizou", element: "Anemo", stars: 4, weaponType: "catalyst", img: "assets/characters/Heizou-new.png",
              reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
        ],
        weapons: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
                                                                                                                                                      //Cryo 5
    { name: "Ayaka", element: "Cryo", stars: 5, weaponType: "sword", img: "assets/characters/Cryo5/Ayaka.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Qiqi", element: "Cryo", stars: 5, weaponType: "sword", img: "assets/characters/Cryo5/Qiqi.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Eula", element: "Cryo", stars: 5, weaponType: "claymore", img: "assets/characters/Cryo5/Eula.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Shenhe", element: "Cryo", stars: 5, weaponType: "claymore", img: "assets/characters/Cryo5/Shenhe.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Aloy", element: "Cryo", stars: 5, weaponType: "bow", img: "assets/characters/Cryo5/Aloy.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Ganyu", element: "Cryo", stars: 5, weaponType: "bow", img: "assets/characters/Cryo5/Ganyu.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Wriothesley", element: "Cryo", stars: 5, weaponType: "catalist", img: "assets/characters/Cryo5/Wriothesley.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
  //
    { name: "Kuki", element: "Electro", stars: 4, weaponType: "sword", img: "assets/characters/Electro4/Kuki.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Beidou", element: "Electro", stars: 4, weaponType: "claymore", img: "assets/characters/Electro4/Beidou.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Dori", element: "Electro", stars: 4, weaponType: "claymore", img: "assets/characters/Electro4/Dori.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Razor", element: "Electro", stars: 4, weaponType: "claymore", img: "assets/characters/Electro4/Razor.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Fischl", element: "Electro", stars: 4, weaponType: "bow", img: "assets/characters/Electro4/Fischl.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Kojou Sara", element: "Electro", stars: 4, weaponType: "bow", img: "assets/characters/Electro4/Kujou Sara.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Ororon", element: "Electro", stars: 4, weaponType: "bow", img: "assets/characters/Electro4/Ororon.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Ororon", element: "Electro", stars: 4, weaponType: "bow", img: "assets/characters/Electro4/sethos.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Lisa", element: "Electro", stars: 4, weaponType: "catalist", img: "assets/characters/Electro4/Lisa.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
                                                                                                                                                    //Electro 5
    { name: "Clorinde", element: "Electro", stars: 4, weaponType: "sword", img: "assets/characters/Electro5/Clorinde.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Keqing", element: "Electro", stars: 4, weaponType: "sword", img: "assets/characters/Electro5/Clorinde.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Cyno", element: "Electro", stars: 4, weaponType: "lance", img: "assets/characters/Electro5/Cyno.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Raiden Shogun", element: "Electro", stars: 4, weaponType: "lance", img: "assets/characters/Electro5/Raiden.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
    { name: "Yae Miko", element: "Electro", stars: 4, weaponType: "catalist", img: "assets/characters/Electro5/Yae.png",
        reloj: "Coming Soon", caliz: "Coming Soon", corona: "Coming Soon", subs: "Coming Soon",
        items: [
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" },
            { name: { en: "Coming Soon", es: "Próximamente" }, img: "assets/soon1.png" }
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
