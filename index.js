const slider = document.getElementById("slider");
function leftSlider() {
  console.log("left");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft - 1920;
  }
}
function rightSlider() {
  console.log("right");
  if (slider) {
    slider.scrollLeft = slider.scrollLeft + 1920;
  }
}

function showNextSlide() {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1920;
  }
}

setInterval(showNextSlide, 5000);

const sliderF = document.getElementById("silderF");
function leftSliderF() {
  console.log("left");
  if (sliderF) {
    sliderF.scrollLeft = sliderF.scrollLeft - 1920;
  }
}
function rightSliderF() {
  console.log("right");
  if (sliderF) {
    sliderF.scrollLeft = sliderF.scrollLeft + 1920;
  }
}

function showNextSlideF() {
  console.log(sliderF);
  if (window.innerWidth < 768) {
    if (sliderF.scrollLeft + sliderF.clientWidth >= sliderF.scrollWidth) {
      sliderF.scrollLeft = 0;
    } else {
      sliderF.scrollLeft += 350;
    }
  } else {
    if (sliderF.scrollLeft + sliderF.clientWidth >= sliderF.scrollWidth) {
      sliderF.scrollLeft = 0;
    } else {
      sliderF.scrollLeft += 420;
    }
  }
}

setInterval(showNextSlideF, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const headersSM = document.querySelectorAll(".headerSM");

  headersSM.forEach((headerSM) => {
    headerSM.addEventListener("click", function () {
      const serMContent = this.parentElement.querySelector(".serMContent");
      serMContent.classList.toggle("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const headersSM = document.querySelectorAll(".headerSM");

  headersSM.forEach((headerSM) => {
    headerSM.addEventListener("click", function () {
      const iconSM = this.parentElement.querySelector(".iconSM");
      iconSM.classList.toggle("show");
    });
  });
});
