// window.onload = function() {

var score = 0;
var highscore = 0;
var questions = [
      ["In South Dakota it's illegal to to fall down and sleep where?","A Cheese Factory","Mcdonalds","Your neighbors yard","A farm","A"],
      ["What was Kool-Aid originally called?","Yum Juice","Fruit Smack","Purple Pizzazz","Fun Crush","B"],
      ["What did the Q in Q-Tip originally stand for?","Queen","Quiz","Quick","Quality","D"],
      ["What is the sum of all numbers on a roulette wheel?","500","745","666","116","C"],
      ["What is the official plural of Prius?","Prii","Prie","Priey","Prius's","A"],
      ["What doesn't the brand Jacuzzi sell?","Toilets","Chairs","Mattresses","Tubs","B"],
      ["Who won the 2013 Tour de France?","Lance Armstrong","Louie Patooie","Chris Froome","Johnny Carooney","C"],
      ["Where's waldo?","France","India","Microwave","USA","B"],
      ["Kareem Abdul-Jabbar played 20 seasons in which sport?","Baseball","Soccer","Tennis","Basketball","D"],
      ["In feet, how high is a basketball hoop?","10ft","20ft","8ft","11ft","A"]
];
var  plHldr = 0,        // Don't need initial values for these
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
// Defining Variables
function grabEle(retrieve) {
  return document.getElementById(retrieve);
}
// Used to call throughout code
function scoreCheck() {
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
          }
    }
    if(choice == questions[plHldr][5]) {
         correct++;
       }
    else {
      console.log("Wrong!");

    }
    plHldr++;
    containerQuestion();
}
// Asking the Question
function containerQuestion() {
  container = grabEle("container");
  if(plHldr >= questions.length) {
      container.innerHTML = "<h2>You got " +correct+ " right!</h2>";   // Returning end amount of answers

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
