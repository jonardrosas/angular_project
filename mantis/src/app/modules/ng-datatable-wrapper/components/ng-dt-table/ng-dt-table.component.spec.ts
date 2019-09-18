import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDtTableComponent } from './ng-dt-table.component';

describe('NgDtTableComponent', () => {
  let component: NgDtTableComponent;
  let fixture: ComponentFixture<NgDtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
