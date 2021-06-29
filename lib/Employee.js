class Employee{
    constructor(name = '', email = '', id = ''){
        var idIterator = 1;
        
        this.name = name;
        this.id = id;
        this.email = email;
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