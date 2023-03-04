const fanOff = document.getElementById("off");
const speedOne = document.getElementById("one");
const speedTwo = document.getElementById("two");
const speedThree = document.getElementById("three");
const speedControl = document.getElementById("fan-mid");

fanOff.addEventListener("click", function () {
  speedControl.style.animationIterationCount = "0";
});

speedOne.addEventListener("click", function () {
  speedControl.style.animationDuration = "0.5s";
  speedControl.style.animationIterationCount = "infinite";
});

speedTwo.addEventListener("click", function () {
  speedControl.style.animationDuration = "0.3s";
  speedControl.style.animationIterationCount = "infinite";
});

speedThree.addEventListener("click", function () {
  speedControl.style.animationDuration = "0.1s";
  speedControl.style.animationIterationCount = "infinite";
});
