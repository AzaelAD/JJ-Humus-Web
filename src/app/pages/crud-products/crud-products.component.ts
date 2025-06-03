import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-products',
  standalone: false,
  templateUrl: './crud-products.component.html',
  styleUrl: './crud-products.component.css'
})
export class CrudProductsComponent {
  products: Product[] = [];
  productForm: FormGroup;
  isEditMode = false;
  currentProductId: string | null = null;
  categories = ['Agricola', 'Acuacultura'];

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      code: ['', [Validators.required, Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      brand: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      summary: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      specifications: ['', [Validators.required, Validators.minLength(10)]],
      benefits: ['', [Validators.required, Validators.minLength(10)]],
      composition: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['Agricola', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      images: [[]]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        if(error.status === 404) {
          console.warn('No products found, initializing with an empty array.');
          this.products = [];
      }
      console.error('Error loading products:', error);
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const productData = this.productForm.value;

    if (this.isEditMode && this.currentProductId) {
      this.productService.updateProduct(productData.code, productData).subscribe(
        () => {
          this.loadProducts();
          this.resetForm();
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      this.productService.createProduct(productData).subscribe(
        () => {
          this.loadProducts();
          this.resetForm();
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }

  onEdit(product: Product): void {
    this.isEditMode = true;
    this.currentProductId = product._id || null;
    this.productForm.patchValue({
      code: product.code,
      name: product.name,
      brand: product.brand,
      summary: product.summary,
      specifications: product.specifications,
      benefits: product.benefits,
      composition: product.composition,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      images: product.images
    });
  }

  onDelete(code: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(code).subscribe(
        () => {
          this.loadProducts();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.productForm.reset({
      price: 0,
      category: 'Agricola',
      stock: 0,
      images: []
    });
    this.isEditMode = false;
    this.currentProductId = null;
  }

  addImage(): void {
    const images = this.productForm.get('images')?.value || [];
    const newImage = prompt('Ingresa la URL de la imagen:');
    if (newImage) {
      images.push(newImage);
      this.productForm.get('images')?.setValue(images);
    }
  }

  removeImage(index: number): void {
    const images = this.productForm.get('images')?.value || [];
    images.splice(index, 1);
    this.productForm.get('images')?.setValue(images);
  }
}
