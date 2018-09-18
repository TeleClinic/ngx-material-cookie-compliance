import { NgModule } from '@angular/core';
import { NgxMaterialCookieComplianceComponent } from './ngx-material-cookie-compliance.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [NgxMaterialCookieComplianceComponent],
    exports: [NgxMaterialCookieComplianceComponent]
})
export class NgxMaterialCookieComplianceModule {
}
