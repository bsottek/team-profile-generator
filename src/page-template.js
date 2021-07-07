const { writeFile, copyFile } = require('../generate-site.js');

const generatePage = (employees) => {
    console.log('generatePage is working');
    return (writeFile(`
        <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap"
    rel="stylesheet">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
<link rel="stylesheet" href="./assets/css/style.css" />

    <title>Team Profile</title>
</head>

<body>
<div class="container-fluid m-2">
    <div class="row">
        <header class="col-12 bg-primary text-light">
            <h2 class="text-center p-3">
                Team Profile
            </h2>
        </header>
    </div>
    <div class="row p-3 d-flex justify-content-around">
        ${generateManager(employees)}
        ${generateEngineer(employees)}
        ${generateIntern(employees)}
    </div>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} </h3>
    </footer>
  </body>
  </html>
    `));
};

const generateManager = employees => {
    return `
    ${employees
        .filter(employee => employee.role === 'Manager')
        .map(({name, id, email, role, officeNumber}) => {
            return `
        <div class = "col-3 card bg-light  mt-2 ml-2">
            <div class= "card-header bg-dark text-white">
                ${name} <br>
                <span class="oi oi-bullhorn">${role}</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a> </li>
                <li class="list-group-item"> Office Number: ${officeNumber} </li>
                <li class="list-group-item"> ID: ${id} </li>
            </ul>
        </div>`;
        })}`;
}

const generateEngineer = employees => {
    return `
    ${employees
            .filter(employee => employee.role === 'Engineer')
            .map(({ name, id, email, role, github }) => {
                return `
        <div class = "col-3 card bg-light  mt-2 ml-2">
            <div class= "card-header bg-warning text-white">
                ${name} <br>
                <span class="oi oi-wrench">${role}</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a> </li>
                <li class="list-group-item"> GitHub Username: <a target="_blank" rel="noopener noreferrer" href="https://github.com/${github}">${github}</a> </li>
                <li class="list-group-item"> ID: ${id} </li>
            </ul>
        </div>`;
            })}`;
}

const generateIntern = employees => {
    return `
    ${employees
            .filter(employee => employee.role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `
        <div class = "col-3 card bg-light  mt-2 ml-2">
            <div class= "card-header bg-info text-white">
                ${name} <br>
                <span class="oi oi-pencil">${role}</span>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a> </li>
                <li class="list-group-item"> School: ${school} </li>
                <li class="list-group-item"> ID: ${id} </li>
            </ul>
        </div>`;
            })}`;
}

module.exports = generatePage;