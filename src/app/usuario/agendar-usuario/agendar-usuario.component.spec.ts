import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarUsuarioComponent } from './agendar-usuario.component';

describe('AgendarUsuarioComponent', () => {
  let component: AgendarUsuarioComponent;
  let fixture: ComponentFixture<AgendarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarUsuarioComponent]
    });
    fixture = TestBed.createComponent(AgendarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
