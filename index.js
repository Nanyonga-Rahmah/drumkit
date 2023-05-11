let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; ++i) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = document.querySelectorAll(".drum")[i];
    console.log(buttonInnerHtml);
    makesound(buttonInnerHtml.innerHTML);
    animation(buttonInnerHtml.innerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      let kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "a":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      alert("sound doesn't exist");
  }
}
function animation(currentkey) {
  let active = document.querySelector("." + currentkey);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
