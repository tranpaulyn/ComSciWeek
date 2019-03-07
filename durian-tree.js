class Employee {
    constructor(name, title, salary) {
      this.name = name;
      this.title = title;
      this.salary = salary;
      this.boss = null;
      this.subordinates = [];
    }

    addSubordinate(subordinate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
    }

    get numberOfSubordinates() {
        return this.subordinates.length;
    }

    get numberOfPeopleToCEO() {
        let numberOfPeople = 0;
        let currentEmployee = this;
    
        // climb "up" the tree (using iteration), counting nodes, until no boss is found
        while (currentEmployee.boss) {
          currentEmployee = currentEmployee.boss;
          numberOfPeople++;
        }
    
        return numberOfPeople;
      }

      hasSameBoss(employee) {
        return this.boss === employee.boss;
      }
  }

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

const simone = new Employee('Simone', 'Employee', 10);
const ali = new Employee('Ali', 'Employee', 10);

craig.addSubordinate(ali);
craig.addSubordinate(simone);

const florida = new Employee('Florida', 'employee', 10);
const david = new Employee('David', 'employee', 10);
const brian = new Employee('Brian', 'employee', 10);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

const karla = new Employee('Karla', 'employee', 10);

angela.addSubordinate(karla);

console.log(karla.numberOfSubordinates);
console.log(karla.boss);
console.log(karla.numberOfPeopleToCEO);