import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>KEG-EKG</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Drop Top Amber Ale', 'Widmer Brothers', 'Amber', 5, '5.3%'),
    new Keg('Union Pilsner', 'Old Town Brewing', 'Pilsner', 5, '5.0%'),
    new Keg('Blue Dot Double India Pale Ale', 'Hair Of The Dog', 'Pale Ale', 5, '7.0%')
  ];
}

export class Keg {
  public empty: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brewery: string, public type: string, public price: number, public alcoholContent: string) {}


}
