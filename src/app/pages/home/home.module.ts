import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { PopularProductsComponent } from '../../components/popular-products/popular-products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    PopularProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }