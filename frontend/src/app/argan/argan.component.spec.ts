import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArganComponent } from './argan.component';

describe('ArganComponent', () => {
  let component: ArganComponent;
  let fixture: ComponentFixture<ArganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
