const mp3 = new Audio("1.mp3");

const audioOn = document.querySelector(".bgmBtn1");
const audioOff = document.querySelector(".bgmBtn2");

function play() {
  mp3.play();
  mp3.loop = true;
  mp3.volume = 0.5;
  mp3.autoplay = true;
}

function off() {
  mp3.pause();
}

audioOn.addEventListener("click", play);
audioOff.addEventListener("click", off);
