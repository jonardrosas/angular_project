import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReleaseForMaskwriteComponent } from './detail-release-for-maskwrite.component';

describe('DetailReleaseForMaskwriteComponent', () => {
  let component: DetailReleaseForMaskwriteComponent;
  let fixture: ComponentFixture<DetailReleaseForMaskwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReleaseForMaskwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReleaseForMaskwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
