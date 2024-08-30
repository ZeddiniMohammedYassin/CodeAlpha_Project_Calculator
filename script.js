const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let ch = ""; // Current input or result
let test = false; // Flag to handle input states

// Handle keyboard input
window.addEventListener('load', function() {
    document.addEventListener('keydown', function(event) {
        const keyInput = event.key;
        if ((keyInput >= "0" && keyInput <= "9") || ["+", "-", "*", "%", "/", "Enter", "Backspace", "="].includes(keyInput)) {
            calculate(keyInput);
        }
    });
});

// Main calculation function
const calculate = (btnValue) => {
    if ((ch == "" && ["AC", "DEL", "Backspace", "+", "-", "*", "%", "/", "=", "Enter"].includes(btnValue)) || btnValue == "AC" || (btnValue == "DEL" && test == true)) {
        ch = "";
        test = false;
    } else if (["+", "-", "*", "%", "/"].includes(ch[ch.length - 1]) && ["+", "-", "*", "%", "/", "=", "Enter"].includes(btnValue)) {
        ch = ch;
        test = false;
    } else if (btnValue == "=" || btnValue == "Enter") {
        ch = eval(ch);
        test = true;
    } else if ((btnValue == "DEL" || btnValue == "Backspace") && test == false) {
        ch = ch.substring(0, ch.length - 1);
        test = false;
    } else if (["+", "-", "*", "%", "/", "=", "Enter"].includes(btnValue)) {
        ch += btnValue;
        test = false;
    } else if (btnValue == "Backspace" && test == true) {
        ch = "";
        test = false;
    } else if (test == true) {
        ch = btnValue;
        test = false;
    } else {
        ch += btnValue;
    }
    display.value = ch;
};

// Handle button clicks
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Toggle dark mode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    container.classList.toggle('dark');
    display.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');
});