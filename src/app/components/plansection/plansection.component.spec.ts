import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansectionComponent } from './plansection.component';

describe('PlansectionComponent', () => {
  let component: PlansectionComponent;
  let fixture: ComponentFixture<PlansectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
