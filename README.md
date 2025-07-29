# 🎨 Color Changer Web App

This is a simple and fun color-changing web application built with **HTML**, **CSS**, and **JavaScript**. Clicking the button generates a new random background color inside the color box using RGB values.

---

## 🚀 Features

- Interactive button to generate random colors.
- Dynamic use of RGB values for vibrant visuals.
- Linear gradient background with softened transparency to avoid color clash.
- Clean and minimal design with responsive layout basics.

---

## 📁 Project Structure
Color-Changer/
│
├── index.html # Main HTML file
├── style.css # Styling and layout
├── main.js # JavaScript logic for changing color
└── README.md # Project description (you’re here)


----
## 💡 How It Works

- The `DOMContentLoaded` event ensures the DOM is ready before attaching any event listeners.
- A `rndInt(min, max)` function generates random numbers between 0 and 255.
- On button click, it updates the `#color-box` background using a random `rgb()` color string.
- The page background uses a multi-color linear gradient with reduced opacity to ensure the color box stands out.
