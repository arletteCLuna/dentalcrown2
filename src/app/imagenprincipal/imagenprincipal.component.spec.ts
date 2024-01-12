import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenprincipalComponent } from './imagenprincipal.component';

describe('ImagenprincipalComponent', () => {
  let component: ImagenprincipalComponent;
  let fixture: ComponentFixture<ImagenprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenprincipalComponent]
    });
    fixture = TestBed.createComponent(ImagenprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
