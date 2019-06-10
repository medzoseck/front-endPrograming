export class LeningProduct {
  public leningId: string;
  public productId: string;
  public aantal: number;

  constructor(leningId: string, productId: string, aantal: number) {
    this.leningId = leningId;
    this.productId = productId;
    this.aantal = aantal;
  }
  /*
  setLeningId(leningId) {
    this.leningId = leningId;
  }

  setProductId(productId) {
    this.productId = productId;
  }

  setAantal(aantal) {
    this.aantal = aantal;
  }
  */
}
