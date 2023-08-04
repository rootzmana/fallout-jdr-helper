export interface Creature {
  typeDef: BestiaryType;
  name: string;
  level: number;
  keywords: string;
  xp: number;
  type: string;
  body: number;
  spirit: number;
  skills: string[];
  health: number;
  initiative: number;
  defense: number;
  carryWeight: string;
  melee: number;
  range: number;
  other: number;
  ballisticR: string;
  energyR: string;
  radiatioNR: string;
  poisonR: string;
  attacks: string[];
  effects: string[];
  inventory: string;
}

export interface Character {
  typeDef: BestiaryType;
  name: string;
  level: number;
  keywords: string;
  xp: number;
  type: string;
  strength: number;
  perception: number;
  endurance: number;
  charisma: number;
  intelligence: number;
  agility: number;
  luck: number;
  skills: string[];
  health: number;
  initiative: number;
  defense: number;
  carryWeight: string;
  melee: number;
  range: number;
  other: number;
  ballisticR: string;
  energyR: string;
  radiatioNR: string;
  poisonR: string;
  attacks: string[];
  effects: string[];
  inventory: string;
}

export enum BestiaryType {
  CHARACTER, CREATURE
}

export enum SubType {
  ANIMALS, ROBOTS, SYNTHS, HUMANOIDS, SUPERMUTANTS, TURRETS, BOS, RAIDERS, OTHERS
}
