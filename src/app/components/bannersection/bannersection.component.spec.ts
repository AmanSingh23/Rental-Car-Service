import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersectionComponent } from './bannersection.component';

describe('BannersectionComponent', () => {
  let component: BannersectionComponent;
  let fixture: ComponentFixture<BannersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannersectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
