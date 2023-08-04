import {BestiaryType, Character, Creature} from "./bestiary.model";

export const ANIMALS: (Creature | Character)[] = [
  {
    typeDef: BestiaryType.CREATURE,
    name: 'Brahmine',
    level: 3,
    keywords: 'Mammifère Mutant',
    xp: 24,
    type: 'Normale',
    body: 6,
    spirit: 4,
    skills: [],
    health: 9,
    initiative: 10,
    defense: 1,
    carryWeight: '',
    melee: 1,
    range: 0,
    other: 2,
    ballisticR: '1',
    energyR: '0',
    radiatioNR: 'Immunisée',
    poisonR: '0',
    attacks: ['- Coup de Tête : CORPS + Corps à Corps (SR 7), 4 $CD$ de dégâts balistiques.'],
    effects: ['- Immunisée contre les radiations : le PNJ réduit à 0 tous les dégâts de radiation qu\'il subit et ne peut subir aucun dégât ou effet infligé par des radiations.'],
    inventory: 'Dépeçage : les pilleurs peuvent dépecer une brahmine morte en réussissant un test d\'END + Survie de difficulté 0. Ils récupèrent ainsi 1 morceau de viande de brahmine et 2 composants peu fréquents.',
  }
];
