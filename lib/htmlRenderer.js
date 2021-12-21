const generateManager = (manager) => {
  return `
    <div class="row">
      <div class="col s12 m6">
        <div class="card" style="width: 20rem;">
          <div class="card-content white-text">
            <span class="card-title">${manager.getName()}</span>
            <p>${manager.getRole()}</p>
          </div>
          <div class="card-action">
              <ul>
                  <li>ID: ${manager.getId()}</li>
                  <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li>Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
        </div>
      </div>
    </div>`;
};

const generateEngineer = (engineer) => {
  return `
    <div class="row">
      <div class="col s12 m6">
        <div class="card" style="width: 20rem;">
          <div class="card-content white-text">
            <span class="card-title">${engineer.getName()}</span>
            <p>${engineer.getRole()}</p>
          </div>
          <div class="card-action">
              <ul>
                  <li>ID: ${engineer.getId()}</li>
                  <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li>GitHub Username: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>`;
};

const generateIntern = (intern) => {
  return `
    <div class="row">
      <div class="col s12 m6">
        <div class="card" style="width: 20rem;">
          <div class="card-content white-text">
            <span class="card-title">${intern.getName()}</span>
            <p>Intern</p>
          </div>
          <div class="card-action">
              <ul>
                  <li>ID: ${intern.getId()}</li>
                  <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li>School: ${intern.getSchool()}</li>
              </ul>
          </div>
        </div>
      </div>
    </div>`;
};

const generatePage = (teamData) => {
  let cards = "",
    employee;

  // Build all the cards
  for (let i = 0; i < teamData.length; i++) {
    employee = teamData[i];
    if (employee.officeNumber) {
      // If employee has officeNum, then it's a manager
      cards += generateManager(employee);
    } else if (employee.github) {
      // if employee has githubUser, then it's an engineer
      cards += generateEngineer(employee);
    } else {
      // Otherwise the employee is an intern
      cards += generateIntern(employee);
    }
  }

  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
      <h1> My Team </h1>
  </header>

  <main>
    ${cards}
  </main>

</body>
</html>`;
};

module.exports = generatePage;
