const generateManager = (manager) => {
    return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${manager.getName()}</span>
              <p>${manager.getRole()}</p>
            </div>
            <div class="card-action">
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li> Email: ${manager.getEmail()}</li>
                    <li>Office number: ${manager.getOfficeNum()}</li>
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
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${engineer.getName()}</span>
              <p>Role</p>
            </div>
            <div class="card-action">
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li> Email: ${engineer.getEmail()}</li>
                    <li>Github Username: ${engineer.getGithub()}</li>
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
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${intern.getName()}</span>
              <p>Intern</p>
            </div>
            <div class="card-action">
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li> Email: ${intern.getEmail()}</li>
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
      if (employee.officeNum) {
        // If employee has officeNum, then it's a manager
        cards += generateManager(employee);
      } else if (employee.githubUser) {
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






