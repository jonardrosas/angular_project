import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDetailReportComponent } from './check-detail-report.component';

describe('CheckDetailReportComponent', () => {
  let component: CheckDetailReportComponent;
  let fixture: ComponentFixture<CheckDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
