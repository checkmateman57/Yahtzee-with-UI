var Rules = document.querySelector("#Rules")
var RulesOpener = document.querySelector("#RulesOpener")
var RulesClose = document.querySelector("#RulesClose")

var die1 = document.querySelector("#DICE1")
var die2 = document.querySelector("#DICE2")
var die3 = document.querySelector("#DICE3")
var die4 = document.querySelector("#DICE4")
var die5 = document.querySelector("#DICE5")

var Lock1 = document.querySelector("#DICE1Lock")
var Lock2 = document.querySelector("#DICE2Lock")
var Lock3 = document.querySelector("#DICE3Lock")
var Lock4 = document.querySelector("#DICE4Lock")
var Lock5 = document.querySelector("#DICE5Lock")

let Die1Lock = false
let Die2Lock = false
let Die3Lock = false
let Die4Lock = false
let Die5Lock = false


var Roll = document.querySelector("#Roll")
let RollCounter = 0
var RollWarning = document.querySelector("#RollWarning")
var RollWarningClose = document.querySelector("#RollWarningClose")

var ScoringTable = document.querySelector("#ScoringTable")
var Ones = document.querySelector("#Ones")
var Twos = document.querySelector("#Twos")
var Threes = document.querySelector("#Threes")
var Fours = document.querySelector("#Fours")
var Fives = document.querySelector("#Fives")
var Sixes = document.querySelector("#Sixes")
var UpperScore = document.querySelector("#UpperScore")
var Bonus = document.querySelector("#Bonus")
var ThreeKind = document.querySelector("#3Kind")
var FourKind = document.querySelector("#4Kind")
var ShortStraight = document.querySelector("#ShortStraight")
var LongStraight = document.querySelector("#LongStraight")
var FullHouse = document.querySelector("#FullHouse")
var Chance = document.querySelector("#Chance")
var Yahtzee = document.querySelector("#Yahtzee")
var LowerScore = document.querySelector("#LowerScore")
var GrandTotal = document.querySelector("#GrandTotal")

var OneScore = document.querySelector("#OneScore")
var TwoScore = document.querySelector("#TwoScore")
var ThreeScore = document.querySelector("#ThreeScore")
var FourScore = document.querySelector("#FourScore")
var FiveScore = document.querySelector("#FiveScore")
var SixeScore = document.querySelector("#SixeScore")
var UpScore = document.querySelector("#UpScore")
var BonusScore = document.querySelector("#BonusScore")
var ThreeKindScore = document.querySelector("#ThreeKindScore")
var FourKindScore = document.querySelector("#FourKindScore")
var ShortStraightScore = document.querySelector("#ShortStraightScore")
var LongStraightScore = document.querySelector("#LongStraightScore")
var FullHouseScore = document.querySelector("#FullHouseScore")
var ChanceScore = document.querySelector("#ChanceScore")
var YahtzeeScore = document.querySelector("#YahtzeeScore")
var LowScore = document.querySelector("#LowScore")
var GrandTotalScore = document.querySelector("#GrandTotalScore")


function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

RulesClose.addEventListener("click", function() {
    closeWindow(Rules)
    openWindow(die1)
    openWindow(die2)
    openWindow(die3)
    openWindow(die4)
    openWindow(die5)
    openWindow(Roll)
    openWindow(ScoringTable)
    if (Die1Lock == true) {
        openWindow(Lock1)
    }
    if (Die2Lock == true) {
        openWindow(Lock2)
    }
    if (Die3Lock == true) {
        openWindow(Lock3)
    }
    if (Die4Lock == true) {
        openWindow(Lock4)
    }
    if (Die5Lock == true) {
        openWindow(Lock5)
    }
})
RulesOpener.addEventListener("click", function() {
    openWindow(Rules)
    Rules.scrollTop = 0
    closeWindow(die1)
    closeWindow(die2)
    closeWindow(die3)
    closeWindow(die4)
    closeWindow(die5)
    closeWindow(Roll)
    closeWindow(Lock1)
    closeWindow(Lock2)
    closeWindow(Lock3)
    closeWindow(Lock4)
    closeWindow(Lock5)
    closeWindow(ScoringTable)

})

die1.addEventListener("click", function() {
    if (Die1Lock == false) {
        openWindow(Lock1)
        Die1Lock = true
    }
    else if (Die1Lock == true) {
        closeWindow(Lock1)
        Die1Lock = false
    }
})
die2.addEventListener("click", function() {
    if (Die2Lock == false) {
        openWindow(Lock2)
        Die2Lock = true
    }
    else if (Die2Lock == true) {
        closeWindow(Lock2)
        Die2Lock = false
    }
})

die3.addEventListener("click", function() {
    if (Die3Lock == false) {
        openWindow(Lock3)
        Die3Lock = true
    }
    else if (Die3Lock == true) {
        closeWindow(Lock3)
        Die3Lock = false
    }
})
die4.addEventListener("click", function() {
    if (Die4Lock == false) {
        openWindow(Lock4)
        Die4Lock = true
    }
    else if (Die4Lock == true) {
        closeWindow(Lock4)
        Die4Lock = false
    }
})

die5.addEventListener("click", function() {
    if (Die5Lock == false) {
        openWindow(Lock5)
        Die5Lock = true
    }
    else if (Die5Lock == true) {
        closeWindow(Lock5)
        Die5Lock = false
    }
})

function diceroll1() {
    if (Die1Lock == false) {
        let RollResult1 = Math.floor(Math.random() *6) + 1;
        if (RollResult1 == 6) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice6")
        }
        else if (RollResult1 == 5) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice5")
        }
        else if (RollResult1 == 4) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice4")
        }
        else if (RollResult1 == 3) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice3")
        }
        else if (RollResult1 == 2) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice2")
        }
        else if (RollResult1 == 1) {
            die1.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die1.classList.add("dice1")
        }
    }
}
function diceroll2() {
    if (Die2Lock == false) {
        let RollResult2 = Math.floor(Math.random() *6) + 1;
        if (RollResult2 == 6) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice6")
        }
        else if (RollResult2 == 5) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice5")
        }
        else if (RollResult2 == 4) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice4")
        }
        else if (RollResult2 == 3) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice3")
        }
        else if (RollResult2 == 2) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice2")
        }
        else if (RollResult2 == 1) {
            die2.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die2.classList.add("dice1")
        }
    }
}
function diceroll3() {
    if (Die3Lock == false) {
        let RollResult3 = Math.floor(Math.random() *6) + 1;
        if (RollResult3 == 6) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice6")
        }
        else if (RollResult3 == 5) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice5")
        }
        else if (RollResult3 == 4) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice4")
        }
        else if (RollResult3 == 3) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice3")
        }
        else if (RollResult3 == 2) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice2")
        }
        else if (RollResult3 == 1) {
            die3.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die3.classList.add("dice1")
        }
    }
}
function diceroll4() {
    if (Die4Lock == false) {
        let RollResult4 = Math.floor(Math.random() *6) + 1;
        if (RollResult4 == 6) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice6")
        }
        else if (RollResult4 == 5) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice5")
        }
        else if (RollResult4 == 4) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice4")
        }
        else if (RollResult4 == 3) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice3")
        }
        else if (RollResult4 == 2) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice2")
        }
        else if (RollResult4 == 1) {
            die4.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die4.classList.add("dice1")
        }
    }
}
function diceroll5() {
    if (Die5Lock == false) {
        let RollResult5 = Math.floor(Math.random() *6) + 1;
        if (RollResult5 == 6) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice6")
        }
        else if (RollResult5 == 5) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice5")
        }
        else if (RollResult5 == 4) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice4")
        }
        else if (RollResult5 == 3) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice3")
        }
        else if (RollResult5 == 2) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice2")
        }
        else if (RollResult5 == 1) {
            die5.classList.remove("dice1", "dice2", "dice3", "dice4", "dice5", "dice6")
            die5.classList.add("dice1")
        }
    }
}

function diceroll() {
    if (RollCounter < 3) {
        diceroll1();
        diceroll2();
        diceroll3();
        diceroll4();
        diceroll5();
        RollCounter = RollCounter + 1
    }
    else if (RollCounter > 2) {
        openWindow(RollWarning)
        closeWindow(die1)
        closeWindow(die2)
        closeWindow(die3)
        closeWindow(die4)
        closeWindow(die5)
        closeWindow(Roll)
        closeWindow(Lock1)
        closeWindow(Lock2)
        closeWindow(Lock3)
        closeWindow(Lock4)
        closeWindow(Lock5)
        closeWindow(ScoringTable)
    }
}

Roll.addEventListener("click", diceroll)

RollWarningClose.addEventListener("click", function() {
    openWindow(die1)
    openWindow(die2)
    openWindow(die3)
    openWindow(die4)
    openWindow(die5)
    openWindow(Roll)
    openWindow(ScoringTable)
    closeWindow(RollWarning)
    if (Die1Lock == true) {
        openWindow(Lock1)
    }
    if (Die2Lock == true) {
        openWindow(Lock2)
    }
    if (Die3Lock == true) {
        openWindow(Lock3)
    }
    if (Die4Lock == true) {
        openWindow(Lock4)
    }
    if (Die5Lock == true) {
        openWindow(Lock5)
    }
})