const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

test('creates an employee object', () => {
    const employee = new Employee('Ben', 'ben@company.com', '1234');
    console.table(employee);

    expect(employee.name).toBe('Ben');
    expect(employee.id).toBeDefined();
    expect(employee.email).toMatch(/@/);
    expect(employee.email).toMatch(/.com/);
    expect(employee.role).toBe('Employee');
})

test('gets employee name', () => {
    const employee = new Employee('Ben', 'ben@company.com', '1234');

    expect(employee.getName()).toEqual(expect.stringContaining('Ben'));
})

test('gets employee id', () => {
    const employee = new Employee('Ben', 'ben@company.com', '1234');

    expect(employee.getId()).toBe(employee.id);
})

test('gets employee email', () => {
    const employee = new Employee('Ben', 'ben@company.com', '1234');

    expect(employee.getEmail()).toBe(employee.email);
})

test('gets employee role', () => {
    const employee = new Employee('Ben', 'ben@company.com', '1234');

    expect(employee.getRole()).toBe(employee.role);
})