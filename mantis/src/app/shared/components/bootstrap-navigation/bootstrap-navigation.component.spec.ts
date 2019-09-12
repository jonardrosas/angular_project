import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapNavigationComponent } from './boostrap-navigation.component';

describe('BoostrapNavigationComponent', () => {
  let component: BoostrapNavigationComponent;
  let fixture: ComponentFixture<BoostrapNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostrapNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
