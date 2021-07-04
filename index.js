// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [    {
  type: 'input',
  name: 'title',
  message: 'What is the title of your application?',
},
{
  type: 'input',
  name: 'Description',
  message: 'Describe the function of your application?',
},
/*{
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
},*/
{
  type: 'list',
  name: 'license',
  message: 'what is the license for your application',
  choices: ['MIT', 'GPLv2', 'Apache']
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created Markdown!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
    const mdPageContent = generatemarkdown(answers);
console.log(mdPageContent);
writeToFile('./output/readme.md', mdPageContent)
  });
}

// Function call to initialize app
init();