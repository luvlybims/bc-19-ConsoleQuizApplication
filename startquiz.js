// //require the dependency to read json file
// var jsonfile = require('jsonfile');

//require the dependency to read user input
 var inquirer = require('inquirer');

 var chalk = require('chalk');

//require quiz.json in current directory
//var importquiz = './quiz.json';

//var filecontent = jsonfile.readFileSync(importquiz);
//var quizAnswer = require('./answers');
//var correctAnswer = new quizAnswer();

/** 
 * Class to import a new quiz from a JSON file
 * 
 */
//var TakeQuiz = function () {
function takeQuiz() {

	var question =
      [
        {
          name: 'response',
          type: 'input',
          message: chalk.cyan.bold('\ntakequiz <quiz_name>.....Please enter quiz subject to start quiz: '), 
          validate: function(subject) {
            if (subject === 'General' || subject === 'Computer') {
               console.log(`\n${subject} quiz starts now...\n`)

            process.exit();
             }
            else {                   
              return 'Please enter a subject listed in JSON file';
              process.exit();
            }
            }
}
];
inquirer.prompt(question);
    
	
    
//      process.exit();
// }
//             else {                   
//               return 'Please enter a subject listed in JSON file';
//               process.exit();
//             }
// }
// }
// ];
// inquirer.prompt(question);
}
takeQuiz();