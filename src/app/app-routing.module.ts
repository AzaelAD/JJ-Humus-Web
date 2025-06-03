import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { CrudProductsComponent } from './pages/crud-products/crud-products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product-info/:id', component: ProductInfoComponent },
  { path: 'crud-products', component: CrudProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
