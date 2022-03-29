"use strict";

const mainBody = document.querySelector("body");
const navToggle = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");
const bookmarkBtn = document.getElementById("bookmark-btn");
const bookmarkContent = document.querySelector(".bookmark__content");
const openPledgeModal = document.querySelectorAll(".select-pledge");
const closeModal = document.querySelectorAll(".close-modal");
const pledgeModal = document.getElementById("modal-pledge");
const radioGroup = document.querySelectorAll(".pledge__radio");

const mastercraft = {
  totalBacked: 89914,
  totalBackers: 5007,
  type: { standard: 101, black: 64, mahogany: 1 },
};

const restartRadio = function () {
  radioGroup.forEach((radio) => {
    radio.closest(".pledge-item").classList.remove("pledge-item--focused");
  });
};

navToggle.addEventListener("click", function () {
  navBar.classList.toggle("nav--expanded");
  overlay.classList.toggle("hidden");
});

bookmarkBtn.addEventListener("click", function () {
  bookmarkBtn.parentElement.classList.toggle("bookmark--active");
  if (bookmarkBtn.parentElement.classList.contains("bookmark--active")) {
    bookmarkContent.textContent = "Bookmarked";
  } else bookmarkContent.textContent = "Bookmark";
});

radioGroup.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      restartRadio();
      this.closest(".pledge-item").classList.add("pledge-item--focused");
    }
  });
});

openPledgeModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    restartRadio();
    mainBody.classList.add("non-scrollable");
    const pledgeType = document.getElementById(`pledge-${btn.dataset.pledge}`);
    pledgeType.checked = "true";
    pledgeType.closest(".pledge-item").classList.add("pledge-item--focused");
    pledgeModal.classList.remove("hidden");
  });
});

closeModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    mainBody.classList.remove("non-scrollable");
    btn.closest(".modal").classList.add("hidden");
  });
});
