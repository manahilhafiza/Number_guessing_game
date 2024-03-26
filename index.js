import inquirer from "inquirer";
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuesNumber",
        type: "number",
        message: "please guess a number: ",
    },
]);
if (answers.userGuesNumber === randomNumber) {
    console.log("congratulation! you guessed right number. ");
}
else {
    console.log("you guess wrong number");
}
