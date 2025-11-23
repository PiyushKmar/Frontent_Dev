
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department} department.`;
    }
}


class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }


    work() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}


const emp1 = new Employee("Rahul", "Sales");
const emp2 = new Employee("Amit", "IT");
const mgr = new Manager("Piyush", "IT");


console.log(emp1.work());
console.log(emp2.work());
console.log(mgr.work()); 
