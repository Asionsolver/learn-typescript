class Player{
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }

    
    play(){
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}

const ashis = new Player('ashis', 40, "Bangladesh")

const players: Player[] = [];

const asis = new Player('asis', 20, "Bangladesh")
const asion = new Player('asion',  26, 'Bangladesh')

players.push(ashis, asis,asion);

console.log(players)