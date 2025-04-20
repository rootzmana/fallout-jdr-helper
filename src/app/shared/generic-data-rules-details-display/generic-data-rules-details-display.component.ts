import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-generic-data-rules-details-display',
  templateUrl: './generic-data-rules-details-display.component.html',
  styleUrls: ['./generic-data-rules-details-display.component.scss'],
})

export class GenericDataRulesDetailsDisplayComponent implements OnInit {
  @Input() genericItemsRules: any[];

  constructor() {
  }

  ngOnInit() {
  }
}
