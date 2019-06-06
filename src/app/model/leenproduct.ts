
export class Leenproduct {
  public leenproductId: number;
  public uitgeleend: boolean;
  public naam: string;
  public beschrijving: string;
  public functioneel: boolean;
  public aantal: number;

  constructor(leenproductId: number, naam: string, beschrijving: string, aantal:number = 0) {
    this.leenproductId = leenproductId;
    this.uitgeleend = false;
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.functioneel = true;
    this.aantal = aantal;
  }
}
