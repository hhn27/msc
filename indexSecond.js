const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".carousel-pagination .dot");
const items = document.querySelectorAll(".containerItemOut .outItem");
let currentIndex = 0;
const scrollDistance = 330;

function autoPlay() {
  if (currentIndex >= items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  const scrollAmount = currentIndex * scrollDistance;
  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
  updatePagination();
}

function updatePagination() {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

setInterval(autoPlay, 3000);
document.addEventListener("DOMContentLoaded", function () {
  const fItemHeader = document.querySelectorAll(".fItemHeader");

  fItemHeader.forEach((fItemHeader) => {
    fItemHeader.addEventListener("click", function () {
      const fItemContent = this.parentElement.querySelector(".fItemContent");
      const iconDown = this.parentElement.querySelector(".iconDown");
      const funtionItems = document.querySelectorAll(".funtionItem");
      const iconDowns = document.querySelectorAll(".iconDown");

      // Close all items first
      funtionItems.forEach((item) => {
        if (item !== this.parentElement) {
          item.querySelector(".fItemContent").classList.remove("show");
          item.querySelector(".iconDown").classList.remove("show");
          item.classList.remove("show");
        }
      });

      // Toggle current item
      fItemContent.classList.toggle("show");
      iconDown.classList.toggle("show");
      this.parentElement.classList.toggle("show");
    });
  });
});
const sliderS = document.getElementById("sliderS");
function leftSlider() {
  console.log("left");
  if (sliderS) {
    sliderS.scrollLeft = sliderS.scrollLeft - 1920;
  }
}
function rightSlider() {
  console.log("right");
  if (sliderS) {
    sliderS.scrollLeft = sliderS.scrollLeft + 1920;
  }
}

function showNextSlideS() {
  if (sliderS.scrollLeft + sliderS.clientWidth >= sliderS.scrollWidth) {
    sliderS.scrollLeft = 0;
  } else {
    sliderS.scrollLeft += 1780;
  }
}

setInterval(showNextSlideS, 5000);

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
      sliderF.scrollLeft += 340;
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
