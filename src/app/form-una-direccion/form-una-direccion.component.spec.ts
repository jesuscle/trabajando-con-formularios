import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUnaDireccionComponent } from './form-una-direccion.component';

describe('FormUnaDireccionComponent', () => {
  let component: FormUnaDireccionComponent;
  let fixture: ComponentFixture<FormUnaDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUnaDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUnaDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
