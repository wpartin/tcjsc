"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", showModal);

btnCloseModal.addEventListener("click", hideModal);

overlay.addEventListener("click", hideModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    hideModal();
});
