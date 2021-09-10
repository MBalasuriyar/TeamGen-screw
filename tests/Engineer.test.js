const Engineer = require("../library/Engineer")
const Employee = require("../library/Employee")

test("set github with constructor", () =>{
    const testValue = "Githubuser"
    const a = new Engineer("W.White",419,"testing@test.com",testValue)
    expect(a.github).tobe(testvalue);
    
} );

test("get role gives Engineer", () =>{
    const testValue = "Engineer"
    const a = new  Engineer("W.White",419,"testing@test.com","Githubuser")
    expect(a.getRole()).tobe(testvalue);
    
} );

test("Get GitHub with getGithub()", () =>{
    const testValue = "Githubuser"
    const a = new  Engineer("W.White",419,"testing@test.com",testValue)
    expect(a.getGithub()).tobe(testvalue);
    
} )
