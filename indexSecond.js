const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".carousel-pagination .dot");
const items = document.querySelectorAll(".containerItemOut .outItem");
let currentIndex = 0;
const scrollDistance = 325;

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

setInterval(showNextSlideF, 5000);
