class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }

    showResult() {
        console.log(`Name: ${this.name}`);
        console.log(`Average: ${this.calculateAverage()}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log("---------------------");
    }
}



const s1 = new Student("Rahul", [95, 88, 90, 92]);
const s2 = new Student("Piyush", [70, 65, 80, 60]);
const s3 = new Student("Aman", [40, 55, 45, 30]);

s1.showResult();
s2.showResult();
s3.showResult();
