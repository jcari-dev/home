let display = [];
let num1 = "1";
let num2 = "2";
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;
let num0 = 0;
let dot = "."
let plus = "+";
let minus = "-";
let multi = "*";
let divi = "/";
let operator = 0;

function darkmode(){

document.body.style.backgroundColor = "#000000";
document.getElementById("li1").style.color = "#f5f0ff";
document.getElementById("li2").style.color = "#f5f0ff"; //hated to this LOL
document.getElementById("li3").style.color = "#f5f0ff";

}

function btn1show() {
    display.push(num1);
    document.getElementById('display').innerHTML = display.join('');
}

function btn2show() {
    display.push(num2);
    document.getElementById('display').innerHTML = display.join('');
}

function btn3show() {
    display.push(num3);
    document.getElementById('display').innerHTML = display.join('')
}

function btn4show() {
    display.push(num4);
    document.getElementById('display').innerHTML = display.join('')
}

function btn5show() {
    display.push(num5);
    document.getElementById('display').innerHTML = display.join('')
}

function btn6show() {
    display.push(num6);
    document.getElementById('display').innerHTML = display.join('')
}

function btn7show() {
    display.push(num7);
    document.getElementById('display').innerHTML = display.join('')
}

function btn8show() {
    display.push(num8);
    document.getElementById('display').innerHTML = display.join('')
}

function btn9show() {
    display.push(num9);
    document.getElementById('display').innerHTML = display.join('')
}

function btn0show() {
    display.push(num0);
    document.getElementById('display').innerHTML = display.join('')
}

function plusShow() {
    operator = 1;
    display.push(plus);
    document.getElementById('display').innerHTML = display.join('');
}

function minusShow() {
    operator = 2;
    console.log(operator);
    display.push(minus);
    document.getElementById('display').innerHTML = display.join('');
}

function divShow() {
    operator = 3;
    display.push(divi);
    document.getElementById('display').innerHTML = display.join('');
}

function multiShow() {
    operator = 4;
    display.push(multi);
    document.getElementById('display').innerHTML = display.join('');
}

function btnDotShow() {
    display.push(dot);
    document.getElementById('display').innerHTML = display.join('');
}

function clearDis(){
    display.pop();
    document.getElementById('display').innerHTML = display.join('');
}

function clearAll(){
    while (display.length > 0){
        display.pop();
    } 

    document.getElementById('display').innerHTML = 0;

}

function solve() {
    // console.log(operator);
    if (operator == 1) {
        // console.log(display);
        display = display.toString();
        display.split('+');
        // console.log('pass 1')
        display = display.replace(/\,/g, "");
        // console.log('pass 2')
        display = display.split("+");
        // console.log('pass 3')
        let numx = Number(display[0]);
        let numy = Number(display[1]);
        // console.log('pass 4')
        display = numx + numy;
        // console.log('pass 5')
        document.getElementById('display').innerHTML = display;
        // console.log(typeof display, display);
        display = display.toString();
        // console.log(typeof display, display);
        display = display.split('');
        // console.log(typeof display, display);
    } else if (operator == 2) {

        display = display.toString();
        display.split('-');
        display = display.replace(/\,/g, "");
        display = display.split("-");
        let numx = Number(display[0]);
        let numy = Number(display[1]);
        display = numx - numy;
        document.getElementById('display').innerHTML = display;
        display = display.toString();
        display = display.split('');

    } else if (operator == 3) {
        display = display.toString();
        display.split('/');
        display = display.replace(/\,/g, "");
        display = display.split("/");
        let numx = Number(display[0]);
        let numy = Number(display[1]);
        display = numx / numy;
        document.getElementById('display').innerHTML = display;
        display = display.toString();
        display = display.split('');

    } else if (operator == 4){
        display = display.toString();
        display.split('*');
        display = display.replace(/\,/g, "");
        display = display.split("*");
        let numx = Number(display[0]);
        let numy = Number(display[1]);
        display = numx * numy;
        document.getElementById('display').innerHTML = display;
        display = display.toString();
        display = display.split('');

    } 

    // console.log(display[0], display[1]);
    console.log(typeof display, display);

    // console.log(display[0], display[2]);
}