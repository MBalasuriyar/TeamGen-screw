const Employee = require("../library/employee");
// pulls employee.js


test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
// when started initiates a new employee object

test("Can set name via constructor arguments", () => {
  const name = "Jeff";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
// when given answer to propmpted user; encorporates the answer (as name)

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Kunar", testValue);
  expect(e.id).toBe(testValue);
});
// when given answer to propmpted user; encorporates the answer (as id)

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Kunar", 1, testValue);
  expect(e.email).toBe(testValue);
});
// when given answer to propmpted user; encorporates the answer (as email).


test("Can get name via getName()", () => {
  const testValue = "Jeff";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
// checks whether the prompt for name stores the given name

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Kunar", testValue);
  expect(e.getId()).toBe(testValue);
});
// same as the above but for ID

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Kunar", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
// same for the two above but for email.  Which means- the prompt for email is used as the email in the genereated script

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Jeff", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
// getRole is not in the same object as the employee data, but is still connected to it.  This checks that the role of 'employee' comes back as "employee" 

// I am not sure as to where this test originates