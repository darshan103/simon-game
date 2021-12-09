var gamePattern = [];

var userClickedPattern = [];

//step 2 : Creating Array
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {

    // step 1 : Creating Random Number
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    //step 3: Choosing Random color
    var randomChosenColor = buttonColors[randomNumber];

    //step 4 : add random color to empty array
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
}

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});