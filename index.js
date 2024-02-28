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
