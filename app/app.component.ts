import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>KEG-EKG</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}
        by {{currentKeg.brewery}}
        <ul>
        <li>Style: {{currentKeg.type}}</li>
        <li>Price: <span>$</span>{{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcoholContent}}</li>
        <li>Pints Remaining: {{currentKeg.pintsLeft}}</li>
        </ul>
        <button (click)="sellPint(currentKeg)">Sell a Pint</button>
        <button (click)="editKeg(currentKeg)">Edit!</button>
      </li>
    </ul>
    <label>Enter Keg Name:</label>
      <input [(ngModel)]="selectedKeg.name">
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Drop Top Amber Ale', 'Widmer Brothers', 'Amber', 5, '5.3%'),
    new Keg('Union Pilsner', 'Old Town Brewing', 'Pilsner', 5, '5.0%'),
    new Keg('Blue Dot Double India Pale Ale', 'Hair Of The Dog', 'Pale Ale', 5, '7.0%')
  ];

  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }



  sellPint(currentKeg) {
    currentKeg.pintsLeft = currentKeg.pintsLeft - 1;
  }
}

export class Keg {
  public empty: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brewery: string, public type: string, public price: number, public alcoholContent: string) {}




}
