// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "Motivation",
        message: "What is the motivation of the project?",
    },
    {
        type: "input",
        name: "Installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the project's usage?",
    },
    {
        type: "list",
        name: "License",
        message: "Chose the appropriate license for this project:",
        choices: [
            "Apache",
            "Academic",
            "Boost",
            "BSD",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "Testing",
        message: "How was your project tested?",
    },
    {
        type: "input",
        name: "Issues",
        message: "How should issues be reported?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please enter your GitHub username:",
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      console.log(data);
      writeToFile("README.md", markdown(data));
    });
  }

// Function call to initialize app
init();
