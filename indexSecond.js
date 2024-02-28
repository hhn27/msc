const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".carousel-pagination .dot");
const items = document.querySelectorAll(".containerItemOut .outItem");
let currentIndex = 0;
const scrollDistance = 305;

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
      funtionItems.forEach((item) => {
        if (item !== this.parentElement) {
          item.querySelector(".fItemContent").classList.remove("show");
          item.querySelector(".iconDown").classList.remove("show");
          item.classList.remove("show");
        }
      });
      fItemContent.classList.toggle("show");
      iconDown.classList.toggle("show");
      this.parentElement.classList.toggle("show");
    });
  });
});
