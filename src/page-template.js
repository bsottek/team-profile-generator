const { writeFile, copyFile } = require('../generate-site.js');

const generatePage = (employees) => {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;
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

    <title>Weather Dashboard</title>
</head>

<body>
<div class="container-fluid m-2">
    <div class="row">
        <header class="col-12 bg-dark text-light">
            <h2 class="text-center p-3">
                Team Profile
            </h2>
        </header>
    <div class="row">
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
        <div class = "col-2, card, text-white, bg-dark, mr-2, mt-2">
            <div class= "card-header">
                ${name}
                ${role}
            </div>
            <ul>
                <li> Email: ${email} </li>
                <li> Office Number: ${officeNumber} </li>
                <li> ID: ${id} </li>
            <ul>
        </div>`;
        })}`;
}

const generateEngineer = employees => {
    return `
    ${employees
            .filter(employee => employee.role === 'Engineer')
            .map(({ name, id, email, role, github }) => {
                return `
        <div class = "col-2, card, text-white, bg-dark, mr-2, mt-2">
            <div class= "card-header">
                ${name}
                ${role}
            </div>
            <ul>
                <li> Email: ${email} </li>
                <li> GitHub Username: ${github} </li>
                <li> ID: ${id} </li>
            <ul>
        </div>`;
            })}`;
}

const generateIntern = employees => {
    return `
    ${employees
            .filter(employee => employee.role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `
        <div class = "col-2, card, text-white, bg-dark, mr-2, mt-2">
            <div class= "card-header">
                ${name}
                ${role}
            </div>
            <ul>
                <li> Email: ${email} </li>
                <li> School: ${school} </li>
                <li> ID: ${id} </li>
            <ul>
        </div>`;
            })}`;
}

module.exports = generatePage;