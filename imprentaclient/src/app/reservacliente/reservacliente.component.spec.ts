import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaclienteComponent } from './reservacliente.component';

describe('ReservaclienteComponent', () => {
  let component: ReservaclienteComponent;
  let fixture: ComponentFixture<ReservaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
