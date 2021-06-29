const Engineer = require('../lib/Engineer');
const { expect } = require('@jest/globals');

test('create engineer object', () => {
    const engineer = new Engineer('Ben', 'ben@company.com', 'bsottek', 1234);
    console.table(engineer);

    expect(engineer.name).toBe('Ben');
    expect(engineer.id).toBeDefined();
    expect(engineer.email).toMatch(/@/);
    expect(engineer.email).toMatch(/.com/);
    expect(engineer.github).toBeDefined();
    expect(engineer.role).toBe('Engineer');
})