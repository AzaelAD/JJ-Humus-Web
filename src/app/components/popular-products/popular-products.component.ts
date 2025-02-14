import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  standalone: false,
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent {
  products = [
    { name: "Peppermint Carbo - Vit", description: "Beneficios Es un excelente precursor de fitobentos en los fondos del estanque, los cuales son...", image: "https://www.carbo-vit.com/imagenes/carbovit.png" },
    { name: "Vit-Amin", description: "El Humofosfato de calcio en conjunto con el ión potasio realizan la producción de fitoalexina radi...", image: "https://www.carbo-vit.com/imagenes/Fvit-amin.png" },
    { name: "Xurgén", description: "Nutriente Bio Orgánico concentrado con alto contenido en aminoácidos y péptidos que en conjunto c...", image: "https://www.carbo-vit.com/imagenes/Fxurgen.png" }
  ];
}
