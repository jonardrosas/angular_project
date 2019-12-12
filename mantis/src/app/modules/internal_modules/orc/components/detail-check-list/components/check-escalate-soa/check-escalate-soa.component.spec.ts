import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEscalateSoaComponent } from './check-escalate-soa.component';

describe('CheckEscalateSoaComponent', () => {
  let component: CheckEscalateSoaComponent;
  let fixture: ComponentFixture<CheckEscalateSoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEscalateSoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEscalateSoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
