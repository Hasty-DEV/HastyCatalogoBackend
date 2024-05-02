import MySQL from "./MySQL/MySQL";

class Databases {
  constructor() { }

  public initDB(): void {
    this.connectAll();
  }

  private connectAll(): void {
    MySQL.connect();
  }
}

export default new Databases();