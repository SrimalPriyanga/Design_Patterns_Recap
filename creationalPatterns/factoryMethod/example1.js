// TODO: Check definition
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case "D":
        return new Developer(name);
        break;
      case "T":
        return new Tester(name);
        break;
      default:
        return null;
        break;
    }
  };
}

let employees = [];
const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create("Srimal", "D"));
employees.push(employeeFactory.create("Priyanga", "T"));
employees.push(employeeFactory.create("Fonseka", "T"));
employees.push(employeeFactory.create("Alex", "D"));
employees.push(employeeFactory.create("Bob", "T"));

console.log(employees);
