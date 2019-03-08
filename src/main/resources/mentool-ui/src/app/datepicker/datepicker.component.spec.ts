import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatepickerComponent} from "./datepicker.component";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatNativeDateModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerComponent ],
      imports: [
        MatDatepickerModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit null date when unselected', () => {
    const comp = new DatepickerComponent();
    comp.selectDatePlaceHolder = "test";
    comp.dateEmitter.subscribe(selectedDate => expect(selectedDate).toBe(null));
    comp.unselect();
  });

  it('should emit null date when unselected', () => {
    const comp = new DatepickerComponent();
    comp.selectDatePlaceHolder = "test";
    comp.dateEmitter.subscribe(selectedDate => expect(selectedDate).toBe(null));
    comp.unselect();
  });
});
