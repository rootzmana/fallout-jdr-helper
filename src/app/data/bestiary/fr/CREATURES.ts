import {BestiaryType, MobDetails} from "./bestiary.model";

export const CREATURES: MobDetails[] = [
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Arachnide Mutant",
    "level": "7",
    "energyR": "3",
    "spirit": "5",
    "health": "14",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 2 $CD$  viandes de radscorpion (1 Effet = 1 œuf de radscorpion) +1 viande par PA dépensé, 1 dard de radscorpion (matériau rare x2). Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour surprendre ses assaillants. Tant qu'il est sous terre, il n'est pas visible et ne peut pas être pis pour cible d'une attaque. Au prix d'une action capitale, il creuse un tunnel qui peut le mener jusqu'à deux zones de distance. Jaillir du sol ne lui demande qu'une action mineure. Le PNJ ne peut pas fouir la pierre, le métal ou le bois. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " si un attaquant choisi de viser la tête de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      },
      {
        "description": " La victime du poison de la créature est aveuglée tant qu\u2019elle est sous l\u2019effet du poison (Diff +1 aux tests de PER visuelle).",
        "title": "- Poison Aveuglant"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 12), 4 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Pinces"
      },
      {
        "description": " CORPS + Corps à Corps (SR 12), 3 $CD$ de dégats de poison Persistants.",
        "title": "- Dard"
      }
    ],
    "name": "Bark Scorpion",
    "xp": "52",
    "melee": "5"
  },
  {
    "other": "1",
    "initiative": "12",
    "keywords": "Mammifère",
    "level": "3",
    "energyR": "0",
    "spirit": "6",
    "health": "9",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4+1 viandes de chien, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "1",
    "effects": [
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 9), 3 $CD$ de dégâts Brutaux.",
      "title": "- Morsure"
    }],
    "name": "Bâtard de la Légion",
    "xp": "48",
    "melee": "3"
  },
  {
    "other": "4",
    "initiative": "17",
    "keywords": "Humain Mutant",
    "level": "18",
    "energyR": "5",
    "spirit": "5",
    "health": "48",
    "range": "0",
    "poisonR": "8",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "12",
    "inventory": [
      {
        "description": " 3d20 capsules, 8 $CD$ de bric-à-brac, 1d6 viandes humaines. À la discrétion du MJ, le behemoth pouvait également posséder jusqu\u2019à 2 armes et 2d20 munitions appropriées.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 4d10 viandes humaines, +10 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d10 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "8",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l'intimider ou de le menacer.",
        "title": "- Immunisé contre la peur"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 17), 11 $CD$ de dégâts balistiques Brutaux, Destructeurs.",
        "title": "- Batte Lance d'incendie"
      },
      {
        "description": " CORPS + Distance (SR 12), 8 $CD$ de dégats balistiques Brutaux, étourdissant, portée M, Projectiles.",
        "title": "- Jet de Rocher"
      },
      {
        "description": " CORPS + Distance (SR 12), 11 $CD$ de dégâts balistiques, portée L, Zone d'impact.",
        "title": "- Lance-missile"
      }
    ],
    "name": "Béhémoth Super Mutant",
    "xp": "130",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Insecte Mutant",
    "level": "8",
    "energyR": "4 (1 feu ou 1 glace)",
    "spirit": "5",
    "health": "15",
    "range": "0",
    "poisonR": "4",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 3  miels, +1 par PA dépensé. Chaque Effet permet de faire un jet sur la table des objets utiles.",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "4",
    "effects": [
      {
        "description": " La créature ne peut pas utiliser l\u2019Action majeure Sprint.",
        "title": "- Lente"
      },
      {
        "description": " Une fois par round, le MJ peut dépenser 1 PA durant une Action majeure pour faire cracher à la bête à miel 1 essaim d\u2019abeille. Elle ne peut alors pas attaquer lors d\u2019une autre Action majeure ce tour-ci.",
        "title": "- Lacher d'Essaim"
      },
      {
        "description": " le PNJ ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l'intimider ou de le menacer.",
        "title": "- Immunisé contre la peur"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS +Corps à Corps (SR9),  7 $CD$ de dégats balistiques Brutaux.",
      "title": "- Morsure"
    }],
    "name": "Bête à Miel",
    "xp": "60",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "4",
    "health": "9",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d6 viandes de brahmine et 2 matériaux peu fréquents, +6 viandes et 1 matériau par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d6 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      },
      {
        "description": " Test d\u2019AGI + Survie Diff 1 (durée 1 heure) pour récupérer 1d4 laits, +1 par PA dépensé (max 5 laits par jour par brahmine)",
        "title": "$EXT$ - Traite"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisée",
    "effects": [{
      "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
      "title": "- Immunisée contre les radiations"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " COPRS + Corps à Corps (SR 7), 4 $CD$ de dégâts balistiques.",
        "title": "- Coup de Tête"
      },
      {
        "description": " CORPS + Corps à Corps (SR7), 4 $CD$ de dégâts Balistiques Perforant 1, Etourdissant. Doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Brahmine",
    "xp": "24",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "4",
    "health": "22",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d6 viandes de brahmufle et 2 matériaux peu fréquents, +6 viandes et 1 matériau par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d6 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      },
      {
        "description": " Test d\u2019AGI + Survie Diff 1 (durée 1 heure) pour récupérer 1d4 laits, +1 par PA dépensé (max 5 laits par jour par brahmine)",
        "title": "$EXT$ - Traite"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR9), 4 $CD$ de dégâts balistiques.",
        "title": "- Ruade"
      },
      {
        "description": " CORPS + Corps à Corps (SR9), 5 $CD$ de dégâts Balistiques Perforant 2, Etoudissant. Doit dépenser une Action mineure de mouvement avant l\u2019attaque.",
        "title": "- Charge"
      }
    ],
    "name": "Brahmufle",
    "xp": "48",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Humain Mutant",
    "level": "2",
    "energyR": "0",
    "spirit": "5",
    "health": "16",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "6",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaines, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR10), 4 $CD$ de dégâts balistiques Etourdissante, blessure sale.",
      "title": "- Mains Nues"
    }],
    "name": "Brute Trog",
    "xp": "48",
    "melee": "4"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Humain Mutant Calciné",
    "level": "4",
    "energyR": "0",
    "spirit": "5",
    "health": "9",
    "range": "2",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1d10 caps, 2 Effets = 1 jet sur la table d\u2019objets utiles. L\u2019arme utilisée. ",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaines contaminées à la peste brûlante. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " Un calciné sait utiliser des armes (une au choix parmi celles présentées ci-dessus) et se mettre à couvert. ",
        "title": "- Calciné"
      },
      {
        "description": " un PNJ à terre et immobile ressemble à s'y méprendre à un cadavre. Réussir un test de PER + Survie de difficulté 2 permet de distinguer un PNJ d'un cadavre inanimé. Ces PNJ utilisent souvent cette technique pour prendre par surprise des passants inattentifs.",
        "title": "- Cadavre inanimé"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8),  3 $CD$ de dégâts balistiques. ",
        "title": "- Mains Nues"
      },
      {
        "description": " CORPS + Corps à Corps (SR8),  3 $CD$ de dégâts balistiques Persistant.",
        "title": "- Hachoir"
      },
      {
        "description": " CORPS + Corps à Corps (SR8), 3 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Machette"
      },
      {
        "description": " CORPS + Distance (SR7),  3 $CD$ de dégâts balistiques, Combat rapproché, Fragile, Cad. de tir 2, Portée C. ",
        "title": "- Pistolet de Fortune"
      },
      {
        "description": " CORPS + Distance (SR7),  3 $CD$ de dégâts balistiques, deux mains, Fragile, Cad. de tir 2, Portée M.",
        "title": "- Fusil de Fortune"
      },
      {
        "description": " CORPS + Distance (SR7),  4 $CD$ de dégâts balistiques, Combat rapproché, Fiable, Cad. de tir 2, Portée C.",
        "title": "- Pistolet 10MM"
      }
    ],
    "name": "Calciné",
    "xp": "24",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "Idem PJ",
    "keywords": "Mammifère",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Lorsque Canigou vous aide dans le cadre d'une attaque, il doit se placer à portée de main de votre cible. Si l'attaque est réussie, il inflige ses propres dégâts de corps à corps à la cible.",
        "title": "- Chien d'attaque"
      },
      {
        "description": " le niveau de Canigou est égal au vôtre et augmente au même rythme. Lorsque vous atteignez le niveau 3, et tous les 2 niveaux par la suite, augmentez de +1 le Corps ou l'Esprit de Canigou. A chaque nouveau niveau, ainsi qu'à chaque augmentation de sa valeur de Corps, Canigou gagne +1 PV. Les dégâts de la morsure de Canigou gagne augmentent de +1 $CD$ au niveau 5 et tous les 5 niveaux par la suite.",
        "title": "- Compagnon"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 7), 2 $CD$ de dégâts balistiques Brutaux.",
      "title": "- Morsure"
    }],
    "name": "Canigou",
    "melee": "2",
    "carryWeight": "25 Kg",
    "xp": ""
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Insecte Mutant",
    "level": "6",
    "energyR": "0",
    "spirit": "5",
    "health": "12",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 2  œufs de cazadore. 1 Effet = 1 matériau peu commun. ",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " La créature peut utiliser plusieurs manœuvres de déplacement durant son tour et sa Défense gagne +1. ",
        "title": "- Rapide"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "3",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR9), 4 $CD$ de dégâts de Poison Persistant.",
      "title": "- Dards"
    }],
    "name": "Cazador",
    "xp": "45",
    "melee": "3"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Humain Mutant",
    "level": "8",
    "energyR": "0",
    "spirit": "4",
    "health": "24",
    "range": "1",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "8",
    "inventory": [
      {
        "description": " 2 $CD$ Bric-à-brac. 1 Effet = 1d6 caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d8 viandes humaines et 1d4 matériaux communs, +2 de chaque par PA dépensé. Complication 18 - 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11),  6 $CD$ de dégâts balistiques.",
        "title": "- Langue"
      },
      {
        "description": " CORPS + Distance (SR9),  3 $CD$ de Radiations.",
        "title": "- Crachat Radioactif"
      }
    ],
    "name": "Centaure",
    "xp": "60",
    "melee": "3"
  },
  {
    "other": "3",
    "initiative": "14",
    "keywords": "Humain Mutant",
    "level": "8",
    "energyR": "0",
    "spirit": "6",
    "health": "48",
    "range": "1",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [
      {
        "description": " 2 $CD$ Bric-à-brac. 1 Effet = 1d6 caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d8 viandes humaines et 1d4 matériaux communs, +2 de chaque par PA dépensé. Complication 18 - 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " La créature possède deux têtes suffisamment indépendantes pour attaquer l\u2019une et l\u2019autre. Elle peut obtenir une seconde Action majeure pour 1 PA pour attaquer avec l\u2019autre tête.",
        "title": "- Bicéphale"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11),  6 $CD$ de dégâts balistiques Radioactif.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Distance (SR9),  3 $CD$ de Radiations, Portée Courte.",
        "title": "- Crachat Radioactif"
      }
    ],
    "name": "Centaure Bicéphale",
    "xp": "120",
    "melee": "3"
  },
  {
    "other": "3",
    "initiative": "14",
    "keywords": "Humain Mutant",
    "level": "8",
    "energyR": "0",
    "spirit": "4",
    "health": "78",
    "range": "1",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "10",
    "inventory": [
      {
        "description": " 2 $CD$ Bric-à-brac. 1 Effet = 1d6 caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 3d8 viandes humaines et 1 $CD$ matériaux communs, +3 de chaque par PA dépensé. Complication 18 - 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR13),  6 $CD$ de dégâts balistiques.",
        "title": "- Langue"
      },
      {
        "description": " CORPS + Distance (SR11),  3 $CD$ de Radiations, Portée Courte ",
        "title": "- Crachat Radioactif"
      }
    ],
    "name": "Centaure Evolué",
    "xp": "180",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Mammifère",
    "level": "3",
    "energyR": "0",
    "spirit": "5",
    "health": "8",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4+1 viandes de chien, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
      "title": "- Sens aiguisés"
    }],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 8), 4 $CD$ de dégâts balistiques.",
      "title": "- Morsure"
    }],
    "name": "Chien Domestique",
    "xp": "24",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "4",
    "health": "9",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 de viandes de chien. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "1",
    "effects": [
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 8), 3 $CD$ de dégâts Brutaux.",
      "title": "- Morsure"
    }],
    "name": "Chien Errant",
    "xp": "24",
    "melee": "2"
  },
  {
    "other": "1",
    "initiative": "8",
    "keywords": "Mammifère Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "5",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viandes de rataupe. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour échapper à ses ennemis et se préparer pour son prochain assaut. Au cours de son prochain tour, il peut entreprendre une ation mineure pour jaillir du sol à un emplacement situé à portée moyenne ou inferieur de l'endroit où il s'est enfouit sous terre. En dépensant 1 PA, il peut aussi ajouter 1 $CD$ supplémentaire aux dégâts de sa morsure lorsqu'il émerge. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER. Il peut même détecter les créatures à l'air libre lorsqu'il est sous terre.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR5), 3 $CD$ de dégâts balistiques Perforants 1.",
      "title": "- Morsure"
    }],
    "name": "Chiot de Rataupe",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "9",
    "keywords": "Oiseau",
    "level": "1",
    "energyR": "0",
    "spirit": "5",
    "health": "5",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande d\u2019oiseau. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "3",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 2 $CD$ de dégâts balistiques.",
      "title": "- Coup de Bec"
    }],
    "name": "Corbeau",
    "xp": "10",
    "melee": "2"
  },
  {
    "other": "1",
    "initiative": "10",
    "keywords": "Mammifère",
    "level": "3",
    "energyR": "0",
    "spirit": "5",
    "health": "7",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 de viandes de chien. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 7), 3 $CD$ de dégâts Brutaux.",
      "title": "- Morsure"
    }],
    "name": "Coyote",
    "xp": "24",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "1",
    "keywords": "Insecte Mutant",
    "level": "5",
    "energyR": "0",
    "spirit": "5",
    "health": "9",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viande de darillon. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). 1 Effet = 1 crochet de darillon (dose de poison x1). ",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "3",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 9), 2 $CD$ de dégats de poison persistant.",
      "title": "- Dard acéré"
    }],
    "name": "Darillon",
    "xp": "38",
    "melee": "3"
  },
  {
    "other": "3",
    "initiative": "14",
    "keywords": "Réptile Mutant",
    "level": "11",
    "energyR": "9",
    "spirit": "5",
    "health": "31",
    "range": "0",
    "poisonR": "9",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "9",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un écorcheur mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceau de viande d'écorcheur. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d10 +5 viandes de griffemort et 2d4 matériaux communs, +10 viandes et +2 matériaux par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "6",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ peut choisir de porter une attaque de griffes dévastatrice en augmentant la difficulté de l'attaque de +1. En cas de réussite, ajoutez +2 $CD$ aux dégâts.",
        "title": "- Déchiquetage"
      },
      {
        "description": " si un attaquant choisi de viser le buste de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard le buste.",
        "title": "- Point faible"
      },
      {
        "description": " le PNJ est capable de soulever et de projeter des objets aussi lourds qu'une voiture standard.",
        "title": "- Force extraordinaire"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 14), 6 $CD$ de dégâts balistiques Perforants 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 14), 4 $CD$ de dégâts balistiques étourdissants.",
        "title": "- Ruée"
      },
      {
        "description": " CORPS + Distance (SR 9), 4 $CD$ de dégâts balistiques étourdissants, portée M, Projectiles. Le griffemort ramasse les carcasses de voiture, grosses pierres et autres objets du même acabit qui lui tombent sous les pattes.",
        "title": "- Objet Lourd"
      }
    ],
    "name": "Ecorcheur",
    "xp": "81",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Reptile Mutant",
    "level": "11",
    "energyR": "9",
    "spirit": "7",
    "health": "99",
    "range": "0",
    "poisonR": "9",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "11",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un écorcheur mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceau de viande d'écorcheur. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d10 +5 viandes de griffemort et 2d4 matériaux communs, +10 viandes et +2 matériaux par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "6",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ peut choisir de porter une attaque de griffes dévastatrice en augmentant la difficulté de l'attaque de +1. En cas de réussite, ajoutez +2 $CD$ aux dégâts.",
        "title": "- Déchiquetage"
      },
      {
        "description": " si un attaquant choisi de viser le buste de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard le buste.",
        "title": "- Point faible"
      },
      {
        "description": " le PNJ est capable de soulever et de projeter des objets aussi lourds qu'une voiture standard.",
        "title": "- Force extraordinaire"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 16), 6 $CD$ de dégâts balistiques Perforants 3.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 16), 4 $CD$ de dégâts balistiques étourdissants.",
        "title": "- Ruée"
      },
      {
        "description": " CORPS + Distance (SR 11), 4 $CD$ de dégâts balistiques étourdissants, portée M, Projectiles. Le griffemort ramasse les carcasses de voiture, grosses pierres et autres objets du même acabit qui lui tombent sous les pattes.",
        "title": "- Objet Lourd"
      }
    ],
    "name": "Ecorcheur Albinos",
    "xp": "243",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Reptile Mutant",
    "level": "11",
    "energyR": "9",
    "spirit": "7",
    "health": "99",
    "range": "0",
    "poisonR": "9",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "11",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un écorcheur mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceau de viande d'écorcheur. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d10 +5 viandes de griffemort et 2d4 matériaux communs, +10 viandes et +2 matériaux par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "6",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ peut choisir de porter une attaque de griffes dévastatrice en augmentant la difficulté de l'attaque de +1. En cas de réussite, ajoutez +2 $CD$ aux dégâts.",
        "title": "- Déchiquetage"
      },
      {
        "description": " si un attaquant choisi de viser le buste de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard le buste.",
        "title": "- Point faible"
      },
      {
        "description": " le PNJ est capable de soulever et de projeter des objets aussi lourds qu'une voiture standard.",
        "title": "- Force extraordinaire"
      },
      {
        "description": " Pour une Action mineure, la créature devient invisible. Diff +2 pour la détecter, Défense +2 tant qu\u2019elle est invisible. Lancer 1 $CD$ au début des tours suivants, garde l\u2019invisibilité sur un Effet, sinon la perd.",
        "title": "- Invisibilité"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 16), 6 $CD$ de dégâts balistiques Perforants 3.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 16), 4 $CD$ de dégâts balistiques étourdissants.",
        "title": "- Ruée"
      },
      {
        "description": " CORPS + Distance (SR 11), 4 $CD$ de dégâts balistiques étourdissants, portée M, Projectiles. Le griffemort ramasse les carcasses de voiture, grosses pierres et autres objets du même acabit qui lui tombent sous les pattes.",
        "title": "- Objet Lourd"
      }
    ],
    "name": "Ecorcheur Caméléon",
    "xp": "243",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Reptile Mutant",
    "level": "13",
    "energyR": "9",
    "spirit": "5",
    "health": "78",
    "range": "0",
    "poisonR": "9",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "11",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un écorcheur mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceau de viande d'écorcheur. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d10 +5 viandes de griffemort et 2d4 matériaux communs, +10 viandes et +2 matériaux par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). +2 $CD$ œufs de griffemort, +1 par PA dépensé.",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "6",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ peut choisir de porter une attaque de griffes dévastatrice en augmentant la difficulté de l'attaque de +1. En cas de réussite, ajoutez +2 $CD$ aux dégâts.",
        "title": "- Déchiquetage"
      },
      {
        "description": " si un attaquant choisi de viser le buste de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard le buste.",
        "title": "- Point faible"
      },
      {
        "description": " le PNJ est capable de soulever et de projeter des objets aussi lourds qu'une voiture standard.",
        "title": "- Force extraordinaire"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 16), 7 $CD$ de dégâts balistiques Perforants 3.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 16), 4 $CD$ de dégâts balistiques étourdissants.",
        "title": "- Ruée"
      },
      {
        "description": " CORPS + Distance (SR 11), 4 $CD$ de dégâts balistiques étourdissants, portée M, Projectiles. Le griffemort ramasse les carcasses de voiture, grosses pierres et autres objets du même acabit qui lui tombent sous les pattes.",
        "title": "- Objet Lourd"
      }
    ],
    "name": "Ecorcheur Femelle Alpha",
    "xp": "190",
    "melee": "5"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte",
    "level": "2",
    "energyR": "0",
    "spirit": "4",
    "health": "7",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 miel, +1 par PA dépensé. ",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "4",
    "effects": [
      {
        "description": " L\u2019essaim peut se déplacer librement dans l'air. Il ignore la plupart des obstacles au niveau du sol et les effets de terrain difficiles, et peut se déplacer à travers des zones « vides » au dessus du champ de bataille si voulu. Il doit dépenser une Action mineure de mouvement chaque tour pour rester. La Défense de l\u2019essaim diminue à 1 face aux attaques possédant la propriété d\u2019arme Destructeur. ",
        "title": "- Essaim Volant"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      }
    ],
    "defense": "3",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 4 $CD$ de dégâts de Poison Destructeur.",
      "title": "- Dards"
    }],
    "name": "Essaim d'Abeilles",
    "xp": "17",
    "melee": "1"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Crustacé Mutant",
    "level": "7",
    "energyR": "2",
    "spirit": "5",
    "health": "14",
    "range": "0",
    "poisonR": "4 (buste, jambes, bras); 1 (tête)",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un fangeux mort en réussissant un test d'END + Survie de difficulté 0. Ils récupèrent ainsi 2 $CD$ morceau de viande de fangeux. Pour chaque Effet obtenu, ils récupèrent aussi 1 morceau de viande de fangeux a carapace molle.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 4 $CD$ viandes de fangeux. Chaque Effet permet d\u2019extraire 1 viande de fangeux à carapace molle. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4 (buste, jambes, bras); 1 (tête)",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le corps du PNJ est couvert d'une solide carapace, mais sa tête reste son point faible. La zone est petite et difficile à viser  la défense de cette localisation précise est donc de 2.",
        "title": "- Minuscule point faible"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      }
    ],
    "defense": "1  (2 si la tête est visée)",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 11), 6 $CD$ de dégâts balistiques.",
      "title": "- Pinces"
    }],
    "name": "Fangeux",
    "xp": "45",
    "melee": "4"
  },
  {
    "other": "4",
    "initiative": "14",
    "keywords": "Crustacé Mutant",
    "level": "12",
    "energyR": "2",
    "spirit": "6",
    "health": "20",
    "range": "0",
    "poisonR": "4 (buste, jambes, bras); 1 (tête)",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "8",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un fangeux mort en réussissant un test d'END + Survie de difficulté 0. Ils récupèrent ainsi 2 $CD$ morceau de viande de fangeux. Pour chaque Effet obtenu, ils récupèrent aussi 1 morceau de viande de fangeux a carapace molle.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 3  viandes de fangeux. Chaque Effet permet d\u2019extraire 2 viandes de fangeux à carapace molle. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4 (buste, jambes, bras); 1 (tête)",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le corps du PNJ est couvert d'une solide carapace, mais sa tête reste son point faible. La zone est petite et difficile à viser  la défense de cette localisation précise est donc de 2.",
        "title": "- Minuscule point faible"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      }
    ],
    "defense": "1 (2 si la tête est visée)",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 13), 9 $CD$ de dégâts balistiques.",
      "title": "- Pinces"
    }],
    "name": "Fangeux Chasseur",
    "xp": "88",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "15",
    "keywords": "Reptile Mutant",
    "level": "13",
    "energyR": "9",
    "spirit": "5",
    "health": "36",
    "range": "0",
    "poisonR": "4",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "10",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d8 viandes de férogator et 1d4 œufs de férogator, +4 viandes et +1 œuf par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "7",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " La créature peut faire une attaque mortelle en augmentant la Diff de l\u2019attaque de +1, augmentant les dégâts de +2 . ",
        "title": "- Déchirer"
      },
      {
        "description": " si un attaquant choisi de viser le Torse de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR16),  6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR16),  7 $CD$ de dégâts balistiques, Blessures sales ",
        "title": "- Morsure"
      }
    ],
    "name": "Férogator",
    "xp": "95",
    "melee": "6"
  },
  {
    "other": "3",
    "initiative": "17",
    "keywords": "Reptile Mutant",
    "level": "13",
    "energyR": "9",
    "spirit": "5",
    "health": "76",
    "range": "0",
    "poisonR": "4",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "12",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 2d8 viandes de férogator et 1d4 œufs de férogator, +4 viandes et +1 œuf par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "7",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " La créature peut faire une attaque mortelle en augmentant la Diff de l\u2019attaque de +1, augmentant les dégâts de +2 $CD$. ",
        "title": "- Déchiquetage"
      },
      {
        "description": " si un attaquant choisi de viser le Torse de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR18),  6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR18),  7 $CD$ de dégâts balistiques, Blessures sales ",
        "title": "- Morsure"
      }
    ],
    "name": "Férogator Albinos",
    "xp": "190",
    "melee": "6"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Insecte Mutant",
    "level": "5",
    "energyR": "3 (Feu)",
    "spirit": "5",
    "health": "9",
    "range": "3",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 $CD$ viande de fourmi géante, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " Si la créature subit une blessure grave sur les antennes, elle entre en frénésie, attaquant la créature la plus proche, amie ou ennemie. ",
        "title": "- Antennes Sensibles"
      }
    ],
    "defense": "2",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR7), 2 $CD$ de dégâts balistiques. ",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Distance (SR9),  4 $CD$ de dégâts d\u2019énergie (Feu) Persistant.",
        "title": "- Jet de Flammes"
      }
    ],
    "name": "Fourmi de Feu",
    "xp": "38",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 $CD$ viande de fourmi géante, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [{
      "description": " Si la créature subit une blessure grave sur les antennes, elle entre en frénésie, attaquant la créature la plus proche, amie ou ennemie. ",
      "title": "- Antennes Sensibles"
    }],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 1 $CD$ de dégâts balistiques. ",
      "title": "- Morsure"
    }],
    "name": "Fourmi Géante",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "16",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 $CD$ viande de fourmi géante, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [{
      "description": " Si la créature subit une blessure grave sur les antennes, elle entre en frénésie, attaquant la créature la plus proche, amie ou ennemie. ",
      "title": "- Antennes Sensibles"
    }],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR9), 2 $CD$ de dégâts balistiques. ",
      "title": "- Morsure"
    }],
    "name": "Fourmi Géante Soldat",
    "xp": "20",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Reptile Mutant",
    "level": "3",
    "energyR": "1",
    "spirit": "5",
    "health": "8",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4+1 viandes de gecko et 2 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
      "title": "- Sens aiguisés"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8),  4 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR8),  4 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      }
    ],
    "name": "Gecko",
    "xp": "24",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Reptile Mutant",
    "level": "5",
    "energyR": "1",
    "spirit": "5",
    "health": "11",
    "range": "3",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ +2 viandes de gecko et 2 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
      "title": "- Sens aiguisés"
    }],
    "defense": "2",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8),  4 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR8),  4 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Distance (SR9),  4 $CD$ de dégâts d\u2019Energie Persistant, Portée Courte. ",
        "title": "- Jet de Flamme"
      }
    ],
    "name": "Gecko de Feu",
    "xp": "38",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "14",
    "keywords": "Reptile Mutant",
    "level": "7",
    "energyR": "1",
    "spirit": "5",
    "health": "32",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ +1 viandes de gecko et 2 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
      "title": "- Sens aiguisés"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10),  5 $CD$ de dégâts balistiques radioactifs Perforant 1.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR10),  5 $CD$ de dégâts balistiques radioactifs.",
        "title": "- Griffes"
      }
    ],
    "name": "Gecko Doré",
    "xp": "104",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Reptile Mutant",
    "level": "7",
    "energyR": "1",
    "spirit": "5",
    "health": "14",
    "range": "3",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ +1 viandes de gecko et 2 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "1",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
      "title": "- Sens aiguisés"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR9),  5 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR9),  4 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      },
      {
        "description": "  CORPS + Distance (SR10), 5 $CD de poison Persistant, Cadence de tir 3,  Portée Courte",
        "title": "- Globe de Salice Empoisonnée"
      }
    ],
    "name": "Gecko Vert",
    "xp": "52",
    "melee": "2"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Amphibien Mutant",
    "level": "8",
    "energyR": "2",
    "spirit": "5",
    "health": "15",
    "range": "0",
    "poisonR": "3",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 4 $CD$ viandes de gobeur. 1 Effet = 1 jet sur la table des objets utiles. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "3",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " Si le gobeur inflige une blessure critique avec son attaque Morsure à une cible de taille inférieure à la sienne, il l\u2019avale tout rond. La victime survie à l\u2019intérieur de l\u2019estomac du gobeur pendant END rounds et subit 5 $CD$ de Poison Persistant par round.",
        "title": "- Gober"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 12, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " Une fois par jour, la créature utilise une Action mineure pour récupérer 4 PV ou soigner une blessure grave.",
        "title": "- Régénération"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR11), 5 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      }
    ],
    "name": "Gobeur",
    "xp": "60",
    "melee": "4"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Amphibien Mutant",
    "level": "8",
    "energyR": "2",
    "spirit": "7",
    "health": "75",
    "range": "0",
    "poisonR": "3",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "9",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 8 $CD$ +4 viandes luminescentes, +4 viandes par PA dépensé. 1 Effet = 2 jets sur la table des objets utiles. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 2 pour extraire 1 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "3",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " Si le gobeur inflige une blessure critique avec son attaque Morsure à une cible de taille inférieure à la sienne, il l\u2019avale tout rond. La victime survie à l\u2019intérieur de l\u2019estomac du gobeur pendant END rounds et subit 5 $CD$ de Poison Persistant par round.",
        "title": "- Gober"
      },
      {
        "description": " Une fois par jour, la créature utilise une Action mineure pour récupérer 4 PV ou soigner une blessure grave.",
        "title": "- Régénération"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR13), 7 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR13), 5 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      }
    ],
    "name": "Gobeur Brillant",
    "xp": "180",
    "melee": "4"
  },
  {
    "other": "3",
    "initiative": "14",
    "keywords": "Amphibien Mutant",
    "level": "8",
    "energyR": "2",
    "spirit": "5",
    "health": "50",
    "range": "0",
    "poisonR": "3",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 6 $CD$ +2 viandes de gobeur, +2 viandes par PA dépensé. 1 Effet = 1 jet sur la table des objets utiles. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 2 pour extraire 1 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "3",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " Si le gobeur inflige une blessure critique avec son attaque Morsure à une cible de taille inférieure à la sienne, il l\u2019avale tout rond. La victime survie à l\u2019intérieur de l\u2019estomac du gobeur pendant END rounds et subit 5 $CD$ de Poison Persistant par round.",
        "title": "- Gober"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 12, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " Une fois par jour, la créature utilise une Action mineure pour récupérer 4 PV ou soigner une blessure grave.",
        "title": "- Régénération"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR13), 7 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR13), 5 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      }
    ],
    "name": "Gobeur Dévoreur",
    "xp": "120",
    "melee": "4"
  },
  {
    "other": "5",
    "initiative": "22",
    "keywords": "Reptile Mutant",
    "level": "20",
    "energyR": "8",
    "spirit": "8",
    "health": "132",
    "range": "0",
    "poisonR": "9",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "14",
    "inventory": [
      {
        "description": " 4d20 de caps, 4 $CD$ 1 Effet = 1 jet sur la table de Bric-à-brac, 2 Effets = 1 jet sur la table des objets utiles. À la discrétion de la MJ, le corps peut également contenir jusqu\u2019à 3 armes et 3d20 munitions appropriées. ",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 100 viandes de gecko et 20 matériaux communs, +10 de chaque par PA dépensé. Complication 15 - 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 20 poches de sang, +5 par PA dépensé. Complication 15 - 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "10",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l'intimider ou de le menacer.",
        "title": "- Immunisé contre la peur"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR19),  12 $CD$ de dégâts balistiques Perforant 5.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR19),  12 $CD$ de dégâts balistiques Brutaux, Etourdissants, \"Fracassants \"traduction ?\"\".",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR19),  10 $CD$ de dégâts d\u2019Energie Persistant ",
        "title": "- Jet de Flammes"
      }
    ],
    "name": "Gojira",
    "xp": "432",
    "melee": "5"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Humain Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "5",
    "health": "18",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [
      {
        "description": " 2 $CD$ Bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 2 $CD$ viandes humaines, 1 par PA dépensés. Complication 18-20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).  ",
        "title": "- Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " les radiations soignent le PNJ. Il récupère 1 PV par tranche de 3 points de dégâts de radiations qu'il subit.",
        "title": "- Goule"
      },
      {
        "description": " un PNJ à terre et immobile ressemble à s'y méprendre à un cadavre. Réussir un test de PER + Survie de difficulté 2 permet de distinguer un PNJ d'un cadavre inanimé. Ces PNJ utilisent souvent cette technique pour prendre par surprise des passants inattentifs.",
        "title": "- Cadavre inanimé"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR10), 3 $CD$ de dégâts balistiques Brutaux Radioactifs.",
      "title": "- Mains nues"
    }],
    "name": "Goule Bouffie",
    "xp": "48",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Humain Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "5",
    "health": "8",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " 2 $CD$ Bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 $CD$ viandes humaines, 1 par PA dépensés. Complication 18-20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).  ",
        "title": "- Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " les radiations soignent le PNJ. Il récupère 1 PV par tranche de 3 points de dégâts de radiations qu'il subit.",
        "title": "- Goule"
      },
      {
        "description": " un PNJ à terre et immobile ressemble à s'y méprendre à un cadavre. Réussir un test de PER + Survie de difficulté 2 permet de distinguer un PNJ d'un cadavre inanimé. Ces PNJ utilisent souvent cette technique pour prendre par surprise des passants inattentifs.",
        "title": "- Cadavre inanimé"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 8), 3 $CD$ de dégâts balistiques Radioactifs.",
      "title": "- Mains nues"
    }],
    "name": "Goule Sauvage",
    "xp": "10",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "4",
    "energyR": "0",
    "spirit": "4",
    "health": "10",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes de bighorner et 2 matériaux communs, +6 viandes et 1 matériau commun par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d6 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8), 4 $CD$ de dégâts balistiques.",
        "title": "- Cornes"
      },
      {
        "description": " CORPS + Corps à Corps (SR8), 4 $CD$ de dégâts balistiques Etourdissants. Doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Grande Cornes",
    "xp": "31",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Mammifère Mutant",
    "level": "4",
    "energyR": "0",
    "spirit": "4",
    "health": "24",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes de bighorner et 2 matériaux communs, +6 viandes et 1 matériau commun par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d6 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 4 $CD$ de dégâts balistiques.",
        "title": "- Cornes"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 4 $CD$ de dégâts balistiques Etourdissants. Doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Grande Cornes Sauvage",
    "xp": "62",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Insecte Mutant",
    "level": "6",
    "energyR": "1",
    "spirit": "5",
    "health": "9",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1d4 viandes de grillon et 1 matériau commun, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "3",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR9), 2 $CD$ de dégâts balistiques Perforant 1.",
      "title": "- Morsure"
    }],
    "name": "Grillon des Cavernes",
    "xp": "45",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "13",
    "keywords": "Insecte Mutant",
    "level": "7",
    "energyR": "1",
    "spirit": "5",
    "health": "24",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1d4 viandes Eluminescente et 1 matériau commun, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "3",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR11), 3 $CD$ de dégâts balistiques Radioactifs Perforant 1.",
      "title": "- Morsure"
    }],
    "name": "Grillon Luminescent",
    "xp": "90",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "13",
    "keywords": "Insecte Mutant",
    "level": "9",
    "energyR": "3",
    "spirit": "5",
    "health": "13",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "8",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1d4 viandes de grillon et 1 matériau commun, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "3",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR11), 4 $CD$ de dégâts balistiques Brutaux Perforant 1.",
      "title": "- Morsure"
    }],
    "name": "Grillon Mortel",
    "xp": "67",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Insecte Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "4",
    "health": "8",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 $CD$ poche de sang (pas besoin de poche de sang vide). Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR7), 3 $CD$ de dégâts balistiques Persistant (suce le sang de sa proie), une blessure grave inflige 1 point de Fatigue.",
      "title": "- Morsure"
    }],
    "name": "Ixiode",
    "xp": "24",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "8",
    "keywords": "Crustacé Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "5",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande de fangeux. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 5), 3 $CD$ de dégâts balistiques.",
      "title": "- Pinces"
    }],
    "name": "Jeune Fangeux",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Amphibien Mutant",
    "level": "4",
    "energyR": "2",
    "spirit": "4",
    "health": "10",
    "range": "0",
    "poisonR": "3",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 viandes de gobeur et 1 matériau commun. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 2 pour extraire 1 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "3",
    "effects": [
      {
        "description": " Si le gobeur inflige une blessure critique avec son attaque Morsure à une cible de taille inférieure à la sienne, il l\u2019avale tout rond. La victime survie à l\u2019intérieur de l\u2019estomac du gobeur pendant END rounds et subit 5 $CD$ de Poison Persistant par round.",
        "title": "- Gober"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 12, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " Une fois par jour, la créature utilise une Action mineure pour récupérer 4 PV ou soigner une blessure grave.",
        "title": "- Régénération"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11), 5 $CD$ de dégâts balistiques.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR11), 4 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      }
    ],
    "name": "Jeune Gobeur",
    "xp": "31",
    "melee": "2"
  },
  {
    "other": "1",
    "initiative": "6",
    "keywords": "Oiseau Mutant",
    "level": "0",
    "energyR": "0",
    "spirit": "4",
    "health": "2",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "2",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1 viande d\u2019oiseau. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "3",
    "effects": [{
      "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
      "title": "- Petit"
    }],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR3), 1 $CD$ de dégâts balistiques.",
      "title": "- Coup de Bec"
    }],
    "name": "Jeune Hibou",
    "xp": "1",
    "melee": "1"
  },
  {
    "other": "3",
    "initiative": "13",
    "keywords": "Poisson Mutant",
    "level": "10",
    "energyR": "4",
    "spirit": "6",
    "health": "27",
    "range": "4",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 2 $CD$ viandes de lophius, +2 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "2",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 15, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR9), 6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Distance (SR11), 4 $CD$ d\u2019Energie Persistant, Portée Moyenne. Le lophius doit aspirer le brouillard ambiant avant son attaque en utilisant une Action mineure.",
        "title": "- Crachat Enflammé"
      }
    ],
    "name": "Lophius",
    "xp": "74",
    "melee": "2"
  },
  {
    "other": "3",
    "initiative": "15",
    "keywords": "Poisson Mutant",
    "level": "10",
    "energyR": "5",
    "spirit": "6",
    "health": "58",
    "range": "4",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 2 $CD$ viandes luminescente. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "3",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques radioactifs Perforant 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Distance (SR13), 4 $CD$ de dégâts de radiations, Portée Moyenne. Le lophius doit aspirer le brouillard ambiant avant son attaque en utilisant une Action mineure.",
        "title": "- Crachat Radioactif"
      }
    ],
    "name": "Lophius Luminescent",
    "xp": "148",
    "melee": "2"
  },
  {
    "other": "3",
    "initiative": "15",
    "keywords": "Poisson Mutant",
    "level": "11",
    "energyR": "5",
    "spirit": "6",
    "health": "62",
    "range": "4",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 2 $CD$ viandes de lophius, +2 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "3",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Distance (SR13), 4 $CD$ de dégâts de poison Persistant, Portée Moyenne. Le lophius doit aspirer le brouillard ambiant avant son attaque en utilisant une Action mineure.",
        "title": "- Crachat Empoisonné"
      }
    ],
    "name": "Lophius Venimeux",
    "xp": "162",
    "melee": "2"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Humain Mutant",
    "level": "9",
    "energyR": "3",
    "spirit": "5",
    "health": "21",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "8",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes luminescentes. Complication 18-20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " une fois par combat, le PNJ peut emettre une impulsion radioactive qui inflige 5 $CD$ de dégâts de radiation à toute créature située à portée C ou inférieure. Si l'impulsion inflige au moins 3 points de dégâts, alors toute goule vaincue située à portée récupère 1 PV et reprend le combat.",
        "title": "- Impulsion radioactive"
      },
      {
        "description": " les radiations saturent tellement le PNJ qu'il en luit. Il emet une étrange lumière et irradie ses environs. Le PNJ inflige 2 $CD$ de dégâts de radiation à quiconque se trouve à portée de main. De plus, toutes ses attaques au corps à corps obtiennent l'effet de dégats Radioactif. Si eles en bénéficient déjà, elles infligent alors 2 dégâts de radiation supplémentaires par Effet obtenu.",
        "title": "- Luminescence"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " les radiations soignent le PNJ. Il récupère 1 PV par tranche de 3 points de dégâts de radiations qu'il subit.",
        "title": "- Goule"
      },
      {
        "description": " un PNJ à terre et immobile ressemble à s'y méprendre à un cadavre. Réussir un test de PER + Survie de difficulté 2 permet de distinguer un PNJ d'un cadavre inanimé. Ces PNJ utilisent souvent cette technique pour prendre par surprise des passants inattentifs.",
        "title": "- Cadavre inanimé"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 13), 7 $CD$ de dégâts balistiques Radioactifs.",
      "title": "- Mains nues"
    }],
    "name": "Luminescent",
    "xp": "67",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "15",
    "keywords": "Humain Mutant",
    "level": "9",
    "energyR": "3",
    "spirit": "5",
    "health": "38",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "10",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes luminescentes. Complication 18-20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1$CD$ poche de sang irradié. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " une fois par combat, le PNJ peut emettre une impulsion radioactive qui inflige 5 $CD$ de dégâts de radiation à toute créature située à portée C ou inférieure. Si l'impulsion inflige au moins 3 points de dégâts, alors toute goule vaincue située à portée récupère 1 PV et reprend le combat.",
        "title": "- Impulsion radioactive"
      },
      {
        "description": " les radiations saturent tellement le PNJ qu'il en luit. Il emet une étrange lumière et irradie ses environs. Le PNJ inflige 2 $CD$ de dégâts de radiation à quiconque se trouve à portée de main. De plus, toutes ses attaques au corps à corps obtiennent l'effet de dégats Radioactif. Si eles en bénéficient déjà, elles infligent alors 2 dégâts de radiation supplémentaires par Effet obtenu.",
        "title": "- Luminescence"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " les radiations soignent le PNJ. Il récupère 1 PV par tranche de 3 points de dégâts de radiations qu'il subit.",
        "title": "- Goule"
      },
      {
        "description": " un PNJ à terre et immobile ressemble à s'y méprendre à un cadavre. Réussir un test de PER + Survie de difficulté 2 permet de distinguer un PNJ d'un cadavre inanimé. Ces PNJ utilisent souvent cette technique pour prendre par surprise des passants inattentifs.",
        "title": "- Cadavre inanimé"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR15), 7 $CD$ de dégâts balistiques Brutaux Radioactifs.",
      "title": "- Mains nues"
    }],
    "name": "Luminescent Bouffi",
    "xp": "134",
    "melee": "5"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viande de mante.  Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat. Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 1 $CD$ de dégâts balistiques Persistant.",
      "title": "- Griffes"
    }],
    "name": "Mante Géante",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Mammifère Mutant",
    "level": "4",
    "energyR": "1",
    "spirit": "4",
    "health": "24",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d4 viandes de rataupe et 1 matériau commun, +1 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour échapper à ses ennemis et se préparer pour son prochain assaut. Au cours de son prochain tour, il peut entreprendre une ation mineure pour jaillir du sol à un emplacement situé à portée moyenne ou inferieur de l'endroit où il s'est enfouit sous terre. En dépensant 1 PA, il peut aussi ajouter 1 $CD$ supplémentaire aux dégâts de sa morsure lorsqu'il émerge. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER. Il peut même détecter les créatures à l'air libre lorsqu'il est sous terre.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 9), 5 $CD$ de dégâts balistiques Perforants 1.",
      "title": "- Morsure"
    }],
    "name": "Mère de Couvée",
    "xp": "34",
    "melee": "2"
  },
  {
    "other": "1",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "4",
    "energyR": "1",
    "spirit": "5",
    "health": "10",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "9",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un molosse mutant mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 1 $CD$ morceaux de viande de molosse mutant. S'ils obtiennent un Effet, ils récupèrent aussi 1 composant fréquent.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 1d6+1 viandes de chien mutant, +3 par PA dépensé. Effet = 1 matériau commun. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = sang inutilisable (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " au cours du premier round de combat, le PNJ peut aboyer au prix d'une action capitale. Chaques PNJ ennemi situé a portée longue ou inférieure peut entreprendre une seconde action mineure lors de son prochain tour. Aucun PNJ ne peut bénéficier de cette capacité plus d'une fois par combat.",
        "title": "- Aboiement d'alerte"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 12), 3 $CD$ de dégâts balistiques.",
      "title": "- Morsure"
    }],
    "name": "Molosse Mutant",
    "xp": "31",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte Mutant",
    "level": "2",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer une mouche bouffie morte en réussissant un test d'END + Survie de difficulté 0. Ils récupèrent ainsi 1 morceau de viande de mouche bouffie et 1 composant peu fréquent.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande de mouche bouffie et 1 glande de mouche bouffie (matériau rare). Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 6), 4 $CD$ de dégats balistiques Radioactifs",
      "title": "- Projection de larve"
    }],
    "name": "Mouche Bouffie",
    "xp": "17",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "15",
    "keywords": "Insecte Mutant",
    "level": "2",
    "energyR": "0",
    "spirit": "6",
    "health": "63",
    "range": "1",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 2d4 viandes de mouche bouffie et 1 glande de mouche bouffie (matériau rare), +2 viandes par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Distance (SR10),  4 $CD$ de dégâts d\u2019Energie, Portée Courte.",
        "title": "- Jet de Plasma"
      },
      {
        "description": " 6 $CD$ de dégâts d\u2019Energie Destructeur.",
        "title": "- Auto-Destruction"
      }
    ],
    "name": "Moucheron Légendaire",
    "xp": "17",
    "melee": "0"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Plante Mutante",
    "level": "6",
    "energyR": "0",
    "spirit": "5",
    "health": "12",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " Une fois par round, le MJ peut dépenser 1 PA durant une Action majeure pour faire sporuler le porteur de spores. Il ne peut alors pas attaquer lors d\u2019une autre Action majeure ce tour-ci. Le porteur de spores libère un nuage verdâtre de spores jusqu\u2019à une portée Courte incluse pour tuer et contaminer ses ennemis. Tout être vivant dans la zone subit 4 $CD$ de Poison Persistant. 1 Effet inflige 1 point de Fatigue (1 maximum), 2 Effets infligent la maladie Contamination au beauveria mordicana.",
        "title": "- Sporulation"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR9), 4 $CD$ de dégâts balistiques Persistant (poison). ",
      "title": "- Griffes"
    }],
    "name": "Porteur de Spores",
    "xp": "45",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Insecte Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande de radcafard. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 6), 1 $CD$ de dégâts balistiques Radioactifs.",
      "title": "- Morsure"
    }],
    "name": "Radcafard",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Insecte Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "16",
    "range": "0",
    "poisonR": "2",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande luminescente. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " une fois par combat, le PNJ peut emettre une impulsion radioactive qui inflige 5 $CD$ de dégâts de radiation à toute créature située à portée C ou inférieure. Si l'impulsion inflige au moins 3 points de dégâts, alors toute goule vaincue située à portée récupère 1 PV et reprend le combat.",
        "title": "- Impulsion radioactive"
      },
      {
        "description": " les radiations saturent tellement le PNJ qu'il en luit. Il emet une étrange lumière et irradie ses environs. Le PNJ inflige 1 $CD$ de dégâts de radiation à quiconque se trouve à portée de main. De plus, toutes ses attaques au corps à corps obtiennent l'effet de dégats Radioactif. Si eles en bénéficient déjà, elles infligent alors 2 dégâts de radiation supplémentaires par Effet obtenu.",
        "title": "- Luminescence"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR8), 1 $CD$ de dégâts balistiques Radioactifs.",
      "title": "- Morsure"
    }],
    "name": "Radcafard Irradié",
    "xp": "20",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "5",
    "energyR": "0",
    "spirit": "5",
    "health": "10",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes de radcerf et 1d4 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [{
      "description": "",
      "title": "Aucune"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 6), 5 $CD$ de dégâts balistiques Perforants.",
        "title": "- Bois"
      },
      {
        "description": " CORPS + Corps à Corps (SR7), 5 $CD$ de dégâts balistiques Perforant 2, Etourdissant, doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Radcerf",
    "xp": "38",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "14",
    "keywords": "Mammifère Mutant",
    "level": "5",
    "energyR": "0",
    "spirit": "7",
    "health": "36",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "7",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes de radcerf et 1d4 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques Perforants 1.",
        "title": "- Bois"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques Perforant 2, Etourdissant, doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Radcerf Albinos",
    "xp": "114",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Mammifère Mutant",
    "level": "5",
    "energyR": "0",
    "spirit": "5",
    "health": "24",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes luminescentes et 1d4 matériaux communs, +1 de chaque par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang irradié, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques Perforants 1 radioactif.",
        "title": "- Bois"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques Perforant 2, Etourdissant, doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Radcerf Luminescent",
    "xp": "76",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "10",
    "keywords": "Amphibien Mutant",
    "level": "4",
    "energyR": "1",
    "spirit": "5",
    "health": "9",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 5 $CD$ viandes de radcrapaud, +1 par PA dépensé. 1 Effet = 2 bric-à-brac ou 2 œufs de radcrapaud. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Une fois par round, la MJ peut dépenser 2 PA durant une Action majeure pour faire poser une mine d\u2019œufs au radcrapaud. Il ne peut alors pas attaquer lors d\u2019une autre Action majeure ce tour-ci. ",
        "title": "- Mine d'Oeufs"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8), 5 $CD$ de dégâts balistiques. ",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR8), 3 $CD$ de dégâts balistiques Etourdissant, Portée Courte. ",
        "title": "- Coup de Langue"
      },
      {
        "description": " 3 $CD$ de dégâts balistiques, Mine, Dégâts étendus. ",
        "title": "- Mine d'Oeufs"
      }
    ],
    "name": "Radcrapaud",
    "xp": "31",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "16",
    "keywords": "Amphibien Mutant",
    "level": "4",
    "energyR": "1",
    "spirit": "5",
    "health": "22",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 5 $CD$ viandes de radcrapaud, +1 par PA dépensé. 1 Effet = 2 bric-à-brac ou 2 œufs de radcrapaud. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Une fois par round, la MJ peut dépenser 2 PA durant une Action majeure pour faire poser une mine d\u2019œufs au radcrapaud. Il ne peut alors pas attaquer lors d\u2019une autre Action majeure ce tour-ci. ",
        "title": "- Mine d'Oeufs"
      },
      {
        "description": " A chaque fois qu\u2019une attaque directe de la créature porte, la cible lance 1 $CD$ . Elle tombe malade sur un Effet.",
        "title": "- Infection"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques. ",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 3 $CD$ de dégâts balistiques Etourdissant, Portée Courte. ",
        "title": "- Coup de Langue"
      },
      {
        "description": " 3 $CD$ de dégâts balistiques, Mine, Dégâts étendus. ",
        "title": "- Mine d'Oeufs"
      }
    ],
    "name": "Radcrapaud Infecté",
    "xp": "62",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "14",
    "keywords": "Amphibien Mutant",
    "level": "7",
    "energyR": "2",
    "spirit": "7",
    "health": "28",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 5 $CD$ viandes de luminescente, +1 par PA dépensé. 1 Effet = 2 bric-à-brac ou 2 œufs de radcrapaud. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Une fois par round, la MJ peut dépenser 2 PA durant une Action majeure pour faire poser une mine d\u2019œufs au radcrapaud. Il ne peut alors pas attaquer lors d\u2019une autre Action majeure ce tour-ci. ",
        "title": "- Mine d'Oeufs"
      },
      {
        "description": " les radiations saturent tellement le PNJ qu'il en luit. Il emet une étrange lumière et irradie ses environs. Le PNJ inflige 2 $CD$ de dégâts de radiation à quiconque se trouve à portée de main. De plus, toutes ses attaques au corps à corps obtiennent l'effet de dégats Radioactif. Si eles en bénéficient déjà, elles infligent alors 2 dégâts de radiation supplémentaires par Effet obtenu.",
        "title": "- Luminescence"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques radioactif. ",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 4 $CD$ de dégâts balistiques radioactif Etourdissant, Portée Courte. ",
        "title": "- Coup de Langue"
      },
      {
        "description": " 3 $CD$ de dégâts balistiques radioactif, Mine, Dégâts étendus. ",
        "title": "- Mine d'Oeufs"
      }
    ],
    "name": "Radcrapaud Luminescent",
    "xp": "104",
    "melee": "3"
  },
  {
    "other": "1",
    "initiative": "9",
    "keywords": "Mammifère Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "5",
    "health": "5",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 viandes de radcerf et 1 matériau commun. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 5), 2 $CD$ de dégâts balistiques.",
      "title": "- Bois"
    }],
    "name": "Radfaon",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "9",
    "keywords": "Oiseau Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "6",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande d\u2019oiseau. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "4",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 1 $CD$ de dégâts balistiques.",
      "title": "- Coup de Bec"
    }],
    "name": "Radmouette",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "9",
    "keywords": "Oiseau Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "5",
    "health": "5",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 2 $CD$ viandes d\u2019oiseau. Un Effet = 1 œuf de radpoulet. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "3",
    "effects": [{
      "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
      "title": "- Petit"
    }],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR5), 1 $CD$ de dégâts balistiques.",
      "title": "- Coup de Bec"
    }],
    "name": "Radpoulet",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "8",
    "keywords": "Mammifère Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "5",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [{
      "description": "",
      "title": "Test d\u2019END + Survie Diff 0 pour extraire 1 viande de radrat. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion)."
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR4), 1 $CD$ de dégâts balistiques Perforants 2.",
      "title": "- Morsure"
    }],
    "name": "Radrat",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "1",
    "initiative": "10",
    "keywords": "Mammifère Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "14",
    "range": "0",
    "poisonR": "1",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "6",
    "inventory": [{
      "description": "",
      "title": "Test d\u2019END + Survie Diff 0 pour extraire 1 viande luminescente. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion)."
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR6), 1 $CD$ de dégâts balistiques Perforants 2.",
      "title": "- Morsure"
    }],
    "name": "Radrat Luminescent",
    "xp": "20",
    "melee": "1"
  },
  {
    "other": "3",
    "initiative": "12",
    "keywords": "Arachnide Mutant",
    "level": "7",
    "energyR": "3",
    "spirit": "5",
    "health": "21",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "7",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un radscorpion mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceaux de viande de radscorpion. S'ils obtiennent un Effet, ils récupèrent aussi un composant rare ou un oeuf de radscorpion s'ils obtiennent deux effets.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 2 pour extraire 4 $CD$ viandes de radscorpion (1 Effet = 1 œuf de radscorpion) +2 viandes par PA dépensé, 1 dard de radscorpion (matériau rare x2). Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour surprendre ses assaillants. Tant qu'il est sous terre, il n'est pas visible et ne peut pas être pis pour cible d'une attaque. Au prix d'une action capitale, il creuse un tunnel qui peut le mener jusqu'à deux zones de distance. Jaillir du sol ne lui demande qu'une action mineure. Le PNJ ne peut pas fouir la pierre, le métal ou le bois. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " si un attaquant choisi de viser la tête de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 12), 4 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Pinces"
      },
      {
        "description": " CORPS + Corps à Corps (SR 12), 3 $CD$ de dégats de poison Persistants.",
        "title": "- Dard"
      }
    ],
    "name": "Radscorpion",
    "xp": "74",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Arachnide Mutant",
    "level": "7",
    "energyR": "3",
    "spirit": "7",
    "health": "69",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 6 $CD$  viandes de radscorpion (1 Effet = 1 œuf de radscorpion) +2 viande par PA dépensé, 1 dard de radscorpion (matériau rare x2). Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour surprendre ses assaillants. Tant qu'il est sous terre, il n'est pas visible et ne peut pas être pis pour cible d'une attaque. Au prix d'une action capitale, il creuse un tunnel qui peut le mener jusqu'à deux zones de distance. Jaillir du sol ne lui demande qu'une action mineure. Le PNJ ne peut pas fouir la pierre, le métal ou le bois. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " si un attaquant choisi de viser la tête de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 14), 4 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Pinces"
      },
      {
        "description": " CORPS + Corps à Corps (SR 14), 3 $CD$ de dégats de poison Persistants.",
        "title": "- Dard"
      }
    ],
    "name": "Radscorpion Albinos",
    "xp": "156",
    "melee": "5"
  },
  {
    "other": "3",
    "initiative": "14",
    "keywords": "Arachnide Mutant",
    "level": "7",
    "energyR": "3",
    "spirit": "5",
    "health": "46",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 2 pour extraire 4 $CD$  viandes luminescente (1 Effet = 1 œuf de radscorpion) +2 viande par PA dépensé, 1 dard de radscorpion (matériau rare x3). Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de poison qu'il subit et ne peut subir aucun dégât ou effet infligé par du poison.",
        "title": "- Immunisée contre le poison"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour surprendre ses assaillants. Tant qu'il est sous terre, il n'est pas visible et ne peut pas être pis pour cible d'une attaque. Au prix d'une action capitale, il creuse un tunnel qui peut le mener jusqu'à deux zones de distance. Jaillir du sol ne lui demande qu'une action mineure. Le PNJ ne peut pas fouir la pierre, le métal ou le bois. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " si un attaquant choisi de viser la tête de la créature, il ignore la RD de cette dernière. Cette capacité ne s'applique pas si l'attaque touche par hasard la tête.",
        "title": "- Point faible"
      },
      {
        "description": " Une fois morte, le corps de la créature libère un gaz verdâtre hautement radioactif pendant 5 minutes, infligeant inflige 5 $CD$ Radioactifs jusqu\u2019à portée Courte comprise.",
        "title": "- Mort Radioactive"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 14), 4 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Pinces"
      },
      {
        "description": " CORPS + Corps à Corps (SR 14), 3 $CD$ de dégats de radiation Persistants.",
        "title": "- Dard Luminescent"
      }
    ],
    "name": "Radscorpion Luminescent",
    "xp": "104",
    "melee": "5"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Mammifère Mutant",
    "level": "2",
    "energyR": "1",
    "spirit": "4",
    "health": "7",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 viandes de rat géant et 1 matériau commun, +1 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1 poche de sang irradié, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [{
      "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER. Il peut même détecter les créatures à l'air libre lorsqu'il est sous terre.",
      "title": "- Sens aiguisés"
    }],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR7), 4 $CD$ de dégâts balistiques Perforants 1.",
      "title": "- Morsure"
    }],
    "name": "Rat Géant",
    "xp": "17",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Mammifère Mutant",
    "level": "2",
    "energyR": "0",
    "spirit": "4",
    "health": "7",
    "range": "0",
    "poisonR": "0",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un rataupe mort en réussissant un test d'END + Survie de difficulté 0. Ils récupèrent ainsi 1 morceau de viande de rataupe et 1 composant fréquent.",
        "title": "Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 viandes de rataupe et 1 matériau commun, +1 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour échapper à ses ennemis et se préparer pour son prochain assaut. Au cours de son prochain tour, il peut entreprendre une ation mineure pour jaillir du sol à un emplacement situé à portée moyenne ou inferieur de l'endroit où il s'est enfouit sous terre. En dépensant 1 PA, il peut aussi ajouter 1 $CD$ supplémentaire aux dégâts de sa morsure lorsqu'il émerge. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER. Il peut même détecter les créatures à l'air libre lorsqu'il est sous terre.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 7), 4 $CD$ de dégâts balistiques Perforants 1.",
      "title": "- Morsure"
    }],
    "name": "Rataupe",
    "xp": "17",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Mammifère Mutant",
    "level": "3",
    "energyR": "0",
    "spirit": "4",
    "health": "22",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d4 viandes luminescente et 1 matériau rare, +1 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1 poche de sang irradié, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " au prix d'une action capitale, le PNJ peut creuser un tunnel sous terre pour échapper à ses ennemis et se préparer pour son prochain assaut. Au cours de son prochain tour, il peut entreprendre une ation mineure pour jaillir du sol à un emplacement situé à portée moyenne ou inferieur de l'endroit où il s'est enfouit sous terre. En dépensant 1 PA, il peut aussi ajouter 1 $CD$ supplémentaire aux dégâts de sa morsure lorsqu'il émerge. $EXT$ 1 PA pour +1 $CD$ à son attaque suivant sa réapparition.",
        "title": "- Fouissage"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER. Il peut même détecter les créatures à l'air libre lorsqu'il est sous terre.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 9), 4 $CD$ de dégâts balistiques Perforants 1 radioactif.",
      "title": "- Morsure"
    }],
    "name": "Rataupe Luminescent",
    "xp": "48",
    "melee": "2"
  },
  {
    "other": "4",
    "initiative": "18",
    "keywords": "Crustacé Mutant",
    "level": "19",
    "energyR": "7",
    "spirit": "6",
    "health": "50",
    "range": "0",
    "poisonR": "10 (buste, jambes, bras); 5 (tête)",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "12",
    "inventory": [
      {
        "description": "  4d20 caps, 4 $CD$ 1 Effet = 1 jet sur la table de bric-à-brac. À la discrétion du MJ, le corps peut également contenir jusqu\u2019à 3 armes et 3d20 munitions appropriées.",
        "title": "- Fouille"
      },
      {
        "description": " les pilleurs peuvent dépecer une reine des fangeux morte en reussissant un test END + Survie de dificulté 0. Ils récupèrent ainsi 5 morceaux de viande de reine des fangeux.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 1 pour extraire 5d10 viandes de reine fangeux et 1d6 œufs de fangeux, +5 viandes et 2 œufs par PA dépensé.  Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Dépeçage"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "10 (buste, jambes, bras); 5 (tête)",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " une fois par round, le MJ peut dépenser 4 PA au prix d'une action capitale afin de faire éclore 4 oeufs de jeunes fangeux. Dans ce cas, la reine des fangeux ne peut pas entreprendre d'attaque au prix d'une action capitale de même round.",
        "title": "- Frai de fangeux"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l'intimider ou de le menacer.",
        "title": "- Immunisé contre la peur"
      },
      {
        "description": " le corps du PNJ est couvert d'une solide carapace, mais sa tête reste son point faible. La zone est petite et difficile à viser  la défense de cette localisation précise est donc de 2.",
        "title": "- Minuscule point faible"
      },
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1 (2 si la tête est visée)",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 13), 9 $CD$ de dégâts balistiques.",
        "title": "- Pinces"
      },
      {
        "description": " CORPS + Corps à Corps (SR 17), 10 $CD$ de dégats de radiations Perforants 1.",
        "title": "- Aspersion d'acide"
      }
    ],
    "name": "Reine des Fangeux",
    "xp": "137",
    "melee": "5"
  },
  {
    "other": "2",
    "initiative": "13",
    "keywords": "Insecte Mutant",
    "level": "9",
    "energyR": "0",
    "spirit": "4",
    "health": "27",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 6 $CD$ viande de fourmi géante, +2 œufs par PA dépensé. Effet = 1d4 œufs de fourmi géante. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " Si la créature subit une blessure grave sur les antennes, elle entre en frénésie, attaquant la créature la plus proche, amie ou ennemie. ",
        "title": "- Antennes Sensibles"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR12), 3 $CD$ de dégâts balistiques.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR12),  3 $CD$ de poison Persistant. ",
        "title": "- Jet d'Acide"
      }
    ],
    "name": "Reine des Fourmis Géantes",
    "xp": "67",
    "melee": "3"
  },
  {
    "other": "4",
    "initiative": "17",
    "keywords": "Humain Mutant",
    "level": "10",
    "energyR": "1",
    "spirit": "7",
    "health": "60",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "10",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1d8 viandes humaine et 1 matériau commun, +2 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " La créature est très sensible au bruit. Un bruit fort comme une explosion lui inflige un malus de Diff +1 à tous ses tests durant 1 round suivant le bruit intense.",
        "title": "- Hyper-Acousie"
      },
      {
        "description": " La créature peut utiliser plusieurs manœuvres de déplacement durant son tour et sa Défense gagne +1. ",
        "title": "- Rapide"
      },
      {
        "description": " le PNJ peut choisir de porter une attaque de griffes dévastatrice en augmentant la difficulté de l'attaque de +1. En cas de réussite, ajoutez +2 $CD$ aux dégâts.",
        "title": "- Déchiquetage"
      }
    ],
    "defense": "2",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR15), 6 $CD$ de dégâts balistiques, blessures sale.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR15), 7 $CD$ de dégâts balistiques Perforant 2.",
        "title": "- Griffes"
      }
    ],
    "name": "Reine Tunnelier",
    "xp": "222",
    "melee": "5"
  },
  {
    "other": "1",
    "initiative": "11",
    "keywords": "Mammifère Reptile Mutant",
    "level": "6",
    "energyR": "1",
    "spirit": "5",
    "health": "12",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 1d6 viandes de croc, 1d4 œufs de croc et 1 matériau peu commun, +1 viande et +1 œuf par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " Grâce à son œil gauche reptilien, le rôdeur nocturne voit les infrarouges et détecte ses proies par la chaleur qu\u2019elles dégagent. Il ignore les difficultés liés au manque de lumière. ",
        "title": "- Vision Thermique"
      },
      {
        "description": " Lors du 1er round, la créature utilise son Action majeure pour sonner. Tous ses alliés jusqu\u2019à portée Courte gagnent une seconde Action mineure à leur prochain tour (maximum 1x par combat).",
        "title": "- Queue à Sonnette"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 9), 5 $CD$ de dégâts balistiques Persistant (dégâts de poison).",
      "title": "- Morsure"
    }],
    "name": "Rôdeur Nocturne",
    "xp": "45",
    "melee": "3"
  },
  {
    "other": "4",
    "initiative": "16",
    "keywords": "Crustacé Mutant",
    "level": "12",
    "energyR": "5",
    "spirit": "7",
    "health": "42",
    "range": "3",
    "poisonR": "5",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 1 pour extraire 2 $CD$ de viandes de fangeux et +2 matériaux communs, +2 de chaque par PA dépensé.  Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "4",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut nager et s'immerger complètement, sans avoir besoin de reprendre son souffle. Sous l'eau, ses attaques et ses déplacements ne subissent aucune augmentation de difficulté.",
        "title": "- Aquatique"
      },
      {
        "description": " La créature peut utiliser plusieurs manœuvres de déplacement durant son tour et sa Défense gagne +1. ",
        "title": "- Rapide"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "2",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR12), 6 $CD$ de dégâts balistiques.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Distance (SR12),  7 $CD$ de dégâts d\u2019Energie Etourdissants.",
        "title": "- Cri Sonique"
      }
    ],
    "name": "Roi des Fangeux",
    "xp": "176",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Mammifère Mutant",
    "level": "4",
    "energyR": "0",
    "spirit": "6",
    "health": "48",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 3d8 viandes de bighorner et 2 matériaux communs, +8 viandes et 1 matériau par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "$EXT$ Test d\u2019AGI + Médecine Diff 1 pour extraire 1d8 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion)."
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [{
      "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
      "title": "- Grand"
    }],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR10), 4 $CD$ de dégâts balistiques.",
        "title": "- Cornes"
      },
      {
        "description": " CORPS + Corps à Corps (SR10), 5 $CD$ de dégâts balistiques Etourdissants. Doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Taureau",
    "xp": "93",
    "melee": "2"
  },
  {
    "other": "2",
    "initiative": "11",
    "keywords": "Insecte Mutant",
    "level": "5",
    "energyR": "0",
    "spirit": "5",
    "health": "9",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "6",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 viande de tique et au choix 1 matériau peu commun ou 1 poche de sang. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus petit que la majorité des personnages. Les PV normaux du PNJ sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, le PNJ est tué s'il subit la moindre blessure.",
        "title": "- Petit"
      },
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      }
    ],
    "defense": "2",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR 7), 5 $CD$ de dégâts balistiques.",
      "title": "- Trompe"
    }],
    "name": "Tique",
    "xp": "38",
    "melee": "1"
  },
  {
    "other": "2",
    "initiative": "9",
    "keywords": "Humain Mutant",
    "level": "2",
    "energyR": "0",
    "spirit": "5",
    "health": "6",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaines, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR7), 3 $CD$ de dégâts balistiques, blessure sale.",
      "title": "- Mains Nues"
    }],
    "name": "Trog",
    "xp": "24",
    "melee": "3"
  },
  {
    "other": "2",
    "initiative": "12",
    "keywords": "Humain Mutant",
    "level": "4",
    "energyR": "0",
    "spirit": "5",
    "health": "22",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "7",
    "inventory": [
      {
        "description": " 2 $CD$ bric-à-brac. 1 Effet = 1 $CD$ caps, 2 Effets = 1 jet sur la table d\u2019objets utiles.",
        "title": "- Fouille"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaines, +1 par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "1",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [{
      "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques, blessure sale.",
      "title": "- Mains Nues"
    }],
    "name": "Trog Sauvage",
    "xp": "62",
    "melee": "5"
  },
  {
    "other": "4",
    "initiative": "13",
    "keywords": "Humain Mutant",
    "level": "10",
    "energyR": "1",
    "spirit": "5",
    "health": "18",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "8",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaine et 1 matériau commun, +1 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " La créature est très sensible au bruit. Un bruit fort comme une explosion lui inflige un malus de Diff +1 à tous ses tests durant 1 round suivant le bruit intense.",
        "title": "- Hyper-Acousie"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques, blessures sale.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR11), 6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      }
    ],
    "name": "Tunnelier",
    "xp": "74",
    "melee": "3"
  },
  {
    "other": "4",
    "initiative": "15",
    "keywords": "Humain Mutant",
    "level": "10",
    "energyR": "1",
    "spirit": "5",
    "health": "40",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "10",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaine et 1 matériau commun, +2 viande par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poche de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " La créature est très sensible au bruit. Un bruit fort comme une explosion lui inflige un malus de Diff +1 à tous ses tests durant 1 round suivant le bruit intense.",
        "title": "- Hyper-Acousie"
      },
      {
        "description": " La créature ne peut pas utiliser l\u2019Action majeure Sprint.",
        "title": "- Lente"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR14), 6 $CD$ de dégâts balistiques, blessures sale.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR14), 6 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      }
    ],
    "name": "Tunnelier Lourd",
    "xp": "148",
    "melee": "4"
  },
  {
    "other": "4",
    "initiative": "13",
    "keywords": "Humain Mutant",
    "level": "10",
    "energyR": "1",
    "spirit": "8",
    "health": "15",
    "range": "0",
    "poisonR": "3",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "5",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes humaine et 1 matériau commun. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d4 poche de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "0",
    "effects": [
      {
        "description": " Le PNJ manque d'intelligence et seuls ses instincts primaires le guident. Le PNJ sauvage ne peut pas être persuadé ou influencé par des tests de Discours. Il se déplace vers l'ennemi le plus proche et l'attaque. Si il ne detecte aucun ennemi, il se déplace vers la source de lumière vive ou de bruit fort la plus proche. Si il ne perçoit rien de cela, il se déplace au hasard ou se contente d'attendre allongé.",
        "title": "- Sauvage"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " les tests de Discrétion du PNJ ont un SR de 10, et il lance +1d20 lors de ses attaques furtives.",
        "title": "- Discret"
      },
      {
        "description": " au moins l'un des sens du PNJ est particulièrement aiguisé. Le PNJ peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tous ses tests de PER.",
        "title": "- Sens aiguisés"
      },
      {
        "description": " La créature voit dans le noir mais subit les malus du trop de luminosité  Diff +3 en plein jour ou sous lumière forte, Diff 1+ ou +2 en fonction de la luminosité. ",
        "title": "- Photo-sensible"
      },
      {
        "description": " La créature est très sensible au bruit. Un bruit fort comme une explosion lui inflige un malus de Diff +1 à tous ses tests durant 1 round suivant le bruit intense.",
        "title": "- Hyper-Acousie"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR8), 6 $CD$ de dégâts balistiques poison Persistant.",
        "title": "- Morsure"
      },
      {
        "description": " CORPS + Corps à Corps (SR8), 4 $CD$ de dégâts balistiques Perforant 1.",
        "title": "- Griffes"
      }
    ],
    "name": "Tunnelier Venimeux",
    "xp": "74",
    "melee": "3"
  },
  {
    "other": "3",
    "initiative": "16",
    "keywords": "Oiseau Mutant",
    "level": "7",
    "energyR": "0",
    "spirit": "7",
    "health": "69",
    "range": "0",
    "poisonR": "Immunisé",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "9",
    "inventory": [{
      "description": " Test d\u2019END + Survie Diff 0 pour extraire 6 $CD$ viandes d\u2019oiseau, +2 par PA dépensé. Un Effet = 1 matériau commun. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion).",
      "title": "- Dépeçage"
    }],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "0",
    "radiationR": "3",
    "effects": [
      {
        "description": " le PNJ peut se déplacer librement dans les airs. Il ignore les obstacles au niveau du sol ainsi que les effets de terrain difficiles et il peut survoler les zones \"vides\" du champ de bataille s'il le souhaite. Chaque tour, le PNJ doit consacrer au moins une action mineure à se déplacer, et s'il est renversé, il est jeté à terre et subit 3 $CD$ de dégâts balistiques étourdissants, +2 $CD$ par zone traversée lors de sa chute.",
        "title": "- Vol"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      },
      {
        "description": " si le PNJ se place à portée de main d'un adversaire et l'attaque au Corps à Corps dans le même tour, il peut relancer 1d20 du résultat.Après l'attaque, il peut dépenser 1 PA pour se déplacer d'une zone.",
        "title": "- Attaque en piqué"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR14),  5 $CD$ de dégâts balistiques Perforant 2.",
        "title": "- Serres"
      },
      {
        "description": " CORPS + Corps à Corps (SR14), 4 $CD$ de dégâts balistiques Brutaux Fracassants.",
        "title": "- Coup de Bec"
      }
    ],
    "name": "Vautour",
    "xp": "156",
    "melee": "5"
  },
  {
    "other": "1",
    "initiative": "8",
    "keywords": "Mammifère Mutant",
    "level": "1",
    "energyR": "0",
    "spirit": "4",
    "health": "5",
    "range": "0",
    "poisonR": "0",
    "source": "$EXT$",
    "type": "Créature Normale",
    "body": "4",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 1 $CD$ viandes de bighorner. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 1d6 poches de sang. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "1",
    "radiationR": "Immunisé",
    "effects": [],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR5), 3 $CD$ de dégâts balistiques.",
        "title": "- Cornes"
      },
      {
        "description": " CORPS + Corps à Corps (SR5), 4 $CD$ de dégâts balistiques Etourdissants. Doit dépenser une Action mineure de mouvement avant l\u2019attaque. ",
        "title": "- Charge"
      }
    ],
    "name": "Veau",
    "xp": "10",
    "melee": "1"
  },
  {
    "other": "4",
    "initiative": "15",
    "keywords": "Mammifère Mutant",
    "level": "14",
    "energyR": "1",
    "spirit": "6",
    "health": "37",
    "range": "0",
    "poisonR": "2",
    "source": "$OFF$",
    "type": "Créature Normale",
    "body": "9",
    "inventory": [
      {
        "description": " les pilleurs peuvent dépecer un yao guai mort en réussissant un test d'END + Survie de difficulté 1. Ils récupèrent ainsi 2 $CD$ morceaux de viande de yao guai. S'il obtiennent un Effet, ils récupèrent aussi 2 composants fréquents.",
        "title": "- Dépeçage"
      },
      {
        "description": "",
        "title": "Ou"
      },
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d10 +5 viandes de yao guai et 2d4 matériaux communs, +5 viandes et +1 matériau par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "$EXT$ - Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 2d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "2",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 14), 9 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 14), 10 $CD$ de dégâts balistiques Perforants 1.",
        "title": "- Morsure"
      }
    ],
    "name": "Yao Guai",
    "xp": "102",
    "melee": "5"
  },
  {
    "other": "4",
    "initiative": "19",
    "keywords": "Mammifère Mutant",
    "level": "14",
    "energyR": "1",
    "spirit": "8",
    "health": "117",
    "range": "0",
    "poisonR": "2",
    "source": "$EXT$",
    "type": "Créature Légendaire",
    "body": "11",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 3d10 +5 viandes de yao guai et 2d4 matériaux communs, +10 viandes et +1 matériau par PA dépensé. Complication 18-20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 2d4 poches de sang, +1 par PA dépensé. Complication 18-20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "2",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 16), 9 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 16), 9 $CD$ de dégâts balistiques Perforants 3.",
        "title": "- Morsure"
      }
    ],
    "name": "Yao Guai Géant",
    "xp": "306",
    "melee": "5"
  },
  {
    "other": "4",
    "initiative": "17",
    "keywords": "Mammifère Mutant",
    "level": "14",
    "energyR": "1",
    "spirit": "6",
    "health": "78",
    "range": "0",
    "poisonR": "2",
    "source": "$EXT$",
    "type": "Créature Puissante",
    "body": "11",
    "inventory": [
      {
        "description": " Test d\u2019END + Survie Diff 0 pour extraire 2d10 +5 viandes luminescente et 2d4 matériaux communs, +5 viandes et +1 matériau par PA dépensé. Complication 20 = Viande non comestible, même cuite(test de maladie en cas d'ingestion). ",
        "title": "- Dépeçage"
      },
      {
        "description": " Test d\u2019AGI + Médecine Diff 1 pour extraire 2d4 poches de sang, +1 par PA dépensé. Complication 20 = Sang inutilisable, (test de maladie en cas d'ingestion).",
        "title": "$EXT$ - Transfusion"
      }
    ],
    "typeDef": BestiaryType.CREATURE,
    "ballisticR": "2",
    "radiationR": "Immunisé",
    "effects": [
      {
        "description": " le PNJ réduit à 0 tous les dégâts de radiation qu'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.",
        "title": "- Immunisée contre les radiations"
      },
      {
        "description": " le PNJ est plus grand que la majorité des autres personnages et les domines de toute sa taille. Il reçoit +1 PV supplémentaire par niveau, mais sa défense est réduite de 1, jusqu'à un minimum de 1. De plus, il subit un coup critique uniquement si une attaque lui inflige au moins 7 points de dégâts (après applications de la RD) en un seul coup, au lieu de 5 points de dégâts pour les autres créatures.",
        "title": "- Grand"
      },
      {
        "description": " le PNJ est prompt à attaquer lorsqu'il sent une proie. Lorsqu'il entre en scène, il génère immédiatement 1 point d'action. Si il est un allié, ce point est placé dans la reserve du groupe. Si il est un ennemi, il rejoint la réserve du MJ.",
        "title": "- Agréssif"
      }
    ],
    "defense": "1",
    "attacks": [
      {
        "description": " CORPS + Corps à Corps (SR 16), 9 $CD$ de dégâts balistiques Brutaux.",
        "title": "- Griffes"
      },
      {
        "description": " CORPS + Corps à Corps (SR 16), 10 $CD$ de dégâts balistiques Perforants 2 radioactif.",
        "title": "- Morsure"
      }
    ],
    "name": "Yao Guai Irradié",
    "xp": "204",
    "melee": "5"
  }
]





