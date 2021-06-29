const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, school, id) {
        super(name, email, id);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return (this.school);
    }
}

module.exports = Intern;