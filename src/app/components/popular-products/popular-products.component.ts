import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  standalone: false,
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent {
  products = [
    {code: "2189378219", name: "Carbo - Vit", summary: "Carbo-Vit es un extracto líquido de humus enriquecido con nutrientes orgánicos y MOBAS, que mejora la nutrición, el desarrollo radicular y la actividad celular de las plantas. Compatible con agroquímicos y apto para aplicación al suelo y foliar.", image: "https://www.carbo-vit.com/imagenes/carbovit.png" },
    {code: "2189666220", name: "Vit-Amin", summary: "VIT-AMIN es un nutriente orgánico que fortalece las defensas de las plantas y previene enfermedades de forma natural. Aplicable al suelo o foliar en todo tipo de cultivos.", image: "https://www.carbo-vit.com/imagenes/Fvit-amin.png" },
    {code: "21896230", name: "Xurgén", summary: "XURGEN es un bioestimulante orgánico con MOBAS, Nitrógeno y Fósforo que actúa como arrancador y enraizador. Estimula la formación de membranas celulares, fortalece las raíces y mejora la calidad de la planta, con acción preventiva frente a hongos y patógenos.", image: "https://www.carbo-vit.com/imagenes/Fxurgen.png" }
  ];
}
