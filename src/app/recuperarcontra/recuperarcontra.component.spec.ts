import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarcontraComponent } from './recuperarcontra.component';

describe('RecuperarcontraComponent', () => {
  let component: RecuperarcontraComponent;
  let fixture: ComponentFixture<RecuperarcontraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarcontraComponent]
    });
    fixture = TestBed.createComponent(RecuperarcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
