const Profile = require('./Page');
const generatePage = require('./src/page-template');

new Profile().newProfile()
    // .then(this.promptAction())
    // .then(actionSelection => {
    //     return this.actionSelection(actionSelection);
    // })
    // .then(employees => {
    //     return this.generatePage(employees);
    // })
    // .then(pageHTML => {
    //     return this.writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return this.copyFile();
    // })
    // .then(copyFileResponse =>{
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });