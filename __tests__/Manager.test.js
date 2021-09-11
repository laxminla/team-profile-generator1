const manager = require('./lib/Manager')
const manager = newManager('Maya', '10', 'maya@gmail.com', '1A' )

test('test if we can get the constructor value for the manager object', () => {
expect(manager.name).toBe('Maya');
expect(manager.id).toBe('10');
expect(manager.email).toBe('maya@gmail.com');
expect(manager.officeNumber).toBe('1A');
});   

test('test if we can get the name from getName() method', () => {
    expect(manager.getName()).toBe('Maya');
});

test('test if we can get the email from getEmail() method', () => {
    expect(manager.getemail()).toBe('maya@gmail.com');
});

test('test if we can get the school from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1A');
});

test('test if we can get the role from getRole() method', () => {
    expect(manager.getRole()).toBe('manager');
});
