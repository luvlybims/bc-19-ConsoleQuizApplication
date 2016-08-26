//require the dependency to read user input
var inquirer = require("inquirer");

//require listquizzes.js in this directory
var listQuiz = require("./listquizzes");

var newList = new listQuiz();

/** 
 * prompt the user to enter option 'l' to list quizzes, and then call this.list() to list the quizzes in quiz.json 
 */
this.optionList = function () {  
    var question = 
    [
       {
    	    name: "response",
    	    type: "input",
    	    message: "\nlistquizzes.....Please enter 'l' to list quizzes: ",
    	    validate: function(option) {
    		    if (option === 'l') {    			
    			    console.log("\n\nQuizzes are listed below by Subject: ");
    			
                    //call this.list() in listquizzes.js
                    newList.list();

    		    } 		       
    		    else {
                    return "Please enter 'l' above to list quizzes";
                }
    		
    	    }
        } 
    ];
    inquirer.prompt(question);       
}
this.optionList();
