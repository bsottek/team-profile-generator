const inquirer = require('inquirer');
// const { writeFile, copyFile } = require('./utils/generate-site.js');
// const generatePage = require('./src/page-template');
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
            this.promptAction()
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
            this.promptAction();
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
            console.log(this.employees);
            this.promptAction();
        })
};



// Profile.prototype.promptManager = function() {
//     return inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: `Enter the team manager's name:`
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: `Enter the team manager's email:`
//             },
//             {
//                 type: 'number',
//                 name: 'officeNumber',
//                 message: `Enter the team manager's office number:`
//             },
//             {
//                 type: 'number',
//                 name: 'id',
//                 message: `Enter the team manager's employee ID:`
//             }
//         ])
//         .then(({name, email, officeNumber, id}) => {
//             this.employees.push(new Manager(name, email, officeNumber, id));
//         })
// };

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
            if (actionSelection === 'Enter engineer details'){
                this.promptEngineer();
            } else if (actionSelection === 'Enter intern details'){
                this.promptIntern();
            } else {
                console.log('generating page');
                this.employees.map(console.log(this));
                //insert generateProfile function call here
            }
        })
}


module.exports = Profile;

