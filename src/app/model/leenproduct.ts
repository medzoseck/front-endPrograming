
export class Leenproduct {
  public leenproductId: number;
  public uitgeleend: boolean;
  public naam: string;
  public beschrijving: string;
  public functioneel: boolean;

  constructor(leenproductId: number, naam: string, beschrijving: string) {
    this.leenproductId = leenproductId;
    this.uitgeleend = false;
    this.naam = naam;
    this.beschrijving = beschrijving;
    this.functioneel = true;
  }
}
