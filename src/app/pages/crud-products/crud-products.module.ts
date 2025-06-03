import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudProductsComponent } from './crud-products.component';



@NgModule({
  declarations: [
    CrudProductsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
      ReactiveFormsModule,
  ],
  exports: [
    CrudProductsComponent
  ],
  bootstrap: [CrudProductsComponent]
})
export class CrudProductsModule { }