#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t\tWelcome to GM Musani - Adventure Game"));
console.log("*".repeat(70));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
}
;
let player = await input({ message: "Please Enter Your Name: " });
let opponent = await select({
    message: "Please Select Your Opponent: ",
    choices: [
        { name: "Skeleton", value: "Skeleton" },
        { name: "Alien", value: "Alien" },
        { name: "Zombie", value: "Zombie" }
    ]
});
let p1 = new Player(player);
let o1 = new Opponent(opponent);
do {
    // Skeleton
    if (opponent === "Skeleton") {
        let ask = await select({
            message: "what would you like to do?",
            choices: [
                { name: "Attack", value: "Attack" },
                { name: "Drink Portion", value: "Drink Portion" },
                { name: "Run for your life...", value: "Run for your life..." }
            ]
        });
        if (ask === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
                ;
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        else {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
        ;
    }
    // Alien
    else if (opponent === "Alien") {
        let ask = await select({
            message: "what would you like to do?",
            choices: [
                { name: "Attack", value: "Attack" },
                { name: "Drink Portion", value: "Drink Portion" },
                { name: "Run for your life...", value: "Run for your life..." }
            ]
        });
        if (ask === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
                ;
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        else {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
        ;
    }
    // Zombie
    else {
        let ask = await select({
            message: "what would you like to do?",
            choices: [
                { name: "Attack", value: "Attack" },
                { name: "Drink Portion", value: "Drink Portion" },
                { name: "Run for your life...", value: "Run for your life..." }
            ]
        });
        if (ask === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
                ;
            }
            else {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        else {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
        ;
    }
} while (true);
