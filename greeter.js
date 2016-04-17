function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Grace', lastName: 'User' };
document.body.innerHTML = greeter(user);
