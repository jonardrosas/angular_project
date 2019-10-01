import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckChangeStatusComponent } from './check-change-status.component';

describe('CheckChangeStatusComponent', () => {
  let component: CheckChangeStatusComponent;
  let fixture: ComponentFixture<CheckChangeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckChangeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
