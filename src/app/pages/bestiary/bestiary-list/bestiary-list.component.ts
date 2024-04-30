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

  public disclaimerButtons = [
    {
      text: 'J\'ai compris',
      role: 'cancel',
    },
  ];

  filteredCreatures: MobDetails[] = [];
  filteredThinkers: MobDetails[] = [];
  filteredRobots: MobDetails[] = [];

  subTypes = [SubType[SubType.CREATURES], SubType[SubType.ROBOTS], SubType[SubType.THINKERS]];

  displayExtended = false;
  searchText = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.filterBestiary(null);
  }

  showDetails(mob: MobDetails) {
    this.router.navigateByUrl('/bestiary/show/' + mob.name);
  }

  filterBestiary(event: any) {
    this.searchText = (event && event.target) ? event.target.value : this.searchText;
    this.filteredCreatures = this.getFilteredMobs(SubType.CREATURES);
    this.filteredThinkers = this.getFilteredMobs(SubType.THINKERS);
    this.filteredRobots = this.getFilteredMobs(SubType.ROBOTS);
  }

  private getFilteredMobs(subType: SubType) {
    return getBestiaryList(subType)
      .filter(value => {
        if (!this.displayExtended) {
          return value.source === '$OFF$';
        } else {
          return true;
        }
      })
      .filter(value => {
        if (this.searchText.trim() === '') {
          return true;
        }
        return value.name.toLowerCase().includes(this.searchText.toLowerCase())
      })
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

  protected readonly event = event;

  updateSourceFilter(event: any) {
    this.displayExtended = event.detail.checked;
    this.filterBestiary(null);
  }
}
