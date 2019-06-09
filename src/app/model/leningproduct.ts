export class LeningProduct {
  public leningId: string;
  public productId: string;
  public aantal: number;

  constructor(productId: string, aantal: number) {
    this.leningId = null;
    this.productId = productId;
    this.aantal = aantal;
  }

  setLeningId(leningId) {
    this.leningId = leningId;
  }
}
