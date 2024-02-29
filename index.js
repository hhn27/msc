document.addEventListener("DOMContentLoaded", function () {
  const headersSM = document.querySelectorAll(".headerSM");

  headersSM.forEach((headerSM) => {
    headerSM.addEventListener("click", function () {
      const serMContents = document.querySelectorAll(".serMContent");
      const iconSMs = document.querySelectorAll(".iconSM");

      serMContents.forEach((serMContent) => {
        if (serMContent !== this.parentElement.querySelector(".serMContent")) {
          serMContent.classList.remove("show");
        }
      });

      iconSMs.forEach((iconSM) => {
        if (iconSM !== this.parentElement.querySelector(".iconSM")) {
          iconSM.classList.remove("show");
        }
      });

      const serMContent = this.parentElement.querySelector(".serMContent");
      serMContent.classList.toggle("show");

      const iconSM = this.parentElement.querySelector(".iconSM");
      iconSM.classList.toggle("show");
    });
  });
});
// calender
const daysContainer = document.getElementById("daysContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const monthYear = document.getElementById("monthYear");
const dateInput = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");
const dateInputValue = document.getElementById("dateInputValue");
let currentDate = new Date();
let selectedDate = null;

function handleDayClick(day) {
  selectedDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    day
  );
  dateInputValue.innerHTML = selectedDate.toLocaleDateString("en-US");
  calendar.style.display = "none";
  dateInputValue.style.color = "black";
  renderCalendar();
}

function createDayElement(day) {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  const dayElement = document.createElement("div");
  dayElement.classList.add("day");

  if (date.toDateString() === new Date().toDateString()) {
    dayElement.classList.add("current");
  }
  if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
    dayElement.classList.add("selected");
  }

  dayElement.textContent = day;
  dayElement.addEventListener("click", () => {
    handleDayClick(day);
  });
  daysContainer.appendChild(dayElement);
}

function renderCalendar() {
  daysContainer.innerHTML = "";
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  monthYear.textContent = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  for (let day = 1; day <= lastDay.getDate(); day++) {
    createDayElement(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

dateInput.addEventListener("click", () => {
  calendar.style.display = "block";
  positionCalendar();
});

document.addEventListener("click", (event) => {
  if (!dateInput.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
});

function positionCalendar() {
  const inputRect = dateInput.getBoundingClientRect();
  calendar.style.top = 100 + "%";
  calendar.style.left = 0;
}

window.addEventListener("resize", positionCalendar);

renderCalendar();
