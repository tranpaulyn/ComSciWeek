class Person {
    constructor(name, quirkyFact, email) {
        this.name = name;
        this.quirkyFact = quirkyFact;
        this.email = email;
    }

    bio() {
        return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
}

class Student extends Person {
    enroll(cohort) {
        this.cohort = cohort;
    }
}

class Mentor extends Person {
    goOnShift() {
        this.onShift = true;
    }

    goOffShift () {
        this.onShift = false;
    }
}

let student1 = new Student('Sally', 'Likes potatoes', 'no email pls');
console.log(student1);
console.log(student1.bio());
student1.enroll(2018);
console.log(student1);

let mentor1 = new Mentor('Jacky', 'eats potatoes', 'no flash');
console.log(mentor1);