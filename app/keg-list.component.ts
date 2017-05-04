import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component ({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}}
      by {{currentKeg.brewery}}
      <ul>
      <li>Style: {{currentKeg.type}}</li>
      <li>Price: <span>$</span>{{currentKeg.price}}</li>
      <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
      <li>Pints Remaining: {{currentKeg.pintsLeft}}</li>
      <button (click)="sellPintButtonClicked(currentKeg)">Sell a Pint</button>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </ul>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSellPintSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPintButtonClicked(kegToSell: Keg) {
    this.clickSellPintSender.emit(kegToSell);
  }
}
