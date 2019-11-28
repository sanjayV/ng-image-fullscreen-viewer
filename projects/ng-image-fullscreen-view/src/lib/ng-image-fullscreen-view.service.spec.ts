import { TestBed } from '@angular/core/testing';

import { NgImageFullscreenViewService } from './ng-image-fullscreen-view.service';

describe('NgImageFullscreenViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgImageFullscreenViewService = TestBed.get(NgImageFullscreenViewService);
    expect(service).toBeTruthy();
  });
});
