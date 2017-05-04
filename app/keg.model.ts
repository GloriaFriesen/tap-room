export class Keg {
  public empty: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brewery: string, public type: string, public price: number, public alcoholContent: string) {}
}
