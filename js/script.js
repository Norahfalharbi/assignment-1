// Helpers
const $ = (sel) => document.querySelector(sel);

function setGreeting() {
  const h = new Date().getHours();
  const el = $("#greeting");
  if (!el) return;
  let msg = "Hello";
  if (h < 12) msg = "Good morning";
  else if (h < 18) msg = "Good afternoon";
  else msg = "Good evening";
  el.textContent = msg + " 👋";
}

function setYear() {
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = y;
}

function smoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function themeToggle() {
  const btn = document.getElementById("themeToggle");
  const root = document.documentElement;
  const isLight = localStorage.getItem("theme") === "light";
  root.classList.toggle("light", isLight);
  btn.setAttribute("aria-pressed", isLight ? "true" : "false");
  btn.addEventListener("click", () => {
    const currentIsLight = !document.documentElement.classList.toggle("light") ? false : true;
    // If class was added, it's light; if removed, it's dark
    const nowLight = document.documentElement.classList.contains("light");
    localStorage.setItem("theme", nowLight ? "light" : "dark");
    btn.setAttribute("aria-pressed", nowLight ? "true" : "false");
  });
}

function mobileMenu() {
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("navMenu");
  burger?.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("show");
  });
}

function toasts() {
  document.querySelectorAll("[data-toast]").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = btn.getAttribute("data-toast") || "Clicked!";
      alert(msg);
    });
  });
}

// Simple client-side form validation
function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Name
    if (!name.value.trim()) {
      ok = false;
      nameError.textContent = "Please enter your name.";
      name.focus();
    } else nameError.textContent = "";

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      ok = false;
      emailError.textContent = "Please enter a valid email.";
      if (ok) email.focus();
    } else emailError.textContent = "";

    // Message
    if (!message.value.trim()) {
      ok = false;
      messageError.textContent = "Please enter a message.";
      if (ok) message.focus();
    } else messageError.textContent = "";

    if (ok) {
      alert("Thanks! This demo form doesn't send messages, but validation passed.");
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setGreeting();
  setYear();
  smoothNav();
  themeToggle();
  toasts();
  contactForm();
  mobileMenu();
});

