const mysql = require("mysql2")
const inquirer = require("inquirer");
const cTable = require("console.table");

// First we have to configure our connection to our DATABASE
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootROOT",
  database: "employee_tracker_db"
});

// Then we have to Connect to our DATABASE
db.connect(function(err) {
  if(err) {
    throw err;
  }
  console.log("Database connected...");
  start();
})



function start() {
  inquirer.prompt(
  {
    type: "list",
    message: "How can I help you?",
    name: 'userChoice',
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
).then((answer) => {
  switch (answer.userChoice) {
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
    case "Quit":
      db.end();
      // process.exit()  --> this should exit the current running application
      break;

  }
})

};
function viewAllEmployees() {
  db.query("SELECT * FROM employees;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    })
  
/*  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
    })
    */
}

function viewDepartment() {
  db.query("SELECT * FROM department;", (err, data) => {
    if(err) {
      throw err;
    }
    console.table(data);
    // restart our user questions set
    start()
  })
}

function addDepartment() {
  inquirer
    .prompt({
      name: "addDepartment",
      type: "input",
      name: "department_name",
      message: "What is the new department name?"
    })
  .then(function(answer) {
    let newDepartment = answer.department_name;

    db.query("INSERT INTO department SET ?", newDepartment, (err) => {
      if(err) {
        throw err;
      }

      console.log("New Department Added");
      viewDepartment();
    })
  });
  
}

function addEmployee() {
  db.query(
    "select * from employee", (err, empRes) => {
      const employees = empRes.map((employee) => {
        return employee.first_name + employee.last_name;
      });
    });
  
  db.query(
    "select * from position", (err, emPos) => {
      const positions = positionRes.map((position) => {
        return position.title;
      });
    });


  inquirer.
    prompt([
    {
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
    ]).then((res) => {
      const { first_name, last_name } = res;
      //const

    });
}



  function addPosition() {
    inquirer
      .prompt({
        name: "addPosition",
        type: "input",
        message: "Which position would you like to add? Please enter the new title."
      })
    .then(function () {

    });
  }
