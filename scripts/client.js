const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(function () {
  console.log('jquery');

  $('#runBonuses').on('click', runBonuses);
});

function runBonuses() {
  $('#employeeList').empty();
  $('#employeeList').append('<tr><th>Employee Name</th><th>Annual Salary</th><th>Employee Number</th><th>Review Rating</th><th>Bonus %</th><th>Bonus Amount</th><th>Total Compensation</th></tr>');
  for (let employee of employees) {
    let updatedEmployee = employeeBonus(employee);
    console.log(updatedEmployee);
    $('#employeeList').append(`<tr id="` + employee.employeeNumber + `"<tr>`);
    $('#' + employee.employeeNumber).append(`<td>` + updatedEmployee.name + `</td`);
    $('#' + employee.employeeNumber).append(`<td>$` + employee.annualSalary + `</td`);
    $('#' + employee.employeeNumber).append(`<td>` + employee.employeeNumber + `</td`);
    $('#' + employee.employeeNumber).append(`<td>` + employee.reviewRating + `</td`);
    $('#' + employee.employeeNumber).append(`<td>` + updatedEmployee.bonusPercentage * 100 + `%</td`);
    $('#' + employee.employeeNumber).append(`<td>$` + updatedEmployee.totalBonus + `</td`);
    $('#' + employee.employeeNumber).append(`<td>$` + updatedEmployee.totalCompensation + `</td`);
  }
  $('#runBonuses').attr('disabled', true).html('Bonuses Calculated');
}

function employeeBonus(employee) {
  // console.log("In employeeBonus");

  let calculatedPercentage = calcBonus(employee);
  let totalBonus = Math.floor(employee.annualSalary * calculatedPercentage);
  let totalCompensation = Number(employee.annualSalary) + totalBonus;

  // console.log(employee.name, "bonus dollars", totalBonus);

  let newEmployee = {
    name: employee.name,
    bonusPercentage: calculatedPercentage,
    totalBonus: totalBonus,
    totalCompensation: totalCompensation
  };
  return newEmployee;
};

function calcBonus(employee) {
  // console.log("In calcBonus");
  let bonusPercentage = 0;

  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  else if (employee.reviewRating === 3) {
    bonusPercentage = 4;
  }
  else if (employee.reviewRating === 4) {
    bonusPercentage = 6;
  }
  else {
    bonusPercentage = 10;
  }

  if (employee.employeeNumber.toString().length === 4) {
    bonusPercentage = bonusPercentage + 5;
  }

  if (employee.annualSalary > 65000) {
    bonusPercentage = bonusPercentage - 1;
  }

  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  // console.log(employee.name, bonusPercentage);

  return (bonusPercentage / 100);
}

console.log(employees);
