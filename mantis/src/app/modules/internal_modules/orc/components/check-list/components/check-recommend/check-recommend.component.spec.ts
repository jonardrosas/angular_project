import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRecommendComponent } from './check-recommend.component';

describe('CheckRecommendComponent', () => {
  let component: CheckRecommendComponent;
  let fixture: ComponentFixture<CheckRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
