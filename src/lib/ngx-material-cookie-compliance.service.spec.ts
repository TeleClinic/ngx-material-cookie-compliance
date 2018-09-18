import { TestBed } from '@angular/core/testing';

import { NgxMaterialCookieComplianceService } from './ngx-material-cookie-compliance.service';

describe('NgxMaterialCookieComplianceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialCookieComplianceService = TestBed.get(NgxMaterialCookieComplianceService);
    expect(service).toBeTruthy();
  });
});
