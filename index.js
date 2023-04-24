const mysql = require("mysql2")
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  // TODO: Add MySQL password here
  password: "rootROOT",
  database: "employee_tracker_db"
});

function start() {
    .prompt([
  {
    type: "list",
    message: "How can I help you?"
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


