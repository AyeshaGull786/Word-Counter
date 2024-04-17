#! /usr/bin/env node
//import the 'inquirer'
import inquirer from "inquirer";
//declare a constant 'answer' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.split(" ");
//print the array of words to console
console.log(words);
//print the word count
console.log(`Your sentence word count is ${words.length}`);
