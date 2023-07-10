import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbannerComponent } from './bookbanner.component';

describe('BookbannerComponent', () => {
  let component: BookbannerComponent;
  let fixture: ComponentFixture<BookbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
