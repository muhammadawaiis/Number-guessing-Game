import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userRandomNumber",
        type: "number",
        massage: "Enter Any Random Number"
    }]);
if (answer.userRandomNumber == randomNumber) {
    console.log("Congratulation You Guessed it Right");
}
else {
    console.log(`Sorry Your Number was not Correct `);
}
;
