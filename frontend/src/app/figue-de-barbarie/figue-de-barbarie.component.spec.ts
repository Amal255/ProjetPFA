import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigueDeBarbarieComponent } from './figue-de-barbarie.component';

describe('FigueDeBarbarieComponent', () => {
  let component: FigueDeBarbarieComponent;
  let fixture: ComponentFixture<FigueDeBarbarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigueDeBarbarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigueDeBarbarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
