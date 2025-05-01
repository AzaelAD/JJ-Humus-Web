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

  toggleMenu(event: Event) {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(event: Event) {
    this.isMenuOpen = false;
  }

  openSearchForm(event: Event) {
    if (!this.isSearchOpen) {
      this.isSearchOpen = true; // Abre el campo de búsqueda
      this.closeMenu(event); // Cierra el menú si está abierto
    } else {
      this.closeSearchForm(event);
    }
  }

  closeSearchForm(event: Event) {
    // Cierra el campo de búsqueda
    this.isSearchOpen = false;
  }
}