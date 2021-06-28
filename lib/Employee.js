class Employee{
    constructor(name = ''){
        var idIterator = 1;
        
        this.name = name;
        this.id = idIterator++;
        this.email = `${name}@company.com`;
        this.role = 'Employee';
    }

    getName() {
        return(this.name);
    }

    getId() {
        return(this.id);
    }

    getEmail() {
        return(this.email);
    }

    getRole() {
        return(this.role);
    }

};

module.exports = Employee;