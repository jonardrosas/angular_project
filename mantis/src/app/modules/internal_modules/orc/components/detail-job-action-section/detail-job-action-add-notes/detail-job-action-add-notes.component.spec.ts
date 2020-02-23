import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobActionAddNotesComponent } from './detail-job-action-add-notes.component';

describe('DetailJobActionAddNotesComponent', () => {
  let component: DetailJobActionAddNotesComponent;
  let fixture: ComponentFixture<DetailJobActionAddNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJobActionAddNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobActionAddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
