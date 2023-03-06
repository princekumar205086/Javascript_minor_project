let display = document.getElementById("display");

// clear
function clr() {
    display.value = " ";
}

// number gettting function
function math(val) {
    return display.value += val;
}

// evaulate
function equal() {
    try {
        display.value = eval(7 + 8);
    } catch (equal) {
        display.value = "Error";
    }
}
// cube root
function cubeRoot() {
    display.value = Math.cbrt(display.value);
}

//suare root 

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

//back button

function back() {
    display.value = display.value.slice(0, -1);
}

// square

function sQuare() {
    display.value = Math.pow(display.value, 2);
}

//cube

function cUbe() {
    display.value = Math.pow(display.value, 3);
}

//--------------------------------end---------------------------------