const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, email, github, id){
        super(name, email, id);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub(){
        return(this.github);
    }
}

module.exports = Engineer;