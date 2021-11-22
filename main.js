/*jshint esversion: 6 */

const menu = document.querySelector("#nav-toggle");
const list = document.querySelector(".links");

menu.addEventListener("click", () => {
  list.classList.toggle("show-links");
});
