import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-info',
  standalone: false,
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
  product?: Product;
  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProduct(id).subscribe({
        next: (prod) => this.product = prod,
        error: (err) => console.error('Error al cargar producto', err)
      });
    }
  }
}
