var buttonsDrum = document.querySelectorAll(".drum").length;
for (i=0;i < buttonsDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var keyValue = this.innerHTML;
        makeSound (keyValue);
        buttonAnim(keyValue);
})}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnim(event.key);
})
function makeSound (key){
    switch (key) {
        case "w":
                new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
                 new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
                new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
                new Audio("./sounds/tom-1.mp3").play();
            break;    
        case "j":
                new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
                new Audio("./sounds/tom-3.mp3").play();
            break;
         case "l":
                new Audio("./sounds/tom-4.mp3").play();
            break;

            default:
                console.log (key);
            break;
    }
}
function buttonAnim(currentKey){
    var forButton = document.querySelector("." + currentKey);
    forButton.classList.add("pressed");
    setTimeout(function(){
        forButton.classList.remove("pressed");
    }, 2);
}