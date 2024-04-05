// class Player{
//     private name: string;
//     private age: number;
//     readonly country: string;

//     constructor(n: string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

    
//     play(){
//         return (`${this.name} from ${this.country} is playing and his age is ${this.age}!`);
//     }
// }

// When use access modifiers. So the shortcut way you can wirte less code
class Player{
    constructor( 
        private name: string,
        private age: number,
        readonly country: string
    ){}

    
    play(){
        return (`${this.name} from ${this.country} is playing and his age is ${this.age}!`);
    }
}

const ashis = new Player('ashis', 40, "Bangladesh")
const asis = new Player('asis', 20, "Bangladesh")
const asion = new Player('asion',  26, 'Bangladesh')

const players: Player[] = [];
console.log(ashis.country)


players.push(ashis, asis,asion);

console.log(ashis.play())
