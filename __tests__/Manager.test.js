const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const { expect } = require('@jest/globals');

test('create a manager object', () => {
    const manager = new Manager('Ben','ben@company.com', 204, 1234);
    console.table(manager);

    expect(manager.name).toBe('Ben');
    expect(manager.officeNumber).toBe(204);
    expect(manager.id).toBeDefined();
    expect(manager.email).toMatch(/@/);
    expect(manager.email).toMatch(/.com/);
    expect(manager.role).toBe('Manager');
})