import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BestiaryType, MobDetails} from "../../../data/bestiary/fr/bestiary.model";
import {Location} from '@angular/common';
import {findMobByName} from "../../../data/bestiary/fr/bestiary-utils";

@Component({
  selector: 'app-bestiary-show',
  templateUrl: './bestiary-show.component.html',
  styleUrls: ['./bestiary-show.component.scss'],
})
export class BestiaryShowComponent implements OnInit {
  mob: MobDetails;
  private subType: string;
  CREATURE = BestiaryType.CREATURE;
  CHARACTER = BestiaryType.CHARACTER;

  constructor(private router: Router, private location: Location, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const mobName = params.name;
      this.mob = findMobByName(mobName);
    });
  }

  back() {
    this.location.back();
  }

  upgradeCreature() {
    this.router.navigateByUrl('/mob-leveling', {state: {mob: this.mob}});
  }
}
