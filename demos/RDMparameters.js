//Sets up a variable that indicates the number of dots you want
// to be displayed for the task
var count = 150;
//Sets the size, in pixels, that you want the dots to be
var size = 1;     
//var RL = -1; //-1 for left; 1 for right
var RL = 1;
//var coherence = .5; //percent of dots moving in same direction
var coherence = .1;
var speed = 10; //number of pixels dots are moving
var RL_List = [-1,1];
var coherence_List = [.1,.2,.3,.4,.5,.6,.7];


// A Shuffling function used through code to shuffle arrays
function shuffling(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function nextTrial() {
    RL = shuffling(RL_List)[0];
    coherence = shuffling(coherence_List)[1];
}