import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {GenericDataRulesDetailsDisplayComponent} from './generic-data-rules-details-display.component';

describe('GenericDataRulesDetailsDisplayComponent', () => {
  let component: GenericDataRulesDetailsDisplayComponent;
  let fixture: ComponentFixture<GenericDataRulesDetailsDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GenericDataRulesDetailsDisplayComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericDataRulesDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
