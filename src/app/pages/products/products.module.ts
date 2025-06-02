import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AgriculturalProductsComponent } from '../../components/agricultural-products/agricultural-products.component';
import { AcuacultureProductsComponent } from '../../components/acuaculture-products/acuaculture-products.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    AgriculturalProductsComponent,
    AcuacultureProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }