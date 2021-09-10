const Intern = require("../library/Intern");
// still not sure if "var" can be used in place of const here
const Employee = require("../library/Employee")

test("the constructor sets the school", ()=> {
    const testValue = "GFY";
    const a = new Intern("W.White", 419, "testing@test.com",testValue);
    expect(a.school).tobe(testValue);
} );

// tests if the input for 'school' is saved as the given school

test("Role selection should be \"Intern\" ", () =>{
    const testValue = "Intern"
    const a = new Intern("W.White",419,"testing@test.com","GFY");
    expect(a.getRole()).tobe(testvalue);
    
} )


test("getSchool gets school", () =>{
    const testValue = "GFY"
    const a = new Intern("W.White", 419, "testing@test.com", testValue);
    expect(a.getSchool()).tobe(testvalue);
    
} )