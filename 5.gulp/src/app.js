let test = () => console.log(123);

class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getSalary(){
        return this.salary;
    }
}

photon = new Employee("Shabuktagin Photon Khan", 27, 35000);
console.log(photon.getName());
console.log(photon.getAge());
console.log(photon.getSalary());