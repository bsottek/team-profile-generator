const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, officeNumber){
        super(name);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;