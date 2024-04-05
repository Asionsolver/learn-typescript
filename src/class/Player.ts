export class Player {
  constructor(
    private name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    return `${this.name} from ${this.country} is playing and his age is ${this.age}!`;
  }
}
