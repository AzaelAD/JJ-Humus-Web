import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-acuaculture-products',
  standalone: false,
  templateUrl: './acuaculture-products.component.html',
  styleUrl: './acuaculture-products.component.css'
})
export class AcuacultureProductsComponent implements OnInit {
  products: { name: string; summary: string; image: string }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products
          .filter(p => p.category === 'Acuacultura')
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
