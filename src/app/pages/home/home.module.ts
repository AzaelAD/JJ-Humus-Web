import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { PopularProductsComponent } from '../../components/popular-products/popular-products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { ProductViewComponent } from '../../components/product-view/product-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    PopularProductsComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }