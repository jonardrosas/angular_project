import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksTableComponent } from './checks-table.component';

describe('ChecksTableComponent', () => {
  let component: ChecksTableComponent;
  let fixture: ComponentFixture<ChecksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
