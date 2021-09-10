const Manager = require("../library/Manager")
const Employee = require("../library/Employee")
test("Set office number through constructor", () =>{
    const testValue = 1010;
    const a = new Manager("W.White", 419, "testing@test.com", testValue)
    expect(a.officeNumber).tobe(testvalue);
    
} );


test("Role selection should be \"Manager\" ", () =>{
    const testValue = "Manager"
    const a = new Manager("W.White",419,"testing@test.com",1010);
    expect(a.getRole()).tobe(testvalue);

} );

test("Get office number from getOfficeNumber ", () =>{
    const testValue = 1010
    const a = new  Manager("W.White",419,"testing@test.com",testValue);
    expect(a.getOfficeNumber()).tobe(testvalue);
    
} );