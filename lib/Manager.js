const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, email, officeNumber){
        super(name, email);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;