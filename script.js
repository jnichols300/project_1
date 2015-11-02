// window.onload = function() {

var  plHldr = 0,
          container,
          triviaCont,
          question,
          choice,
          choices,
          choiceA,
          choiceB,
          choiceC,
          choiceD,
          correct=0;
// Don't need initial values for these
var score = 0;
var highscore = 0;
var questions = [
      ["In South Dakota it's illegal to to fall down and sleep where?","A Cheese Factory","Mcdonalds","Your neighbors yard","A farm","A"],
      ["What was Kool-Aid originally called?","Yum Juice","Fruit Smack","Purple Pizzazz","Fun Crush","B"],
      ["What did the Q in Q-Tip originally stand for?","Queen","Quiz","Quick","Quality","D"],
      ["What is the sum of all numbers on a roulette wheel?","500","745","666","116","C"],
      ["What is the official plural of Prius?","Prii","Prie","Priey","Prius's","A"],
      ["What doesn't the brand Jacuzzi sell?","Toilets","Chairs","Mattresses","Tubs","B"],
      ["How much of the human brain is water?","70%","65%","85%","90%","C"]
];
// I would like to recommend using hashes in lieu of the array here. Often times indexing by integers can be cryptic. If we use an object instead we can start indexing with more semantic strings like choiceA, choiceB, correctAnswer, question so on and so forth. THe possibilities are limitless. If I were to add another characteristic to your questions in your current format, I'd have to pause for a bit to jsut make sure I got the index right. If we use objects, we can just add another key value pair.

// Defining Variables
function grabEle(retrieve) {
  return document.getElementById(retrieve);
}
// Asking the Question
function containerQuestion() {
  container = grabEle("container");
  if(plHldr >= questions.length) {
      container.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      grabEle("triviaCont").innerHTML = "You're Done!";
      plHldr = 0;
      correct = 0;
      return false;
  }
  grabEle("triviaCont").innerHTML = "Question "+(plHldr+1)+" of "+questions.length;  // Shows which question is up top
  question = questions[plHldr][0];  // should be straightforward
  choiceA = questions[plHldr][1];
  choiceB = questions[plHldr][2];
  choiceC = questions[plHldr][3];
  choiceD = questions[plHldr][4];
  container.innerHTML = "<h3>"+question+"</h3>";
  container.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";// Use value in order to get the correct score which isn't working
  container.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
  container.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br>";
  container.innerHTML += "<input type='radio' name='choices' value='D'> "+choiceD+"<br><br>";
  container.innerHTML += "<button onclick='scoreCheck ()' >Submit Answer</button>";
  // I think it'd be nice to abstract the DOM manipulation here into a method. Maybe generateAnswers or something
}
// Why are you broken
function scoreCheck() {
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if(choice == question[plHldr][5]) {
         correct++;
    }
    else {
      alert("Wrong");
    }
    plHldr++;
    containerQuestion();
}
window.addEventListener("load", containerQuestion, false);
// }
// function fSubmit() {
//       var correctanswer = document.getElementById('q-1')
//       if (correctanswer.checked === true) {
//         alert("Correct!")
//       }
//       else {
//         alert("Incorrect.")
//       }
//
// }

// make sure to get rid of any extra code you have when you go to production.
