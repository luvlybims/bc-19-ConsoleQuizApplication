//require the dependency to clear console
var clear = require('clear');

//require the dependency to style quiz name
var chalk = require('chalk');

//require the dependency to create ASCII Art from quiz name
var figlet = require('figlet')


//require the dependency to read user input
var inquirer = require('inquirer');

//require listquizzes.js in current directory
var listQuiz = require('./listquizzes');

clear();
console.log(
  chalk.red.bgGreen.bold(
    figlet.textSync('Quizzy Quiz', { horizontalLayout: 'full' })
  )
)

var newList = new listQuiz();

/** 
 * prompt the user to enter option 'l' to list quizzes, and then call this.list() to list the quizzes in quiz.json 
 */
//function this.optionList = function () { 
function optionList() { 
  var question = 
  [
    {
      name: 'response',
      type: 'input',
      message: '\nlistquizzes.....Please enter \'l\' to list quizzes: ',
      validate: function(option) {
        if (option === 'l') {               
          console.log('\n\nQuizzes are listed below by Subject: ');
                
                    //call this.list() in listquizzes.js
          newList.list();

          process.exit();
          } else {
              return 'Please enter \'l\' above to list quizzes';
                 }
      }
    } 
  ];

    inquirer.prompt(question);          
}

//list quizzes
//this.optionList();
optionList();
