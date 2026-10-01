var Rules = document.querySelector("#Rules")
var RulesOpener = document.querySelector("#RulesOpener")
var RulesClose = document.querySelector("#RulesClose")

var die1 = document.querySelector("#DICE1")
var die2 = document.querySelector("#DICE2")
var die3 = document.querySelector("#DICE3")
var die4 = document.querySelector("#DICE4")
var die5 = document.querySelector("#DICE5")

var Roll = document.querySelector("#Roll")

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

RulesClose.addEventListener("click", function() {
    closeWindow(Rules)
})
RulesOpener.addEventListener("click", function() {
    openWindow(Rules)
    Rules.scrollTop = 0
})

function diceroll1() {
    let RollResult = Math.floor(Math.random() *6) + 1;
    if (RollResult == 6) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice6")
    }
    else if (RollResult == 5) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice5")
    }
    else if (RollResult == 4) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice4")
    }
    else if (RollResult == 3) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice3")
    }
    else if (RollResult == 2) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice2")
    }
    else if (RollResult == 1) {
        die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die1.classList.add("dice1")
    }
}
function diceroll2() {
    let RollResult = Math.floor(Math.random() *6) + 1;
    if (RollResult == 6) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice6")
    }
    else if (RollResult == 5) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice5")
    }
    else if (RollResult == 4) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice4")
    }
    else if (RollResult == 3) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice3")
    }
    else if (RollResult == 2) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice2")
    }
    else if (RollResult == 1) {
        die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die2.classList.add("dice1")
    }
}
function diceroll3() {
    let RollResult = Math.floor(Math.random() *6) + 1;
    if (RollResult == 6) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice6")
    }
    else if (RollResult == 5) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice5")
    }
    else if (RollResult == 4) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice4")
    }
    else if (RollResult == 3) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice3")
    }
    else if (RollResult == 2) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice2")
    }
    else if (RollResult == 1) {
        die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die3.classList.add("dice1")
    }
}
function diceroll4() {
    let RollResult = Math.floor(Math.random() *6) + 1;
    if (RollResult == 6) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice6")
    }
    else if (RollResult == 5) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice5")
    }
    else if (RollResult == 4) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice4")
    }
    else if (RollResult == 3) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice3")
    }
    else if (RollResult == 2) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice2")
    }
    else if (RollResult == 1) {
        die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die4.classList.add("dice1")
    }
}
function diceroll5() {
    let RollResult = Math.floor(Math.random() *6) + 1;
    if (RollResult == 6) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice6")
    }
    else if (RollResult == 5) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice5")
    }
    else if (RollResult == 4) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice4")
    }
    else if (RollResult == 3) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice3")
    }
    else if (RollResult == 2) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice2")
    }
    else if (RollResult == 1) {
        die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
        die5.classList.add("dice1")
    }
}

function diceroll() {
    diceroll1();
    diceroll2();
    diceroll3();
    diceroll4();
    diceroll5();
}

Roll.addEventListener("click", diceroll)