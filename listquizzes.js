//require the dependency to style quiz name
//var chalk = require('chalk');

//require the dependency to read json file
var jsonfile = require("jsonfile");


var quizfile = "./quiz.json";

/** 
 * Class to list quizzes in quiz.json file
 * 
 */
// var ListQuiz = function () {	
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
