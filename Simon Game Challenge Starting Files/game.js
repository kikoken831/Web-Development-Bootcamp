colors = ['red','blue','green','yellow'];
gameSequence = [];
userSequence = [];
level = 0;
started = false;
$(document).keydown(function (e) {
    started = true;
    $("h1").text("Level " + level);
    nextSequence();
});
$(".btn").click(function (e) {

    makeSound($(this).attr("id"));
    animateButton($(this).attr("id"));
    userSequence.push($(this).attr("id"));
    checkAnswer(userSequence.length - 1);

});
function checkAnswer(currentLevel)
{
    if(userSequence[currentLevel] === gameSequence[currentLevel])
    {
        if(userSequence.length === gameSequence.length)
        {
            userSequence = [];
            setTimeout(function() {
                nextSequence();

            },1000);

        }
    }
    else{
        wrong();
        level = 0;
        gameSequence = [];
        userSequence = [];
    }
}
function nextSequence()
{
    if(started)
    {
        level++;
        $("h1").text("Level " + level);
        var c = getRandom();
        makeSound(colors[c]);
        animateButton(colors[c]);
        gameSequence.push(colors[c]);
    }

}

function makeSound(currentKey)
{
    var audio = new Audio(`sounds/${currentKey}.mp3`);
    audio.play()
}

function animateButton(currentKey)
{
    $(`.${currentKey}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function getRandom(){
    return Math.floor(Math.random()*4);
}

function wrong(){
    $("body").addClass("game-over");
    $("h1").text("Wrong answer, press A key to start again");
    setTimeout(function () {
        $("body").removeClass("game-over");
      },1000)
    makeSound("wrong");
    started = false;
}