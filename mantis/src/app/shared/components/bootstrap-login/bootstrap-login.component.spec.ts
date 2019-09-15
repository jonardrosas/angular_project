import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapLoginComponent } from './bootstrap-login.component';

describe('BootstrapLoginComponent', () => {
  let component: BootstrapLoginComponent;
  let fixture: ComponentFixture<BootstrapLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
