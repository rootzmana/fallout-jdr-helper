export interface Creature {
  typeDef: BestiaryType;
  name: string;
  level: string;
  keywords: string;
  xp: string;
  type: string;
  body?: string;
  spirit?: string;
  strength?: string;
  perception?: string;
  endurance?: string;
  charisma?: string;
  intelligence?: string;
  agility?: string;
  skills?: string[];
  health: string;
  initiative: string;
  defense: string;
  luckPoints?: string;
  carryWeight?: string;
  melee: string;
  range: string;
  other: string;
  ballisticR: string;
  energyR: string;
  radiationR: string;
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
