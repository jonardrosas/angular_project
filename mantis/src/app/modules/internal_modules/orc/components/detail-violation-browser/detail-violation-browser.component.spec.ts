import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViolationBrowserComponent } from './detail-violation-browser.component';

describe('DetailViolationBrowserComponent', () => {
  let component: DetailViolationBrowserComponent;
  let fixture: ComponentFixture<DetailViolationBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViolationBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViolationBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
