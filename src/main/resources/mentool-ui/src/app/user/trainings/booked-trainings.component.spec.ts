import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTrainingsComponent } from './booked-trainings.component';

describe('BookedTrainingsComponent', () => {
  let component: BookedTrainingsComponent;
  let fixture: ComponentFixture<BookedTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
