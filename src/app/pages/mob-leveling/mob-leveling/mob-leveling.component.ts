import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BestiaryType, MobDetails} from "../../../data/bestiary/fr/bestiary.model";

@Component({
  selector: 'app-mob-leveling',
  templateUrl: './mob-leveling.component.html',
  styleUrls: ['./mob-leveling.component.scss'],
})
export class MobLevelingComponent implements OnInit {
  mobType: 'CREATURE' | 'CHARACTER' = 'CREATURE';
  mob: MobDetails;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.mob = this.router.getCurrentNavigation().extras?.state?.mob;
    if (this.mob) {
      if (this.mob.typeDef === BestiaryType.CHARACTER) {
        this.mobType = "CHARACTER";
      } else if (this.mob.typeDef === BestiaryType.CREATURE) {
        this.mobType = "CREATURE";
      }
    }
  }

  segmentChanged($event: any) {
    this.mobType = $event.detail.value;
  }
}
