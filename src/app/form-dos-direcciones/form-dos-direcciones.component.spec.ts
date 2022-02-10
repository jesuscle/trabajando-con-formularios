import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDosDireccionesComponent } from './form-dos-direcciones.component';

describe('FormDosDireccionesComponent', () => {
  let component: FormDosDireccionesComponent;
  let fixture: ComponentFixture<FormDosDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDosDireccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDosDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
