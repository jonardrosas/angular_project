import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRecommendAsSoaComponent } from './check-recommend-as-soa.component';

describe('CheckRecommendAsSoaComponent', () => {
  let component: CheckRecommendAsSoaComponent;
  let fixture: ComponentFixture<CheckRecommendAsSoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRecommendAsSoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRecommendAsSoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
