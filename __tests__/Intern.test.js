const intern = require('./lib/Intern')
const intern = newIntern('Maya', '10', 'maya@gmail.com', 'Oxford' );

test('test if we can get the constructor value for the intern object', () => {
expect(intern.name).toBe('Maya');
expect(intern.id).toBe('10');
expect(intern.email).toBe('maya@gmail.com');
expect(intern.school).toBe('Oxford');
});   

test('test if we can get the name from getName() method', () => {
    expect(intern.getName()).toBe('Maya');
});

test('test if we can get the email from getEmail() method', () => {
    expect(intern.getemail()).toBe('maya@gmail.com');
});

test('test if we can get the school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('Oxford');
});

test('test if we can get the role from getRole() method', () => {
    expect(intern.getRole()).toBe('intern');
});
