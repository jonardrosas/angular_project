import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDetailPopupComponent } from './check-detail-popup.component';

describe('CheckDetailPopupComponent', () => {
  let component: CheckDetailPopupComponent;
  let fixture: ComponentFixture<CheckDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
