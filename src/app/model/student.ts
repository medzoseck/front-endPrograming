
export class Student {
  public studentNr: number;
  public voornaam: string;
  public achternaam: string;
  public huMail: string;
  public mobielNummer: string;

  constructor(studentNr: number, voornaam: string, achternaam: string, huMail: string, mobielNummer: string) {
    this.studentNr = studentNr;
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.huMail = huMail;
    this.mobielNummer = mobielNummer;
  }
}
