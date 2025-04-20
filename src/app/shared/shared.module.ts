import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RichTextDisplayComponent} from './rich-text-display/rich-text-display.component';
import {GenericDataDisplayComponent} from './generic-data-display/generic-data-display.component';
import {IonicModule} from '@ionic/angular';
import {CombatDiceComponent} from './combat-dice-modal/combat-dice/combat-dice.component';
import {CombatDiceModalPage} from './combat-dice-modal/combat-dice-modal.page';
import {FormsModule} from '@angular/forms';
import {ModsDisplayModalComponent} from './mods-display-modal/mods-display-modal.component';
import {GenericDataSearchPipe, GenericTitleSearchPipe} from '../pipes/generic-data-search.pipe';
import {SortByPipe} from '../pipes/sort-by.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { GenericDataRulesDetailsDisplayComponent } from './generic-data-rules-details-display/generic-data-rules-details-display.component';

@NgModule({
  declarations: [
    RichTextDisplayComponent,
    GenericDataDisplayComponent,
    CombatDiceModalPage,
    CombatDiceComponent,
    ModsDisplayModalComponent,
    GenericTitleSearchPipe,
    GenericDataSearchPipe,
    SortByPipe,
    GenericDataRulesDetailsDisplayComponent
  ],
  exports: [
    RichTextDisplayComponent,
    GenericDataDisplayComponent,
    CombatDiceModalPage,
    CombatDiceComponent,
    ModsDisplayModalComponent,
    GenericTitleSearchPipe,
    GenericDataSearchPipe,
    SortByPipe,
    TranslateModule,
    GenericDataRulesDetailsDisplayComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule
  ]
})
export class SharedModule {
}
