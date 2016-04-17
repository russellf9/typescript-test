class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName = ' ' + middleName + ' ' + lastName;

    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
 return "Hello, " + person.firstName + ' ' + person.lastName;
}

var user = new Student('Grace', 'S', 'User');

document.body.innerHTML = greeter(user);
