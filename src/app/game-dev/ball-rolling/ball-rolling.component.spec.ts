import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallrollingComponent } from './ball-rolling.component';

describe('BallrollingComponent', () => {
  let component: BallrollingComponent;
  let fixture: ComponentFixture<BallrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallrollinggameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BallrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

