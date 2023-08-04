import {Character, Creature, SubType} from "./bestiary.model";
import {ANIMALS} from "./animals";

export const getBestiaryList = (subType: SubType): (Creature | Character)[] => {
  switch (subType) {
    case SubType.ANIMALS:
      return ANIMALS;
    default:
      return []
  }
}
