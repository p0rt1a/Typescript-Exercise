"use strict";
exports.__esModule = true;
exports.Enemy = void 0;
var Enemy = /** @class */ (function () {
    function Enemy(name, health, attackPoint) {
        this.name = name;
        this.health = health;
        this.attackPoint = attackPoint;
    }
    Enemy.prototype.getDamage = function (player, damagePoint) {
        this.health -= damagePoint;
        if (this.health <= 0) {
            console.log(this.name + " killed by " + player.name);
        }
        else {
            console.log(this.name + " damaged by " + player.name);
            console.log("Current health: " + this.health.toString());
        }
    };
    Enemy.prototype.attack = function (player) {
        player.getDamage(this, this.attackPoint);
    };
    return Enemy;
}());
exports.Enemy = Enemy;
