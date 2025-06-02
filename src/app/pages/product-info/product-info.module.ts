import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductInfoComponent } from './product-info.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { SharedModule } from '../..//shared.module';


@NgModule({
  declarations: [
    ProductInfoComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductInfoModule { }
