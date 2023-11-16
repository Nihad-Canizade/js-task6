// Text
let headdiv = document.getElementById('ex-div');
let text = document.getElementById('h4');
// Font size buttons
let btn1 = document.getElementById('fsBtnPlus');
let btn2 = document.getElementById('fsBtnMinus');
// Border radius buttons
let btn3 = document.getElementById('brBtnPlus');
let btn4 = document.getElementById('brBtnMinus');
// Height buttons
let btn5 = document.getElementById('hBtnPlus');
let btn6 = document.getElementById('hBtnMinus');
// Width buttons
let btn7 = document.getElementById('wBtnPlus');
let btn8 = document.getElementById('wBtnMinus');
// Text color
let textcolor = document.getElementById('textColor');
// Background color
let bgcolor = document.getElementById('bgColor');
// Reset button
let rst = document.getElementById('reset');

let size = 20;
let brradius = 0;
let height = 50;
let width = 150;

// Font Size
btn1.addEventListener('click', () => {
    size = size + 5;
    text.style.fontSize = size + "px";
})

btn2.addEventListener('click', () => {
    size = size - 5;
    text.style.fontSize = size + "px";
})

// Border Radius
btn3.addEventListener('click', () => {
    brradius = brradius + 5;
    headdiv.style.borderRadius = brradius + "px";
})

btn4.addEventListener('click', () => {
    brradius = brradius - 5;
    headdiv.style.borderRadius = brradius + "px";
})

// Height
btn5.addEventListener('click', () => {
    height = height + 5;
    headdiv.style.height = height + "px";
})

btn6.addEventListener('click', () => {
    height = height - 5;
    headdiv.style.height = height + "px";
})

// Width
btn7.addEventListener('click', () => {
    width = width + 5;
    headdiv.style.width = width + "px";
})

btn8.addEventListener('click', () => {
    width = width - 5;
    headdiv.style.width = width + "px";
})

// Text Color
textcolor.addEventListener('input', () => {
    headdiv.style.color = textcolor.value;
})

// Background Color
bgcolor.addEventListener('input', () => {
    headdiv.style.backgroundColor = bgcolor.value;
})

// Reset
rst.addEventListener('click', () => {
    text.style.fontSize = "";
    headdiv.style.borderRadius = "";
    headdiv.style.height = "";
    headdiv.style.width = "";
    headdiv.style.color = "";
    headdiv.style.backgroundColor = "";
})


