#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.92,
    INR: 83.22,
    PKR: 277.80,
    AED: 3.67
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "AED"]
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EURO", "INR", "PKR", "AED"]
    },
    {
        name: "amount",
        message: "Enter your amount currency",
        type: "number",
    }
]);
let fromamount = currency[user_answer.from]; // exchange rate
let toamount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseamount = amount / fromamount; // USD base currency // 4
let convertedamount = baseamount * toamount;
console.log(convertedamount);
