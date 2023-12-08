import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthImgComponent } from './auth-img.component';

describe('AuthImgComponent', () => {
  let component: AuthImgComponent;
  let fixture: ComponentFixture<AuthImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthImgComponent]
    });
    fixture = TestBed.createComponent(AuthImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
