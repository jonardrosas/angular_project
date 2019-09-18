import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationViewerComponent } from './violation-viewer.component';

describe('ViolationViewerComponent', () => {
  let component: ViolationViewerComponent;
  let fixture: ComponentFixture<ViolationViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolationViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
