import inquirer from 'inquirer';


export const testPrompt = () => inquirer.prompt([
  {
    type: 'confirm',
    name: 'testAnswer',
    message: 'This is a confirm type of inquirer question?',
    default: false
  }
]);
