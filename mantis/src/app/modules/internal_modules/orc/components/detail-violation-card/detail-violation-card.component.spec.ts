import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViolationCardComponent } from './detail-violation-card.component';

describe('DetailViolationCardComponent', () => {
  let component: DetailViolationCardComponent;
  let fixture: ComponentFixture<DetailViolationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViolationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViolationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
