const Employee = require('./lib/Employee')
const employee = newEmployee('Maya', '10', 'maya@gmail.com');

test('test if we can get the constructor value for the employee object', () => {
expect(employee.name).toBe('Maya');
expect(employee.id).toBe('10');
expect(employee.email).toBe('maya@gmail.com');;
});

test('test if we can get the name from getName() method', () => {
    expect(employee.getName()).toBe('Maya');
});

test('test if we can get the email from getEmail() method', () => {
    expect(employee.getemail()).toBe('maya@gmail.com');
});

test('test if we can get the role from getRole() method', () => {
    expect(employee.getRole()).toBe('employee');
});


