import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoyauxDeDattesComponent } from './noyaux-de-dattes.component';

describe('NoyauxDeDattesComponent', () => {
  let component: NoyauxDeDattesComponent;
  let fixture: ComponentFixture<NoyauxDeDattesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoyauxDeDattesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoyauxDeDattesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
