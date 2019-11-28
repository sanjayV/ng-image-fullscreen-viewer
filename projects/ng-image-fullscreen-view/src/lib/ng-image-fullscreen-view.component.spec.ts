import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageFullscreenViewComponent } from './ng-image-fullscreen-view.component';

describe('NgImageFullscreenViewComponent', () => {
  let component: NgImageFullscreenViewComponent;
  let fixture: ComponentFixture<NgImageFullscreenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgImageFullscreenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgImageFullscreenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
