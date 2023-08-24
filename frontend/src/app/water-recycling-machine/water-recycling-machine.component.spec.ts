import { ComponentFixture, TestBed } from '@angular/core/testing';


import { WaterRecyclingMachineComponent } from './water-recycling-machine.component';

describe('WaterRecyclingMachineComponent', () => {
  let component: WaterRecyclingMachineComponent;
  let fixture: ComponentFixture<WaterRecyclingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterRecyclingMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterRecyclingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
