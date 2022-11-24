var sliderSlide = document.querySelector(".slider-slide");
var sliderImg = document.querySelectorAll(".slider-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let count = 1;
const size = sliderImg[0].clientWidth;

sliderSlide.style.transform = "translateX(" + -size * count + "px)";

nextBtn.addEventListener("click", () => {
  sliderSlide.style.transition = "transform 0.4s ease-in-out";
  count++;
  sliderSlide.style.transform = "translateX(" + -size * count + "px)";
});
prevBtn.addEventListener("click", () => {
  sliderSlide.style.transition = "transform 0.4s ease-in-out";
  count--;
  sliderSlide.style.transform = "translateX(" + -size * count + "px)";
});
sliderSlide.addEventListener("transitionend", () => {
  if (sliderImg[count].id === "lastClone") {
    sliderSlide.style.transition = "none";
    count = sliderImg.length - 2;
    sliderSlide.style.transform = "translateX(" + -size * count + "px)";
  }
  if (sliderImg[count].id === "firstClone") {
    sliderSlide.style.transition = "none";
    count = sliderImg.length - count;
    sliderSlide.style.transform = "translateX(" + -size * count + "px)";
  }
});
