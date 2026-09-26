// ===== BUTTON SOUND =====

const clickSound = new Audio(
    "data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAAAA/////wAAAP///wAAAP///wAAAP///w=="
);


// ===== ADD VALUE =====

function addValue(value) {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    document.getElementById("display").value += value;
}


// ===== CLEAR =====

function clearDisplay() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    document.getElementById("display").value = "";
}


// ===== DELETE LAST =====

function deleteLast() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}


// ===== CALCULATE =====

function calculate() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
