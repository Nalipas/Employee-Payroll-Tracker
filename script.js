// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees=[];

  let addEmployees = true;
  while (addEmployees) {
    const firstName = window.prompt("Enter employee first name");
    const lastName = window.prompt("Enter employee last name");

    let salary = 0;
    let salaryPrompt = true;

    while(salaryPrompt) {
      let salaryInput = window.prompt("Enter employee salary");
      if(isNaN(salaryInput)) {
        alert("Invalid input! Enter a numerical value!")
      } else {
        salary = parseInt(salaryInput);
        salaryPrompt = false;
      }
    }
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employees.push(employee);
      addEmployees = confirm("Add more employees?");
  }return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let employee of employeesArray) {
    totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log("Average Salary");
  console.log(averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(randomEmployee.firstName + " " + randomEmployee.lastName + "'s Salary");
  console.log(randomEmployee.salary);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
