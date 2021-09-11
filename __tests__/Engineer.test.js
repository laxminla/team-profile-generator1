const engineer = require('./lib/Engineer')
const engineer = newEngineer('Maya', '10', 'maya@gmail.com', 'maya01' );

test('test if we can get the constructor value for the engineer object', () => {
expect(engineer.name).toBe('Maya');
expect(engineer.id).toBe('10');
expect(engineer.email).toBe('maya@gmail.com');
expect(engineer.github).toBe('maya01');
});   

test('test if we can get the name from getName() method', () => {
    expect(engineer.getName()).toBe('Maya');
});

test('test if we can get the email from getEmail() method', () => {
    expect(engineer.getemail()).toBe('maya@gmail.com');
});

test('test if we can get the github from getGithub() method', () => {
    expect(engineer.getgithub()).toBe('maya01');
});

test('test if we can get the role from getRole() method', () => {
    expect(engineer.getRole()).toBe('engineer');
});
