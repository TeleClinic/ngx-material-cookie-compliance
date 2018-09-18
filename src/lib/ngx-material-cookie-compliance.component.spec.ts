import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialCookieComplianceComponent } from './ngx-material-cookie-compliance.component';

describe('NgxMaterialCookieComplianceComponent', () => {
  let component: NgxMaterialCookieComplianceComponent;
  let fixture: ComponentFixture<NgxMaterialCookieComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialCookieComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialCookieComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
