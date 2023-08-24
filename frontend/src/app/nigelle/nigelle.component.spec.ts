import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NigelleComponent } from './nigelle.component';

describe('NigelleComponent', () => {
  let component: NigelleComponent;
  let fixture: ComponentFixture<NigelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NigelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NigelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
