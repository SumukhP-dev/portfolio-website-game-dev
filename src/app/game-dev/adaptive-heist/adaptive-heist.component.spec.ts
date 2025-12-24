import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveheistComponent } from './adaptive-heist.component';

describe('AdaptiveheistComponent', () => {
  let component: AdaptiveheistComponent;
  let fixture: ComponentFixture<AdaptiveheistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaptiveheistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdaptiveheistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

