class Employee{
    constructor(name = ''){
        var idIterator = 1;
        
        this.name = name;
        this.id = idIterator++;
        this.email = `${name}@company.com`;
    }
};

module.exports = Employee;