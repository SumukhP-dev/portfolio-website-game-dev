import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donut3dBlenderArtComponent } from './donut-3d-blender-art.component';

describe('Donut3dBlenderArtComponent', () => {
  let component: Donut3dBlenderArtComponent;
  let fixture: ComponentFixture<Donut3dBlenderArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donut3dBlenderArtComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Donut3dBlenderArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

