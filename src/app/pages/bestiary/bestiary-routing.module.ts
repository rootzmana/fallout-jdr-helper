import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BestiaryListComponent} from "./bestiary-list/bestiary-list.component";
import {BestiaryShowComponent} from "./bestiary-show/bestiary-show.component";

const routes: Routes = [
  {
    path: 'show/:name',
    component: BestiaryShowComponent,
  },
  {
    path: '',
    component: BestiaryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestiaryRoutingModule {
}
