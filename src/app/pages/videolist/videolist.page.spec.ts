import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideolistPage } from './videolist.page';

describe('VideolistPage', () => {
  let component: VideolistPage;
  let fixture: ComponentFixture<VideolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
