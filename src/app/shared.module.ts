// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
  declarations: [ContactUsComponent, ProductViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContactUsComponent,ProductViewComponent]
})
export class SharedModule { }
