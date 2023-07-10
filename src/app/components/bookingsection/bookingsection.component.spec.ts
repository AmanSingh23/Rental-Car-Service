import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsectionComponent } from './bookingsection.component';

describe('BookingsectionComponent', () => {
  let component: BookingsectionComponent;
  let fixture: ComponentFixture<BookingsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
