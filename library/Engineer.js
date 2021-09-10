const Employee = require("./employee");

// const Engineer= reqire("./Employee");
// oops

// congradulations on being an engineer; chicken scratch is now your cursive

// why isn't the color right?
class Engineer extends Employee{
    // now it's the right color
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        // remembering the semicolins this time.  I know I probably just misspelled semicolin
    }
    getRole(){
        return "Engineer";
        // what kind of engineer?  BioMed, Mech, Chem, Elec, etc...
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;
// its not expressing it as a class via color again.   That's worrying.