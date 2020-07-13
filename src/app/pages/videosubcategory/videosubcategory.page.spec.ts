import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosubcategoryPage } from './videosubcategory.page';

describe('VideosubcategoryPage', () => {
  let component: VideosubcategoryPage;
  let fixture: ComponentFixture<VideosubcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosubcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosubcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
