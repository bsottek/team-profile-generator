const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, email, officeNumber, id){
        super(name, email, id);

        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;