import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent {

  constructor(public dialogRef: MatDialogRef<SearchModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}