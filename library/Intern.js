const Employee = require("./Employee");
// now this js knows what an employee is (by our given deffinition)

class Intern extends Employee {
    // some employees are interns
    constructor(name,id,email,school){
        // the intern's data
        super (name, id, email);
        // I think super either supercedes the object with the new object,
        //  or tells the constructor what those pieces already are.  Probably the former
        this.school= school;

    }
    getRole(){
        return "Intern"
        // this pulls the role of intern for the role.  
    }

    getSchool(){
        return this.school;
    }
}
//this js was given explanatory comments, but due to the similarity to engineer and Manager js's, they will not contain the same comments again 

module.exports = Intern;