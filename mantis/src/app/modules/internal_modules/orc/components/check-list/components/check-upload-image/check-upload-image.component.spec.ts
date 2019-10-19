import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUploadImageComponent } from './check-upload-image.component';

describe('CheckUploadImageComponent', () => {
  let component: CheckUploadImageComponent;
  let fixture: ComponentFixture<CheckUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
