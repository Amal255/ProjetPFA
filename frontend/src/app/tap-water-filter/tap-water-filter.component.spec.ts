import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapWaterFilterComponent } from './tap-water-filter.component';

describe('TapWaterFilterComponent', () => {
  let component: TapWaterFilterComponent;
  let fixture: ComponentFixture<TapWaterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapWaterFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapWaterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
