import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <div class="form-group">
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div class="form-group">
      <label>Enter Brewery:</label>
      <input [(ngModel)]="childSelectedKeg.brewery">
    </div>
    <div class="form-group">
      <label>Enter Style:</label>
      <input [(ngModel)]="childSelectedKeg.type">
    </div>
    <div class="form-group">
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
    </div>
    <div class="form-group">
      <label>Enter Alcohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
    </div>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
