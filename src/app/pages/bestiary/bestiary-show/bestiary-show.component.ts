import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BestiaryType, Creature} from "../../../data/bestiary/fr/bestiary.model";
import {Location} from '@angular/common';

@Component({
  selector: 'app-bestiary-show',
  templateUrl: './bestiary-show.component.html',
  styleUrls: ['./bestiary-show.component.scss'],
})
export class BestiaryShowComponent implements OnInit {
  mob: Creature;
  private subType: string;
  CREATURE = BestiaryType.CREATURE;
  CHARACTER = BestiaryType.CHARACTER;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.mob = this.router.getCurrentNavigation().extras.state.mob;
  }

  back() {
    this.location.back();
  }
}
