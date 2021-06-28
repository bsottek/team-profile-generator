const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

test('creates an employee object', () => {
    const employee = new Employee('Ben');
    console.log(employee);

    expect(employee.name).toBe('Ben');
    expect(employee.id).toBeDefined();
    expect(employee.email).toBe(`${employee.name}@company.com`);
})