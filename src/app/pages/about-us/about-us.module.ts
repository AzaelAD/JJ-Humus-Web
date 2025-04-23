import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    CompanyInfoComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    AboutUsComponent
  ],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }