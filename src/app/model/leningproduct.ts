export class LeningProduct {
  public leningId: string;
  public productId: string;
  public aantal: number;

  constructor(leningId: string, productId: string, aantal: number) {
    this.leningId = leningId;
    this.productId = productId;
    this.aantal = aantal;
  }
}
