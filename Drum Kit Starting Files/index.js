$(".drum").click(function (e) {
   makeSound(this.innerHTML);
   buttonAnimation(this.innerHTML);
});
$(document).keydown(function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    audio.play();
}

function buttonAnimation(currentKey){

    $("."+currentKey).addClass("pressed");
    setTimeout(function(){
        $("."+currentKey).removeClass("pressed");
    },100);
}