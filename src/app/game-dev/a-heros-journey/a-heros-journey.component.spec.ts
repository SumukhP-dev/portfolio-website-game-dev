import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AherosjourneyComponent } from './a-heros-journey.component';

describe('AherosjourneyComponent', () => {
  let component: AherosjourneyComponent;
  let fixture: ComponentFixture<AherosjourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AherosjourneyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AherosjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

