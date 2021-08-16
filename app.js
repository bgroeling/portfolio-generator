const inquirer = require('inquirer');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your Username');
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some informati(on about yourself:'
    }
  ]);
};

const promptProject = portfolioData => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectnameInput => {
        if (projectnameInput) {
          return true;
        } else {
          console.log ('Please enter project name');
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a decription of the project (Required)',
      validate: projectdescriptionInput => {
        if(projectdescriptionInput) {
          return true;
        } else {
          console.log ('Please provide a project description');
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootsrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the Github link to your project. (Required)',
      validate: projectlinkInput => {
        if(projectlinkInput) {
          return true;
        } else {
          console.log ('Please include the github link');
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
// const fs = require('fs');
// const generatePage = require('./src/page-template');


// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
  // if (err) throw err;

  // console.log('Portfolio complete! Check out index.html to see the output!');
// });
