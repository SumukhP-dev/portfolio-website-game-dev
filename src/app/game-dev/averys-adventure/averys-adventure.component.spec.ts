import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverysadventureComponent } from './averys-adventure.component';

describe('AverysadventureComponent', () => {
  let component: AverysadventureComponent;
  let fixture: ComponentFixture<AverysadventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverysadventureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AverysadventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

