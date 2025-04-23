import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ProductsComponent
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }