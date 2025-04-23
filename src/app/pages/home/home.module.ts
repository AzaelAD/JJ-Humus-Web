import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { PopularProductsComponent } from '../../components/popular-products/popular-products.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@NgModule({

  declarations: [
    HomeComponent,
    PresentationComponent,
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