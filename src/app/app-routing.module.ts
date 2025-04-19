import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AquacultureProductsComponent } from './pages/products/aquaculture-products/aquaculture-products.component'; 
// import { AquacultureProductsComponent } from './pages/products/aquaculture/aquacultureProducts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/aquaculture', component: AquacultureProductsComponent },



  // // Definir múltiples rutas para el uso de lista de opciones
  // {  
  //   path: 'products', component: ProductsComponent,
  //   children: [ // Lista de rutas
  //     { path: '', component: ProductsComponent }, // Camino por defecto al presionar Productos
  //     // { path: '', component: AgricolasComponent },
  //     { path: '', component: AquacultureProductsComponent },
  //   ]
  // },// Products


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
