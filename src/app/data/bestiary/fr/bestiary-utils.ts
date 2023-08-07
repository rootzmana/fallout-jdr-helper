import {Creature, SubType} from "./bestiary.model";
import {ANIMALS} from "./animals";

export const getBestiaryList = (subType: SubType): Creature[] => {
  switch (subType) {
    case SubType.ANIMALS:
      return ANIMALS;
    default:
      return []
  }
}
