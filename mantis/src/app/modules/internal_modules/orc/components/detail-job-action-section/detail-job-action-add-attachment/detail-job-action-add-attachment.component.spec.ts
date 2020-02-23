import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobActionAddAttachmentComponent } from './detail-job-action-add-attachment.component';

describe('DetailJobActionAddAttachmentComponent', () => {
  let component: DetailJobActionAddAttachmentComponent;
  let fixture: ComponentFixture<DetailJobActionAddAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJobActionAddAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobActionAddAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
