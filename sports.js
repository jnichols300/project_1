// var questionSports = [
//       ["In South Dakota it's illegal to to fall down and sleep where?","A Cheese Factory","Mcdonalds","Your neighbors yard","A farm","A"],
//       ["What was Kool-Aid originally called?","Yum Juice","Fruit Smack","Purple Pizzazz","Fun Crush","B"],
//       ["What did the Q in Q-Tip originally stand for?","Queen","Quiz","Quick","Quality","D"],
//       ["What is the sum of all numbers on a roulette wheel?","500","745","666","116","C"],
//       ["What is the official plural of Prius?","Prii","Prie","Priey","Prius's","A"],
//       ["What doesn't the brand Jacuzzi sell?","Toilets","Chairs","Mattresses","Tubs","B"],
//       ["Who won the 2013 Tour de France?","Lance Armstrong","Louie Patooie","Chris Froome","Johnny Carooney","C"],
//       ["Where's waldo?","France","India","Microwave","USA","B"],
//       ["Kareem Abdul-Jabbar played 20 seasons in which sport?","Baseball","Soccer","Tennis","Basketball","D"],
//       ["In feet, how high is a basketball hoop?","10ft","20ft","8ft","11ft","A"]
// ];


function sportsC() {
    alert("I didn't get this far :(")
}

// Clock Countdown Trying

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
    var t = getTimeRemaining(endtime);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      alert("Time's Up!");
      containerQuestion();
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

var deadline = 'December 31 2015 00:00:60 UTC+0200';
initializeClock('clockdiv', deadline);
