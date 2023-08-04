import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BestiaryListComponent} from "./bestiary-list/bestiary-list.component";
import {SubType} from "../../data/bestiary/fr/bestiary.model";
import {BestiaryShowComponent} from "./bestiary-show/bestiary-show.component";

const routes: Routes = [
  {
    path: 'show/:name',
    component: BestiaryShowComponent,
  },
  {
    path: 'animals',
    component: BestiaryListComponent,
    data: {subType: SubType.ANIMALS}
  },
  {
    path: 'bos',
    component: BestiaryListComponent,
    data: {subType: SubType.BOS}
  },
  {
    path: 'others',
    component: BestiaryListComponent,
    data: {subType: SubType.OTHERS}
  },
  {
    path: 'raiders',
    component: BestiaryListComponent,
    data: {subType: SubType.RAIDERS}
  },
  {
    path: 'supermutants',
    component: BestiaryListComponent,
    data: {subType: SubType.SUPERMUTANTS}
  },
  {
    path: 'humanoids',
    component: BestiaryListComponent,
    data: {subType: SubType.HUMANOIDS}
  },
  {
    path: 'synths',
    component: BestiaryListComponent,
    data: {subType: SubType.SYNTHS}
  },
  {
    path: 'turrets',
    component: BestiaryListComponent,
    data: {subType: SubType.TURRETS}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestiaryRoutingModule {
}
