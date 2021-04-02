// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
		type: 'input',
		name: 'title',
		message: 'What is the project title?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'What is your project description?',
	},
    {
		type: 'input',
		name: 'installation',
		message: 'What are the step to install your project?',
	},
    {
		type: 'input',
		name: 'contribution',
		message: 'Any contribution?',
	},
	{
		type: 'input',
		name: 'userstory',
		message: 'what is your user story',
	},
    {
		type: 'list',
		name: 'license',
		message: 'Which license would you like this project to be covered under?',
		choices: ['MIT', 'APACHE', 'None']
	}
];

// TODO: Create a function to initialize app
function init(){
// TODO: Create a function to write README file
inquirer.prompt(questions).then((data) => {
    console.log(data);

    fs.writeFile('README.md', generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Readme created!')
    );   
});
}
// Function call to initialize app
init();
