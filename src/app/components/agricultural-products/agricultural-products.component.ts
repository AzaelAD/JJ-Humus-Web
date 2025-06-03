import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-agricultural-products',
  standalone: false,
  templateUrl: './agricultural-products.component.html',
  styleUrl: './agricultural-products.component.css'
})
export class AgriculturalProductsComponent implements OnInit {
  products: { name: string; summary: string; image: string }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products
          .filter(p => p.category === 'Agricola')
          .map(p => ({
            code: p.code,
            name: p.name,
            summary: p.summary,
            image: p.images?.[0] || `${p.name} image`
          }));
      },
      error: err => console.error('Error al obtener productos:', err)
    });
  }
}
