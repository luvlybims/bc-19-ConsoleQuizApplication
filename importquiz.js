//require the dependency to clear console
var clear = require('clear');

//require the dependency to read json file
var jsonfile = require('jsonfile');

//require the dependency to read user input
 var inquirer = require('inquirer');

//require quiz.json in current directory
var importquiz = './quiz.json';

//require the dependency to style quiz name
var chalk = require('chalk');

var filecontent = jsonfile.readFileSync(importquiz);

clear();

/** 
 * Class to import a new quiz from a JSON file
 * 
 */
var ImportQuiz = function () {

     
/** 
 * prompt the user to enter subject of quiz to import 
 */
  this.importQuest = function(subject) {
    var question2 =
      [
        {
          name: 'response',
          type: 'input',
          message: chalk.cyan.bold('\nimportquiz <path_to_quiz_JSON>.....Please enter subject of quiz to import: '), 
          validate: function(subject) {
            if (subject === 'General' || subject === 'Computer') {
              console.log(`\nYou have entered ${subject} as your choice subject\n`)                       
              var question = 
                [
                  {
                     name: 'response',
                     type: 'input',
                     message: chalk.cyan.bold('\nPlease enter path to JSON file: '),
                     validate: function(path) {
                       if (path.length > 0) {          
                         console.log(`\n${subject} Quiz in path ${path} is listed below:\n`)
                         for (let i = 0; i < filecontent[subject].length; i++) {
                           var question = filecontent[subject][i]['question'];
                           var options = filecontent[subject][i]['options'];
                           var answer = filecontent[subject][i]['answer'];
                           result = `question: ${question}\noptions: ${options}\nanswer: ${answer} \n`;
                           console.log(result);                              
                         } 

                         process.exit();

                       } else {                   
                           return chalk.red.bold('Please enter path above as a string');
                       }            
                     }
                  }            
                ];

            inquirer.prompt(question); 

            } else {                
                    return 'Please enter a subject listed in JSON file';
            }  
          }
        }
      ];

    inquirer.prompt(question2);
                       
  }

}

//instantiate class ImportQuiz
myImport = new ImportQuiz();

//import quiz by Subject entered by user
myImport.importQuest('');

//module.exports = dependency;