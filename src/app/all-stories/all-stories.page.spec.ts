import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllStoriesPage } from './all-stories.page';

describe('AllStoriesPage', () => {
  let component: AllStoriesPage;
  let fixture: ComponentFixture<AllStoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllStoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
