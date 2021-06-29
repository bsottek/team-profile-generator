const Intern = require('../lib/Intern');
const { expect } = require('@jest/globals');

test('create intern object', () => {
    const intern = new Intern('Ben', 'ben@company.com', 'University of Tennessee', 1234);
    console.table(intern);

    expect(intern.name).toBe('Ben');
    expect(intern.id).toBeDefined();
    expect(intern.email).toMatch(/@/);
    expect(intern.email).toMatch(/.com/);
    expect(intern.school).toBeDefined();
    expect(intern.role).toBe('Intern');
})

test('return school name', () => {
    const intern = new Intern('Ben', 'ben@company.com', 'University of Tennessee', 1234);

    expect(intern.getSchool()).toBe('University of Tennessee');
})

test('return role (intern)', () => {
    const intern = new Intern('Ben', 'ben@company.com', 'University of Tennessee', 1234);

    expect(intern.getRole()).toBe('Intern');
})