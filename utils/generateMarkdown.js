// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  *[Project title](#title)
  *[Description](description)
  *[Installation](#installation)
  *[contribution](contribution)
  *[Contribution](# contribution)
  *[License](#lincense)
  *[Username](#username)
  *[Email](#email)

  ## Project title
  ${data.description}

  ##Description
  ${data.installation}
  ##Contribution
  ${data.contribution}

  ## License
  ${data.license}

  ##Username
  ${data.username}

  #Email
  ${data.email}

  ## Questions
  constact me:
  Github: [${data.username}](https://github.com/Drabis)
  Email: [${data.email}](drabo.aboulaye88@gmail.com)

`;
}

module.exports = generateMarkdown;
