
class Parent {
    constructor() {
        this.fatherName = "Wahab Bhuiyan";
    }
}

class Children extends Parent {
    constructor(cName) {
        super();
        this.childName = cName;
    }

    getFullName() {
        const fullName = `${this.childName} ${this.fatherName}`;
        return fullName;
    }
}

const child1 = new Children("Faisal");
const child2 = new Children("Owajed");

console.log(child1.getFullName());
console.log(child2.getFullName());