"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, health, attackPoint) {
        this.name = name;
        this.health = health;
        this.attackPoint = attackPoint;
    }
    Player.prototype.getDamage = function (enemy, damagePoint) {
        this.health -= damagePoint;
        if (this.health <= 0) {
            console.log(this.name + " killed by " + enemy.name);
        }
        else {
            console.log(this.name + " damaged by " + enemy.name);
            console.log("Current health: " + this.health.toString());
        }
    };
    Player.prototype.attack = function (enemy) {
        enemy.getDamage(this, this.attackPoint);
    };
    Player.prototype.heal = function () {
        this.health += 20;
        console.log(this.name + " healed. Health: " + this.health.toString());
    };
    return Player;
}());
exports.Player = Player;
