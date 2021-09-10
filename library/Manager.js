const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
        // be sure to clarify when speaking this function; get-office-number, not get-off-this-number.

    }
}
module.exports = Manager;