class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email

    }

// simplicity 
    getName(){
        return this.name;

    }

    getId(){
       return this.id;
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
    getALife(){
        return this.doesNotExist
    }
}

module.exports = Employee;
