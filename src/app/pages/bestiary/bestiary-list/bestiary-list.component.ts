import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MobDetails, SubType} from "../../../data/bestiary/fr/bestiary.model";
import {getBestiaryList} from "../../../data/bestiary/fr/bestiary-utils";

@Component({
  selector: 'app-bestiary-list',
  templateUrl: './bestiary-list.component.html',
  styleUrls: ['./bestiary-list.component.scss'],
})
export class BestiaryListComponent implements OnInit {

  filteredCreatures: MobDetails[] = [];
  filteredThinkers: MobDetails[] = [];
  filteredRobots: MobDetails[] = [];

  subTypes = [SubType[SubType.CREATURES], SubType[SubType.ROBOTS], SubType[SubType.THINKERS]];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.reloadBestiary();
  }

  showDetails(mob: MobDetails) {
    this.router.navigateByUrl('/bestiary/show/' + mob.name, {state: {mob: mob}});
  }

  filterBestiary(event: any) {
    const searchText = event.target.value;
    if (searchText.length > 0) {
      this.filteredCreatures = getBestiaryList(SubType.CREATURES).filter(value => value.name.toLowerCase().includes(searchText.toLowerCase()));
      this.filteredThinkers = getBestiaryList(SubType.THINKERS).filter(value => value.name.toLowerCase().includes(searchText.toLowerCase()));
      this.filteredRobots = getBestiaryList(SubType.ROBOTS).filter(value => value.name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      this.reloadBestiary();
    }
  }

  getFilteredCreatures(subType: string) {
    switch (subType) {
      case 'CREATURES':
        return this.filteredCreatures;
      case  'THINKERS':
        return this.filteredThinkers;
      case 'ROBOTS':
        return this.filteredRobots;
      default:
        return [];
    }
  }

  private reloadBestiary() {
    this.filteredCreatures = getBestiaryList(SubType.CREATURES);
    this.filteredThinkers = getBestiaryList(SubType.THINKERS);
    this.filteredRobots = getBestiaryList(SubType.ROBOTS);
  }
}
