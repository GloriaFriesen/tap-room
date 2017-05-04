import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <div class="form-group">
      <label>Enter Keg Name:</label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Brewery:</label>
      <input #newBrewery class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Type:</label>
      <input #newType class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Price:</label>
      <input #newPrice class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent class="form-control">
    </div>
    <button (click)="submitForm(newName.value, newBrewery.value, newType.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrewery.value=''; newType.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brewery: string, type: string, price: string, alcoholContent: string) {
    var newKegToAdd: Keg = new Keg(name, brewery, type, parseInt(price), alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
