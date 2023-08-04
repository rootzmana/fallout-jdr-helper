import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Character, Creature} from "../../../data/bestiary/fr/bestiary.model";
import {Location} from '@angular/common';

@Component({
  selector: 'app-bestiary-show',
  templateUrl: './bestiary-show.component.html',
  styleUrls: ['./bestiary-show.component.scss'],
})
export class BestiaryShowComponent implements OnInit {
  private mob: Creature | Character;
  private subType: string;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.mob = this.router.getCurrentNavigation().extras.state.mob;
  }

  back() {
    this.location.back();
  }
}
