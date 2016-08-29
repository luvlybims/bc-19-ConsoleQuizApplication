//require the dependency to read json file
var jsonfile = require('jsonfile');

//require the dependency to read user input
var inquirer = require('inquirer');

var quizAnswer = require('./answers');

//require quiz.json in current directory
var importquiz = './quiz.json';

var filecontent = jsonfile.readFileSync(importquiz);

var correctAnswer = new quizAnswer();

function answerQuiz(subject) {
  if (subject === 'General' || subject === 'Computer') {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < filecontent[subject].length; i++) {  
      var question = filecontent[subject][i]['question'];
      arr1.push(question);
      console.log('\n' +arr1[i]);
      var options = filecontent[subject][i]['options'];
      arr2.push(options);
      console.log(arr2[i]);   
    }
  }
}
answerQuiz('General');