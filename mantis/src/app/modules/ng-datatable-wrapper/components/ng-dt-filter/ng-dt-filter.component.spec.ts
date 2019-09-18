import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDtFilterComponent } from './ng-dt-filter.component';

describe('NgDtFilterComponent', () => {
  let component: NgDtFilterComponent;
  let fixture: ComponentFixture<NgDtFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDtFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
