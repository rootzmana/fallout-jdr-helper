import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Character, Creature, SubType} from "../../../data/bestiary/fr/bestiary.model";
import {getBestiaryList} from "../../../data/bestiary/fr/bestiary-utils";

@Component({
  selector: 'app-bestiary-list',
  templateUrl: './bestiary-list.component.html',
  styleUrls: ['./bestiary-list.component.scss'],
})
export class BestiaryListComponent implements OnInit {

  subType: string;
  bestiary: (Creature | Character)[] = [];
  filteredBestiary: (Creature | Character)[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.subType = SubType[data.subType];
      this.bestiary = getBestiaryList(data.subType);
      this.filteredBestiary = [...this.bestiary];
    });
  }

  showDetails(mob: Creature | Character) {
    this.router.navigateByUrl('/bestiary/show/' + mob.name, {state: {mob: mob}});

  }

  filterBestiary(event: any) {
    const searchText = event.target.value;
    this.filteredBestiary = this.bestiary.filter(value => value.name.toLowerCase().includes(searchText.toLowerCase()))
  }
}
