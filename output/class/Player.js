export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        return `${this.name} from ${this.country} is playing and his age is ${this.age}!`;
    }
}
