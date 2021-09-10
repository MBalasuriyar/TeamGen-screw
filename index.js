const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// above are ones were pulling, below we are pushing
const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

// this one makes the html
const render = require("./src/template")

const theTeam = [];
const id = [];


function mainPage() {









    function newTeamManager() {
        console.log("Who are your people?");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Who is the manager?",
                // typo here- now fixed
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Write something.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Manager id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                        // accepts positive digits only
                    );
                    if (pass) {
                        return true;
                    }
                    return "Needs to be positive and >0 ";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter manager's email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Eenter a valid email address.";
                }
            },
            {

                type: "input",
                name: "managerOfficeNumber",
                message: "What is the office number?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "There are no negative office numbers, nor ones with letters or symbols.  Enter a positive number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            theTeam.push(manager);
            id.push(answers.managerId);
            newTeam();
        });
    }

    function newTeam() {

        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What is the new member",
                choices: [


                    "There is no other member",
                    "Intern",
                    "Engineer"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Intern":
                    addIntern();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                default:
                    buildTeam();
            }
        });
    }
    function addEngineer() {
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "The engineer's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                if (id.includes(answer)) {
                  return "This already an id.  Enter a different number.";
                } else {
                  return true;
                }
    
              }
              return "There are no negative ids, nor ones with letters or symbols.  Enter a positive number greater than zero.";
            }
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "A real email, please.";
            }
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "Engineer's GitHub username?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          }
        ]).then(answers => {
          const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
          theTeam.push(engineer);
          id.push(answers.engineerId);
          newTeam();
        });
      }
    
      function addIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "The intern has a name.  What is it?";
            }
          },
          {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            validate: answer => {
              const pass = answer.match(
                /^[1-9]\d*$/
              );
              if (pass) {
                if (id.includes(answer)) {
                  return "This ID is already taken. Do not refer to your intern by number only, but please try a different number for them.";
                } else {
                  return true;
                }
    
              }
              return "Positive and not zero.  Interns are not zeros.";
            }
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: answer => {
              const pass = answer.match(
                /\S+@\S+\.\S+/
              );
              if (pass) {
                return true;
              }
              return "Please enter the interns real email address.";
            }
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is your intern's Hel- I mean school?  What's their school?",
            validate: answer => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            }
          }
        ]).then(answers => {
          const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
          theTeam.push(intern);
          id.push(answers.internId);
          newTeam();
        });
      }
    
      function buildTeam() {
        // makes output landing if there is none
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir)
        }
        fs.writeFileSync(outputPath, render(theTeam), "utf-8");
      }
      newTeamManager();

    }
    mainPage();





