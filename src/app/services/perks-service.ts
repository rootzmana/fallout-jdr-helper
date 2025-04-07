import {ToastController} from '@ionic/angular';
import {Injectable} from '@angular/core';
import {PerkDetail} from '../data/perks/perks.model';
import {PERKS} from '../data/perks/perks';

export interface Stats {
  sources: string[];
  level: number;
  s: number;
  p: number;
  e: number;
  c: number;
  i: number;
  a: number;
  l: number;
  isRobot: boolean;
  isCompanion: boolean;
}

@Injectable({providedIn: 'root'})
export class PerksService {

  constructor() {
  }

  findByCharacterStats(stats: Stats): PerkDetail[]{
    const result: PerkDetail[] = [];
    for(const perk of PERKS){
      const checkRobot = !stats.isRobot || perk.canRobot;
      const checkCompanion = !stats.isCompanion || perk.canCompanion;
      if (this.manageSpecialAndLevelChanges(stats, perk)
        && checkRobot
        && checkCompanion
        && stats.sources.includes(perk.source)) {
        result.push(perk);
      }

    }
    // Order by Name
    result.sort((a, b) => a.Name.localeCompare(b.Name));
    return result;
  }

  manageSpecialAndLevelChanges(stats: Stats, perk: PerkDetail): boolean {
    return stats.s == null &&
      stats.p == null &&
      stats.e == null &&
      stats.c == null &&
      stats.i == null &&
      stats.a == null &&
      stats.l == null
      ? true :
        stats.s >= perk.s
        && stats.p >= perk.p
        && stats.e >= perk.e
        && stats.c >= perk.c
        && stats.i >= perk.i
        && stats.a >= perk.a
        && stats.l >= perk.l;
  }
}
