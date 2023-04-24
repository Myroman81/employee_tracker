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