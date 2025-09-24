// Helpers
const $ = (sel) => document.querySelector(sel);

// Greeting + year (optional niceties)
function setYear() {
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = y;
}

// Mobile menu
function mobileMenu() {
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");
  if (!burger || !menu) return;
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("show");
  });
}

// Simple “toast” demo buttons
function toasts() {
  document.querySelectorAll("[data-toast]").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = btn.getAttribute("data-toast") || "Clicked!";
      alert(msg);
    });
  });
}

// Contact form validation (client-side demo)
function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    const name = $("#name");
    const email = $("#email");
    const message = $("#message");
    const nameError = $("#nameError");
    const emailError = $("#emailError");
    const messageError = $("#messageError");

    // Name
    if (!name.value.trim()) {
      ok = false; nameError.textContent = "Please enter your name."; name.focus();
    } else nameError.textContent = "";

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      ok = false; emailError.textContent = "Please enter a valid email."; if (ok) email.focus();
    } else emailError.textContent = "";

    // Message
    if (!message.value.trim()) {
      ok = false; messageError.textContent = "Please enter a message."; if (ok) message.focus();
    } else messageError.textContent = "";

    if (ok) {
      alert("Thanks! This demo form doesn't send messages, but validation passed.");
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  mobileMenu();
  toasts();
});

