const Profile = require('./Page');
const generatePage = require('./src/page-template');

new Profile().newProfile()
    .then(employees => {
        return generatePage(employees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse =>{
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });