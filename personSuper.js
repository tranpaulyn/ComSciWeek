// Super class
class Person {
    constructor(name, quirkyFact) {
      this.name = name;
      this.quirkyFact = quirkyFact;
    }
  
    bio() {
      return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
    }
  }
  
  class Mentor extends Person {
    // Mentor bios need to include a bit more info
    bio() {
      return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
    }
  }

  class Student extends Person {
    enroll(cohort) {
        this.cohort = cohort;
    }

    bio() {
        return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
    }
}
  
  // DRIVER CODE
  
  const bob = new Mentor('Bob Ross', 'I like mountains way too much');
  console.log(bob.bio());

  let sally = new Student('Sally Ross', 'I like franks');
  console.log(sally.bio());