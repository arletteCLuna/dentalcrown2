import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosUsuarioComponent } from './servicios-usuario.component';

describe('ServiciosUsuarioComponent', () => {
  let component: ServiciosUsuarioComponent;
  let fixture: ComponentFixture<ServiciosUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosUsuarioComponent]
    });
    fixture = TestBed.createComponent(ServiciosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
