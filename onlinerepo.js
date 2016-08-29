var firebase = require("firebase");

quizData = function (id, question, options, answer) {
    var config = {
    apiKey: "AIzaSyAMkyBqzm1xdzlbJ8vVTGBF00BYoH6EUVA",
    authDomain: "quiz-application-874a0.firebaseapp.com",
    databaseURL: "https://quiz-application-874a0.firebaseio.com",
    storageBucket: "quiz-application-874a0.appspot.com",
  };
  firebase.initializeApp(config);

    var myDB = firebase.database();  
    var quizRef = myDB.ref('Subject');
    quizRef.push({	
        Biology: {
            id: id,
            question: question,
            options: options,
            answer: answer
     }
    })       
}
quizData(2, 'Which of these is a reptile?', 'a: cat, b: table, c: snake ', 'c');
