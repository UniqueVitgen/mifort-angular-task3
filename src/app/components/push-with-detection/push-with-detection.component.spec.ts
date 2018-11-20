import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushWithDetectionComponent } from './push-with-detection.component';

describe('PushWithDetectionComponent', () => {
  let component: PushWithDetectionComponent;
  let fixture: ComponentFixture<PushWithDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushWithDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushWithDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
