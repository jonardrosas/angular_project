import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStatisticsComponent } from './error-statistics.component';

describe('ErrorStatisticsComponent', () => {
  let component: ErrorStatisticsComponent;
  let fixture: ComponentFixture<ErrorStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
