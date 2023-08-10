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
