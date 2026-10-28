// Notification Banner

const notification = document.getElementById("notification");
const closeNotification = document.getElementById("closeNotification");

closeNotification.addEventListener("click", function () {

    notification.style.display = "none";

});


// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// FAQ Functionality

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

            icon.textContent = "+";

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.textContent = "-";

        }

    });

});


// Modal Popup

const modal = document.getElementById("modal");

const openModal = document.getElementById("openModal");

const closeModal = document.getElementById("closeModal");


openModal.addEventListener("click", function () {

    modal.style.display = "flex";

});


closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});


// Close modal when clicking outside the modal box

window.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});


// Content Slider

const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}


nextBtn.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

});


prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

});


// Dark and Light Theme

const themeToggle = document.getElementById("themeToggle");


// Check saved theme when page loads

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeToggle.textContent = "☀️ Light Mode";

}


// Theme Button Click

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");


    if (document.body.classList.contains("dark-theme")) {

        themeToggle.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    }

});