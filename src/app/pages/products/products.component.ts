import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categoriaSeleccionada: string = 'agricola'; // Valor por defecto

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
