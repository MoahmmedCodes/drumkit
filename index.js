let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML)
    });

}

document.addEventListener("keydown", function (event) {
    makeSound(event.key.toUpperCase());
    makeAnimation(event.key.toUpperCase());
});

function makeSound(key) {
    switch (key) {
        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "J":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "K":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "L":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        default:
    }
}
function makeAnimation (currentKey){
    let activeKey = document.querySelector("." + currentKey);
     activeKey.classList.add("pressed")
     setTimeout(function(){
        activeKey.classList.remove("pressed");
     }, 100);

}