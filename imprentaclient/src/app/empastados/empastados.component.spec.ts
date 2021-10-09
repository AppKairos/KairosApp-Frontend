import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpastadosComponent } from './empastados.component';

describe('EmpastadosComponent', () => {
  let component: EmpastadosComponent;
  let fixture: ComponentFixture<EmpastadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpastadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
