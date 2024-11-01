import { Player } from "./class/Player.js";

const ashis = new Player("ashis", 40, "Bangladesh");
const asis = new Player("asis", 20, "Bangladesh");
const asion = new Player("asion", 26, "Bangladesh");

const players: Player[] = [];
console.log(ashis.country);

players.push(ashis, asis, asion);

console.log(ashis.play());
