// TODO: Create a function that returns a license badge based on which license is passed in
const mit = `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`

const apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

const isc = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [User Story](#userstory)
  * [Tests ](#Tests)
  * [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}

  ## User Story
  ${data.userstory}

  ## Tests
  ${data.tests}

  ## License
  ${data.license === 'MIT' ? mit : ''}
  ${data.license === 'APACHE' ? apache : ''}
  ${data.license === 'ISC'? isc : ''}
  

  ## Questions
  For any questions do not hesitate to reach out. \n
  Contact me:
  On Github: ${data.username} \n
  Via Email: ${data.email}

`;
}

module.exports = generateMarkdown;
