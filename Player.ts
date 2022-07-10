import { Enemy } from "./Enemy";

export class Player {
  public name: string;
  public health: number;
  public attackPoint: number;

  constructor(name: string, health: number, attackPoint: number) {
    this.name = name;
    this.health = health;
    this.attackPoint = attackPoint;
  }

  public getDamage(enemy: Enemy, damagePoint: number): void {
    this.health -= damagePoint;
    if (this.health <= 0) {
      console.log(this.name + " killed by " + enemy.name);
    } else {
      console.log(this.name + " damaged by " + enemy.name);
      console.log("Current health: " + this.health.toString());
    }
  }

  public attack(enemy: Enemy) {
    enemy.getDamage(this, this.attackPoint);
  }

  public heal(): void {
    this.health += 20;
    console.log(this.name + " healed. Health: " + this.health.toString());
  }
}
