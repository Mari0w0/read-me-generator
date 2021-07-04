// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [    {
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},
{
  type: 'input',
  name: 'location',
  message: 'Where are you from?',
},
{
  type: 'input',
  name: 'hobby',
  message: 'What is your favorite hobby?',
},
{
  type: 'input',
  name: 'food',
  message: 'What is your favorite food?',
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your GitHub Username',
},
{
  type: 'input',
  name: 'linkedin',
  message: 'Enter your LinkedIn URL.',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('./output/readme.md', htmlPageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const mdPageContent = generatemarkdown(answers);

  });
}

// Function call to initialize app
init();