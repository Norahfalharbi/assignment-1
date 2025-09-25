# Technical Documentation 

This document explains the technical implementation of my portfolio project, what I accomplished, and areas for improvement.

---

## 1. Code Overview

### 🔹 HTML (index.html)
- **Header & Navigation**
  - A `<header>` contains a `<nav>` with the site logo (`Portfolio`) on the left and navigation links (`About`, `Projects`, `Contact`) on the right.
  - Links use `href="#id"` anchors to scroll to each section.

- **Introduction Section**
  - Simple section with a greeting: “Hi I am Norah Alharbi.”
  - Connected to JavaScript to display a **time-based greeting** (Good Morning, Good Afternoon, Good Evening).

- **About Section**
  - Contains a short bio paragraph and a tagline list.
  - Structured using semantic tags (`<section>`, `<h2>`, `<p>`, `<ul>`).

- **Projects Section**
  - Projects are displayed in a **grid layout**.
  - Each project is inside a `.card` with three parts:
    1. `.card-media` → shows an image/logo.
    2. `.card-body` → includes project title and description.
    3. `.card-actions` → button for “Details” (currently no functionality).

- **Contact Section**
  - A contact form with three fields: Name, Email, and Message.
  - Uses `required` attributes for basic HTML validation.
  - Includes a submit button.

- **Footer**
  - Contains a “Back to top” link.
  - Displays the current year (set dynamically with JavaScript).

---

### 🔹 CSS (css/styles.css)
- **Theme Variables**
  - Uses `:root` custom properties for colors (background, text, accent, border, card).
  - Supports **dark mode** with `@media (prefers-color-scheme: dark)`.

- **Global Styles**
  - Reset margins/padding with `*`.
  - Applies `scroll-behavior: smooth` for smooth scrolling.
  - Sets font family (`Inter`, fallback to system-ui).

- **Layout**
  - `.section` → controls padding and max-width.
  - `.nav` → flexbox layout with space-between for logo and links.
  - `.projects-grid` → CSS Grid with two columns (1 column on mobile).
  - `.card` → hover effect with `translateY` and shadow.

- **Form Styles**
  - `.grid-2` → two-column layout for Name and Email, full width for Message.
  - Inputs and textarea styled with padding, rounded corners, and focus states.

- **Responsive Design**
  - Media query at 900px:
    - Introduction stacks vertically.
    - Projects grid changes to single column.
    - Form becomes single column.
    - Nav links adjust spacing.

---

### 🔹 JavaScript (js/script.js)
- **Greeting**
  - Gets current time with `new Date()`.
  - Decides between “Good Morning”, “Good Afternoon”, or “Good Evening.”
  - Displays greeting via an `alert` when the page loads.

- **Dynamic Footer Year**
  - Updates `<span id="year"></span>` with the current year automatically.

---

## 2. Current Strengths
- **Semantic structure** → uses `<header>`, `<main>`, `<section>`, `<footer>`.  
- **Responsive design** → works well on desktop and mobile.  
- **Dark mode ready** → adapts to user system settings.  
- **Interactive cards** → hover effect adds depth and interactivity.  
- **Time-based greeting** → dynamic element shows personalization.  
- **Auto-updating footer year** → no manual maintenance needed.  

---

## 3. Future Improvements
- **Projects Section**
  - Make “Details” buttons functional (link to GitHub repos or live demos).
  - Add more projects with images and consistent formatting.

- **Contact Form**
  - Connect to a backend service (e.g., Formspree, EmailJS, Node.js server) so submissions actually work.
  - Add better validation (e.g., email format check, error messages).

- **Introduction Section**
  - Replace alert-based greeting with text inside the hero section (alerts disrupt user experience).
  - Add a subheading/tagline under the name.

- **Navigation**
  - Highlight the active section in the navbar while scrolling.
  - Add a mobile menu toggle if more links are added.

- **Accessibility**
  - Add `aria-labels` and ensure good color contrast.
  - Improve keyboard navigation and focus styles.

- **Deployment**
  - Deploy on GitHub Pages, Netlify, or Vercel for easy access.

---

## 4. Problems
- **Greeting alert** → pops up every time the page loads.  
- **Contact form** → no backend, so the form doesn’t send messages.  
- **Accessibility** → needs more testing (screen readers, keyboard navigation).  
- **“Details” buttons** → no action assigned yet.  

---

