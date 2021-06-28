const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

test('creates an employee object', () => {
    const employee = new Employee('Ben');
    console.table(employee);

    expect(employee.name).toBe('Ben');
    expect(employee.id).toBeDefined();
    expect(employee.email).toBe(`${employee.name}@company.com`);
    expect(employee.role).toBe('Employee');
})

test('gets employee name', () => {
    const employee = new Employee('Ben');

    expect(employee.getName()).toEqual(expect.stringContaining('Ben'));
})

test('gets employee id', () => {
    const employee = new Employee('Ben');

    expect(employee.getId()).toBe(employee.id);
})

test('gets employee email', () => {
    const employee = new Employee('Ben');

    expect(employee.getEmail()).toBe(employee.email);
})

test('gets employee role', () => {
    const employee = new Employee('Ben');

    expect(employee.getRole()).toBe(employee.role);
})