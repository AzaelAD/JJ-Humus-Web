import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false; // Controla si el campo de búsqueda está abierto

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false; // Cierra el menú al seleccionar una opción
  }

  openSearchForm() {
    this.isSearchOpen = true; // Abre el campo de búsqueda
    this.closeMenu(); // Cierra el menú si está abierto
  }

  closeSearchForm() {
    this.isSearchOpen = false; // Cierra el campo de búsqueda
  }
}