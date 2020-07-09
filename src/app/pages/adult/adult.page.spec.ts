import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdultPage } from './adult.page';

describe('AdultPage', () => {
  let component: AdultPage;
  let fixture: ComponentFixture<AdultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
