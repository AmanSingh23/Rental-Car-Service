import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedscrollComponent } from './fixedscroll.component';

describe('FixedscrollComponent', () => {
  let component: FixedscrollComponent;
  let fixture: ComponentFixture<FixedscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
