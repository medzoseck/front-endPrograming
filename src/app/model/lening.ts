export class Lening {
  public studentNr: number;
  public startDatum: Date;
  public eindDatum: Date;
  public afgerond: boolean;
  public teLaat: boolean;

  constructor(studentNr: number) {
    this.studentNr = studentNr;
    this.startDatum = null;
    this.eindDatum = null;
    this.afgerond = false;
    this.teLaat = false;
  }

  public setStartDatum(startDatum) {
    this.startDatum = startDatum;
  }

  public setEindDatum(eindDatum) {
    this.eindDatum = eindDatum;
  }
}
