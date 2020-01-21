import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewStoriesPage } from './view-stories.page';

describe('ViewStoriesPage', () => {
  let component: ViewStoriesPage;
  let fixture: ComponentFixture<ViewStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
