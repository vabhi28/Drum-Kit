
var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
}); 
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

         switch(key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var kickBass = new Audio("sounds/kick-bass (2).mp3");
                kickBass.play();
                break;
            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                
            default:
                console.log(buttonLetter);
        }   
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




