# TeamProfileGen
# Object-Oriented Programming: Team Profile Generator

## Given Task

Task was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so also wrote a unit test for every part of code and ensured that it passes each test.


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN  prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN  an email address is clicked on in the HTML
THEN the default email program opens and populates the TO field of the email with the address
WHEN clicking on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN  starting the application
THEN the user is prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN entering the team manager’s name, employee ID, email address, and office number
THEN the user presented with a menu with the option to add an engineer or an intern or to finish building the team
WHEN  selecting the engineer option, or the intern option, 
THEN the user is prompted to enter the chosen role's name, ID, email, and GitHub username, and I am taken back to the menu
WHEN it has been decided to finish building the team
THEN  the application is exited, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up prompting for creation of the HTML:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./workingGen.png)

And the finished HTML:
![HTML from input shown above](./workinghtmlfortgen.png)


Here the process is demonstrated via video;


 The application will be invoked by using the following command:

```bash
node index.js
```



The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager`  also has the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` also has the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` also has the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`




--------
Includes;

Validation to ensure that user input is in the proper format.


---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

