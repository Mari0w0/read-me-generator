// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[MIT](https://img.shields.io/badge/License-MIT-blue)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
${data.description}
  
## Table of Contents 
​
If your README is very long, add a table of contents to make it easy for users to find what they need.
​
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)



  ## Installation


  ## Contributing
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
  
  ## License

  ${renderLicenseSection(data.blahblah)}
  `
}

module.exports = generateMarkdown;
