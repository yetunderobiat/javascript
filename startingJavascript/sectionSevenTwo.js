"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

for (let i = 0; i < btnOpenModal.clientHeight; i++) 
    console.log(btnOpenModal[i].textContent);
