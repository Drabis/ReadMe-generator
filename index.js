// TODO: Include packages needed for this application

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
		name: 'use',
		message: 'What are your instructions for use?',
	},
    {
		type: 'input',
		name: 'contribution',
		message: 'Any contribution?',
	},
    {
		type: 'input',
		name: 'testing',
		message: 'What are your instructions for testing?',
	},
    {
		type: 'list',
		name: 'license',
		message: 'Which license would you like this project to be covered under?',
		choices: ['MIT', 'APACHE', 'None']
	},
    {
		type: 'input',
		name: 'username',
		message: 'What is your GitHub username?',
	},
    {
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
