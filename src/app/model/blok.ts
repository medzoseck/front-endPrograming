
export class Blok {
  public static blokken = [new Date("11-11-2018"),
    new Date("03-02-2019"),
    new Date("14-04-2019"),
    new Date("23-06-2019"),
    new Date("01-09-2019")];

  public static getBlokDate(s: string): Date {
    switch(s){
      case "Blok A": {
        return this.blokken[0];
      }
      case "Blok B": {
        return this.blokken[1];
      }
      case "Blok C": {
        return this.blokken[2];
      }
      case "Blok D": {
        return this.blokken[3];
      }
      case "Blok E": {
        return this.blokken[4];
      }
      default: {
        return null;
      }
    }
  }
}
