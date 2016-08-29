//require the dependency to read json file
var jsonfile = require('jsonfile');

//require the dependency to read user input
var inquirer = require('inquirer');

//require the dependency to style quiz name
var chalk = require('chalk');

//require quiz.json in current directory
var quizanswer = './quiz.json';

var filecontent = jsonfile.readFileSync(quizanswer);

/** 
 * Class to import a new quiz from a JSON file
 * 
 */
var QuizAnswer = function () {

/**
 * list the quizzes in quiz.json 
 */
  this.answer = function(subject) {
  	// console.log(`\n${subject} quiz answer...\n`)0
  	var arr3 = [];  	
  	if (subject === 'General' || subject === 'Computer') {
      for (var i = 0; i < filecontent[subject].length; i++) {
        var answer = filecontent[subject][i]['answer'];  
        arr3.push(answer);     
      } 
      var question =
        [
        {
          name: 'response',
          type: 'input',
          message: '\nPlease enter answer here: ',           
          validate: function(option) {          	
            for (var i = 0; i < arr3.length; i++) {          
              if (option === arr3[i]) {
            	  console.log(chalk.cyan.bold('\nThat is correct.'));
            	  process.exit();
              } else {
            	    console.log(chalk.red.bold('\nWrong answer!'));
            	    process.exit();
                }
            }          
          }
        }
        ];
        inquirer.prompt(question); 
        return arr3;

    } else {
  	    return 'Please enter a subject listed in JSON file';
    }
  }
}

var myAnswer = new QuizAnswer();
myAnswer.answer('General');
module.exports = QuizAnswer;