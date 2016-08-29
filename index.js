//require the dependency to clear console
var clear = require('clear');

//require the dependency to style quiz name
var chalk = require('chalk');

//require the dependency to create ASCII Art from quiz name
var figlet = require('figlet')

//require the dependency to read json file
var jsonfile = require("jsonfile");


//require the dependency to read user input
var inquirer = require('inquirer');

//require listquizzes.js in current directory
var listQuiz = require('./listquizzes');

var quizfile = "./quiz.json";

//clear console
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
      message: chalk.cyan.bold('\nlistquizzes.....Please enter \'l\' to list quizzes: '),
      validate: function(option) {
        if (option === 'l') {               
          console.log(chalk.cyan.bold('\n\nQuizzes are listed below by Subject:\n'));
                
          //call this.list() in listquizzes.js
          newList.list();

          process.exit();
          } else {
              return chalk.cyan.red('Please enter \'l\' above to list quizzes');
                 }
      }
    } 
  ];

    inquirer.prompt(question);          
}
optionList();


/** 
 * Class to list quizzes in quiz.json file
 * 
 */
var ListQuiz = function () {

/**
 * list the quizzes in quiz.json  
*/
  this.list = function() {
    var filecontent = jsonfile.readFileSync(quizfile);
    console.log(filecontent);   
  }
}

ListQuiz(); 
module.exports = ListQuiz;


