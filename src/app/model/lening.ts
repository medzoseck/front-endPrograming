import { Blok } from './blok';

export class Lening {
  public leningId: number;
  public startDatum: Date;
  public eindDatum: Date;
  public afgerond: boolean;
  public teLaat: boolean;

  constructor(leningId: number, startDatum: Date, eindDatum: Date) {
    this.leningId = leningId;
    this.startDatum = new Date();
    this.eindDatum = eindDatum;
    this.afgerond = false;
    this.teLaat = false;
  }

  public setEindDatum(blok: string) {
    this.eindDatum = Blok.getBlokDate(blok);
  }
}
