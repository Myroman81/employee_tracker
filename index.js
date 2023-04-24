const mysql = require("mysql2")
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootROOT",
  database: "employee_tracker_db"
});

function start() {
    .prompt([
  {
    type: "list",
    message: "How can I help you?",
    choices: [
      "Add employee",
      "Add department",
      "Add position",
      "View by employee",
      "View by department",
      "View by position",
      "Update employee position",
      "Quit"
    ]
  }
]).then((answer) => {
  switch (answer.action) {
    case "Add employee":
      addEmployee();
      break;
    case "Add department":
      addDepartment();
      break;
    case "Add position":
      addPosition();
      break;
    case "View employee":
      viewEmployee();
      break;
    case "View department":
      viewDepartment();
      break;
    case "View position":
      viewPosition();
      break;
    case "Update employee position":
      updateEmpPos();
      break;
      quit:
      db.end();
      break;
  }
})

};
function viewAllEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
  function(err, res) {
    if (err) throw err
    console.table(res)
    startPrompt()
})
}
function addEmployee() {
  db.query(
    "select * from employee", (err, empRes) => {
      const employees = empRes.map(employee) => {
        return employee.first_name + employee.last_name;
      });
      db.query(
        "select * from position", (err, emPos) => {
          const positions = positionRes.map(position) => {
            return position.title;
          });
          inquirer
          prompt([{
            type: "input",
            message: "Please enter first name of employee to be added.",
            name: "first_name"
          },
          {
            type: "input",
            message: "Please enter last name of employee to be added.",
            name: "last_name"
          },
          {
            type: "list",
            message: "Please choose the new employees position.",
            name: "position_id",
            choices: positions
          }
        ]).then(res) => {
          const { first_name, last_name } = res;
          const 

          }


          }


