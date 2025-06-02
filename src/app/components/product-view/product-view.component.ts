import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  standalone: false,
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  @Input() product: any;
}
