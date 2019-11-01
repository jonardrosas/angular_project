import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcWorklistComponent } from './orc-worklist.component';

describe('OrcWorklistComponent', () => {
  let component: OrcWorklistComponent;
  let fixture: ComponentFixture<OrcWorklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcWorklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
