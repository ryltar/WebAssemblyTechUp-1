export class Company {

    public name: string;
  
    constructor() {
        this.name = "";
    }
  
    public getName(): string {
      return this.name;
    }
  
    public setName(name: string): void {
      this.name = name;
    }
  
}
  