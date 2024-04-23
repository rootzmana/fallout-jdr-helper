import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {BestiaryRoutingModule} from "./bestiary-routing.module";
import {BestiaryListComponent} from "./bestiary-list/bestiary-list.component";
import {BestiaryShowComponent} from "./bestiary-show/bestiary-show.component";


@NgModule({
  declarations: [BestiaryListComponent, BestiaryShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestiaryRoutingModule,
    SharedModule
  ]
})
export class BestiaryModule {
}
