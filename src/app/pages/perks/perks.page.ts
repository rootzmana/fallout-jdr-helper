import {Component, OnInit} from '@angular/core';
import {Dice} from 'dice-typescript';
import {findMatchingDefinition, findMatchingLoot} from '../random-loot/loot-utils';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../../shared/language.service';
import {Loot, LootDef, LOOTPLACES} from '../../data/loot-table/loot-table-lang';
import {InputCustomEvent, ToastController} from '@ionic/angular';
import {findDataMatching} from '../../shared/data/data-type-matcher';
import {PerkDetail} from '../../data/perks/perks.model';
import {PerksService} from '../../services/perks-service';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.page.html',
  styleUrls: ['./perks.page.scss'],
})
export class PerksPage implements OnInit {

  result: PerkDetail[];
  filteredResult: PerkDetail[];
  s: number=null;
  p: number=null;
  e: number=null;
  c: number=null;
  i: number=null;
  a: number=null;
  l: number=null;
  level: number=null;
  isRobot = false;
  isCompanion = false;
  sources: string[] = ['CRB', 'SETTLERS'];
  searchQuery = '';


  constructor(private perksService: PerksService) {
  }

  ngOnInit() {
    this.result = this.perksService.findByCharacterStats({s:10,p:10,e:10,c:10,i:10,a:10,l:10,level:100,isRobot:false,isCompanion:false,sources:['CRB', 'SETTLERS']});
    this.filteredResult = [];
    this.result.forEach(perk => this.filteredResult.push(Object.assign({}, perk)));
  }

  searchPerks() {
    this.filteredResult = [];
    this.result.forEach(perk => {
      if(perk.name.toLowerCase().includes(this.searchQuery.toLowerCase())){
        this.filteredResult.push(Object.assign({}, perk));
      }
    });

  }

  search() {
    this.searchQuery = '';
    const level = this.level == null ? 1 : this.level;
    this.result = this.perksService.findByCharacterStats({s:this.s,p:this.p,e:this.e,c:this.c,i:this.i,a:this.a,l:this.l,level,isRobot:this.isRobot,isCompanion:this.isCompanion,sources:this.sources});
    this.filteredResult = [];
    this.result.forEach(perk => this.filteredResult.push(Object.assign({}, perk)));
  }

  handleSourcesChange(event: CustomEvent) {
    this.sources = event.detail.value;
    console.log(this);
    this.search();
  }

  reinit() {
    this.s = null;
    this.p = null;
    this.e = null;
    this.c = null;
    this.i = null;
    this.a = null;
    this.l = null;
    this.level = null;
    this.isRobot = false;
    this.isCompanion = false;
    this.sources = ['CRB', 'SETTLERS'];
    this.ngOnInit();
  }
}
