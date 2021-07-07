const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./generate-site.js');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function Profile(){
    this.employees = [];
}

Profile.prototype.promptEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this engineer's name?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this engineer's GitHub username?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is this engineer's employee ID?"
            }
        ])
        .then(({ name, email, github, id }) => {
            this.employees.push(new Engineer(name, email, github, id));
            return (this.promptAction());
        })
}

Profile.prototype.promptIntern = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this intern's name?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is this intern's school name?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is this intern's employee ID?"
            }
        ])
        .then(({ name, email, school, id }) => {
            this.employees.push(new Intern(name, email, school, id));
            return(this.promptAction());
        })
}

Profile.prototype.newProfile = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Enter the team manager's name:`
            },
            {
                type: 'input',
                name: 'email',
                message: `Enter the team manager's email:`
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: `Enter the team manager's office number:`
            },
            {
                type: 'number',
                name: 'id',
                message: `Enter the team manager's employee ID:`
            }
        ])
        .then(({ name, email, officeNumber, id }) => {
            this.employees.push(new Manager(name, email, officeNumber, id));
            this.promptAction();
        });
};

Profile.prototype.promptAction = function() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'actionSelection',
                message: 'What would you like to do next?',
                choices: ['Enter engineer details', 'Enter intern details', 'Finish and generate page']
            }
        ])
        .then(({actionSelection}) => {
            console.log(actionSelection);
            if (actionSelection == 'Enter engineer details'){
                return (this.promptEngineer());
            } else if (actionSelection == 'Enter intern details'){
                return(this.promptIntern());
            } else {
                return this.fileGeneration(this.employees);
            }
        })
}

Profile.prototype.fileGeneration = function(employees) {
    return generatePage(employees)
        .then(writeFileResponse => {
            console.log(writeFileResponse.message);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = Profile;

