// Install node modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generatePage = require("./lib/htmlRenderer");

let employees = [];
let answer;
const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
    },
];

const InternQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is the intern's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
    },
];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
];

const menuOption = [
    {
        type: "list",
        name: "menu",
        choices: ["Manager", "Engineer", "Intern", "Quit"],
        message: "What type of employee do you wish to add?",
    },
];

function getEmployeeType() {
    let employeeObj;

    //  (answer !== 'Quit') {
    inquirer.prompt(menuOption).then(function (response) {
        answer = response.menu;
        // Check the value for the next set of questions
        switch (response.menu) {
            case "Manager":
                // prompt user for the managerQuestions
                employeeObj = getManagerInfo();
                break;

            case "Engineer":
                // prompt user for the engineerQuestions
                employeeObj = getEngineerInfo();
                break;

            case "Intern":
                // prompt user for internQuestions
                employeeObj = getInternInfo();
                break;

            default:
                // user quit
                if (!employees) {
                    employees = [];
                }
                const pageContent = generatePage(employees);
                fs.writeFile("./dist/index.html", pageContent, (error) => {
                    if (error) console.log(error);
                    console.log(
                        "Team Profile is complete! Check out the index.html in dist folder!"
                    );
                });
        }
    });
}

function getEngineerInfo() {
    let engineer;
    inquirer.prompt(engineerQuestion).then(function (response) {
        engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
        );
        employees.push(engineer);
        getEmployeeType();

        return engineer;
    });
}

function getManagerInfo() {
    let manager;
    inquirer.prompt(managerQuestions).then(function (response) {
        manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
        );
        employees.push(manager);
        getEmployeeType();
    });
}

function getInternInfo() {
    let intern;
    inquirer.prompt(InternQuestion).then(function (response) {
        intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        );
        employees.push(intern);
        getEmployeeType();
    });
}

getEmployeeType();
// TODO: generate HTML output
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
}

function generateTeam() {
    fs.writeFileSync(outputPath, htmlRenderer(teamMembers), "utf-8");
};






// TODO: generate HTML output
// if (!fs.existsSync(OUTPUT_DIR)) {
//     fs.mkdirSync(OUTPUT_DIR)
// }
// fs.writeFileSync(outputPath, htmlRenderer(teamMembers), "utf-8");
// function writeToFile(filename, data) {
//     fs. writeFile(filename, data, (err) => {
//         if(err)throw err;
//         console.log('file saved')
//     });
// };







