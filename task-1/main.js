let signin = document.querySelector(".signin-div");
let signup = document.querySelector(".signup-div");
let createAccount = document.querySelector(".create-account");
let signup_cross = document.querySelector(".signup-cross");
let login_cross = document.querySelector(".login-cross");
let leave_btn = document.querySelector(".leave-btn");
let heroBtn1 = document.querySelector(".hero-btn-1");
let heroBtn2 = document.querySelector(".hero-btn-2");
let filterBtn = document.querySelector(".filter-btn");
let createText1 = document.querySelector(".create-text-1");
let createText2 = document.querySelector(".create-text-2");
let signupText1 = document.querySelector(".signup-text-1");
let signupText2 = document.querySelector(".signup-text-2");
let joingrp = document.querySelector(".hero-btn-1");
let join_btn = document.querySelector(".join-btn");

createAccount.addEventListener("click", (e) => {
  signin.classList.toggle("visible");
});

login_cross.addEventListener("click", (e) => {
  signin.classList.toggle("visible");
});
signup_cross.addEventListener("click", (e) => {
  signup.classList.toggle("visible");
});

createText1.addEventListener("click", (e) => {
  changeText();
});
createText2.addEventListener("click", (e) => {
  changeText();
});
signupText1.addEventListener("click", (e) => {
  changeText();
});
signupText2.addEventListener("click", (e) => {
  changeText();
});
joingrp.addEventListener("click", (e) => {
  signup.classList.toggle("visible");
});
function changeText() {
  console.log("hello");
  signup.classList.toggle("visible");
  signin.classList.toggle("visible");
}

leave_btn.addEventListener("click", (e) => {
  leave_btn.classList.toggle("visible");
  join_btn.classList.toggle("visible");
});
join_btn.addEventListener("click", (e) => {
  leave_btn.classList.toggle("visible");
  join_btn.classList.toggle("visible");
  signup.classList.toggle("visible");
});

heroBtn1.addEventListener("click", (e) => {
  heroBtn1.classList.toggle("visible");
  heroBtn2.classList.toggle("visible");
});
heroBtn2.addEventListener("click", (e) => {
  heroBtn1.classList.toggle("visible");
  heroBtn2.classList.toggle("visible");
});

filterBtn.addEventListener("click", (e) => {
  document.querySelector(".filter-type").classList.toggle("visible");
});
