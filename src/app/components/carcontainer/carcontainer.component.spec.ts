import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcontainerComponent } from './carcontainer.component';

describe('CarcontainerComponent', () => {
  let component: CarcontainerComponent;
  let fixture: ComponentFixture<CarcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
