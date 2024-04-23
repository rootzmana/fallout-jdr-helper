import {MobDetails, SubType} from "./bestiary.model";
import {CREATURES} from "./CREATURES";

export const getBestiaryList = (subType: SubType): MobDetails[] => {
  let bestiary = [];
  switch (subType) {
    case SubType.CREATURES:
      bestiary = CREATURES;
      break;
    case SubType.ROBOTS:
      bestiary = [];
      break;
    case SubType.THINKERS:
      bestiary = [];
      break;
    default:
      bestiary = [];
      break;
  }
  return bestiary.sort((a, b) => a.name.localeCompare(b.name));
}

export const findMobByName = (name: string) => {
  const allMobs = getBestiaryList(SubType.ROBOTS).concat(getBestiaryList(SubType.THINKERS)).concat(getBestiaryList(SubType.CREATURES));
  return allMobs.find(value => value.name === name);
}
