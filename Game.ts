import { Enemy } from "./Enemy";
import { Player } from "./Player";

let enemy = new Enemy("Colossus", 100, 20);
let hero = new Player("Xenon the Thunder", 150, 50);

enemy.attack(hero);
hero.heal();
hero.attack(enemy);
hero.attack(enemy);
