import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';
import { MexicoComponent } from '../../components/maps/mexico/mexico.component';
import { SharedModule } from '../..//shared.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    CompanyInfoComponent,
    MexicoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    AboutUsComponent
  ],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }