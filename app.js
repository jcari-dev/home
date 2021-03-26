let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let player1 = document.getElementById('player1btn');
let player2 = document.getElementById('player2btn');

function flip() {
    let x = Math.random()
    console.log(x);
    if (x < 0.5) {
        document.getElementById('player1btn').disabled = true;
        document.getElementById('player2btn').disabled = false;
        document.getElementById('turncall').innerHTML = 'Result: Tails, Player 2 Will Start!'
    } else {
        document.getElementById('player1btn').disabled = false;
        document.getElementById('player2btn').disabled = true;
        document.getElementById('turncall').innerHTML = 'Result: Heads, Player 1 Will Start!'
    }
}

function darkmode(){
    document.body.style.backgroundColor = "#000000";
    document.getElementById("idh1").style.color = "#f5f0ff";
    document.getElementById("idh2").style.color = "#f5f0ff";
    document.getElementById("idp").style.color = "#f5f0ff";
    document.getElementById("pwhite").style.color = "#f5f0ff";
    document.getElementById("gridid").style.border = "1px solid rgba(255, 255, 255, 0.8";
    
    //can't revert it

}

function winp1() {
    alert('Player 1 Has Won!');
}

function winp2() {
    alert('Player 2 Has Won!');
}

function tietie() {
    alert("It's a tie!");
}

function disableE() {
    document.getElementById('block1').disabled = true;
    document.getElementById('block2').disabled = true;
    document.getElementById('block3').disabled = true;
    document.getElementById('block4').disabled = true;
    document.getElementById('block5').disabled = true;
    document.getElementById('block6').disabled = true;
    document.getElementById('block7').disabled = true;
    document.getElementById('block8').disabled = true;
    document.getElementById('block9').disabled = true;
}

function checkWin() {
    if (btn1 == 1 && btn2 == 1 && btn3 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn4 == 1 && btn5 == 1 && btn6 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn7 == 1 && btn8 == 1 && btn9 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn1 == 1 && btn4 == 1 && btn7 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn2 == 1 && btn5 == 1 && btn8 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn3 == 1 && btn6 == 1 && btn9 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn1 == 1 && btn5 == 1 && btn9 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
    } else if (btn3 == 1 && btn5 == 1 && btn7 == 1) {
        setTimeout(function () {
            winp1()
        }, 500);
        disableE();
        // player 2 logic
    } else if (btn1 == 2 && btn2 == 2 && btn3 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn4 == 2 && btn5 == 2 && btn6 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn7 == 2 && btn8 == 2 && btn9 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn1 == 2 && btn4 == 2 && btn7 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn2 == 2 && btn5 == 2 && btn8 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn3 == 2 && btn6 == 2 && btn9 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn1 == 2 && btn5 == 2 && btn9 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (btn3 == 2 && btn5 == 2 && btn7 == 2) {
        setTimeout(function () {
            winp2()
        }, 500);
        disableE();
    } else if (block1.disabled && block2.disabled && block3.disabled && block4.disabled && block5.disabled && block6.disabled && block7.disabled && block8.disabled && block9.disabled == true) {
        setTimeout(function () {
            tietie()
        }, 500);
    }
}

function player1Turn() {
    document.getElementById('player2btn').disabled = true;
}

function player2Turn() {
    document.getElementById('player1btn').disabled = true;
}



function reset() {
    location.reload();
}

function placeSign1() {
    if (player2btn.disabled == true) {
        document.getElementById('block1').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block1').disabled = true;
        btn1 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block1').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block1').disabled = true;
        btn1 = 2;
        checkWin();
    }
}

function placeSign2() {
    if (player2btn.disabled == true) {
        document.getElementById('block2').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block2').disabled = true;
        btn2 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block2').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block2').disabled = true;
        btn2 = 2;
        checkWin();
    }
}

function placeSign3() {
    if (player2btn.disabled == true) {
        document.getElementById('block3').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block3').disabled = true;
        btn3 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block3').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block3').disabled = true;
        btn3 = 2;
        checkWin();
    }
}

function placeSign4() {
    if (player2btn.disabled == true) {
        document.getElementById('block4').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block4').disabled = true;
        btn4 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block4').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block4').disabled = true;
        btn4 = 2;
        checkWin();
    }
}

function placeSign5() {
    if (player2btn.disabled == true) {
        document.getElementById('block5').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block5').disabled = true;
        btn5 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block5').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block5').disabled = true;
        btn5 = 2;
        checkWin();
    }
}

function placeSign6() {
    if (player2btn.disabled == true) {
        document.getElementById('block6').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block6').disabled = true;
        btn6 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block6').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block6').disabled = true;
        btn6 = 2;
        checkWin();
    }
}

function placeSign7() {
    if (player2btn.disabled == true) {
        document.getElementById('block7').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block7').disabled = true;
        btn7 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block7').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block7').disabled = true;
        btn7 = 2;
        checkWin();
    }
}

function placeSign8() {
    if (player2btn.disabled == true) {
        document.getElementById('block8').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block8').disabled = true;
        btn8 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block8').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block8').disabled = true;
        btn8 = 2;
        checkWin();
    }
}

function placeSign9() {
    if (player2btn.disabled == true) {
        document.getElementById('block9').innerHTML = 'X';
        player2btn.disabled = false;
        player1btn.disabled = true;
        document.getElementById('block9').disabled = true;
        btn9 = 1;
        checkWin();
    } else if (player1btn.disabled == true) {
        document.getElementById('block9').innerHTML = 'O';
        player2btn.disabled = true;
        player1btn.disabled = false;
        document.getElementById('block9').disabled = true;
        btn9 = 2;
        checkWin();
    }
}