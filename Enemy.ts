import { Player } from "./Player";

export class Enemy {
  public name: string;
  public health: number;
  public attackPoint: number;

  constructor(name: string, health: number, attackPoint: number) {
    this.name = name;
    this.health = health;
    this.attackPoint = attackPoint;
  }

  public getDamage(player: Player, damagePoint: number): void {
    this.health -= damagePoint;
    if (this.health <= 0) {
      console.log(this.name + " killed by " + player.name);
    } else {
      console.log(this.name + " damaged by " + player.name);
      console.log("Current health: " + this.health.toString());
    }
  }

  public attack(player: Player) {
    player.getDamage(this, this.attackPoint);
  }
}
