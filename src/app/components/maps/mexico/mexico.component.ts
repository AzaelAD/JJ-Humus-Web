import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-mexico',
  template: `<div id="map"></div>`,
  standalone: false,
  templateUrl: './mexico.component.html',
  styleUrl: './mexico.component.css'
})
export class MexicoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Inicializar después de que el DOM se haya renderizado
    if (window['simplemaps_countrymap']) {
      window['simplemaps_countrymap'].load();
    }
  }
}
