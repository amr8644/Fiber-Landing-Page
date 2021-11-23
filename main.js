/*jshint esversion: 6 */

const people = [
  {
    name: "Mathew Higgins",
    image: "./images/User Avatar 2.svg",
    salary: "$20k in revenue",
    comment: ` I have been getting A LOT of leads ever since I used Fiber's premade
    templates, now I just need to work on my casestudies and I'll be ready
    to go!`,
    button: "View Mathew's Portfolio",
  },
  {
    name: "Sarah Andrews",
    image: "./images/User Avatar.svg",
    salary: "$100k in revenue",
    comment: `Setting up my portfolio with Fiber took no more than 
    10 minutes. Since then, my portfolio has attracted a lot of clients 
    and me more then $100K`,
    button: "View Sarah's Portfolio",
  },
  {
    name: "Janice Dave",
    image: "./images/User Avatar 32.svg",
    salary: "$30K in revenue",
    comment: `I only started freelancing this have already made
     more than I ever in my full-time job. The templates
    are amazing`,
    button: "View Janice's Portfolio",
  },
];

const menu = document.querySelector("#nav-toggle");
const list = document.querySelector(".links");

const reviewImage = document.querySelector("#review-image");
const reviewName = document.querySelector("#review-name");
const reviewSalary = document.querySelector("#review-salary");
const reviewComment = document.querySelector("#review-comment");
const reviewButton = document.querySelector("#review-btn");
const nextButton = document.querySelector("#next-btn");
const prevButton = document.querySelector("#prev-btn");

let count = 0;

const changePeople = () => {
  const item = people[count];
  reviewImage.src = item.image;
  reviewName.textContent = item.name;
  reviewSalary.textContent = item.salary;
  reviewComment.textContent = item.comment;
  reviewButton.textContent = item.button;
};

window.addEventListener("DOMContentLoaded", () => {
  changePeople(count);
});

nextButton.addEventListener("click", () => {
  count++;
  if (count > people.length - 1) {
    count = 0;
  }
  changePeople(count);
});
prevButton.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = people.length - 1;
  }
  changePeople(count);
});

menu.addEventListener("click", () => {
  list.classList.toggle("show-links");
});
