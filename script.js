var Rules = document.querySelector("#Rules")
var RulesOpener = document.querySelector("#RulesOpener")
var RulesOpen = document.querySelector("#RulesOpen")
var RulesClose = document.querySelector("#RulesClose")
var Scoring = document.querySelector("#Scoring")
var ScoringOpen = document.querySelector("#ScoringOpen")
var ScoringClose = document.querySelector("#ScoringClose")

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
var Header = document.querySelector("#Header")
var Ones = document.querySelector("#Ones")
var Twos = document.querySelector("#Twos")
var Threes = document.querySelector("#Threes")
var Fours = document.querySelector("#Fours")
var Fives = document.querySelector("#Fives")
var Sixes = document.querySelector("#Sixes")
var UpperScore = document.querySelector("#UpperScore")
var Bonus = document.querySelector("#Bonus")
var ThreeKind = document.querySelector("#ThreeKind")
var FourKind = document.querySelector("#FourKind")
var ShortStraight = document.querySelector("#ShortStraight")
var LongStraight = document.querySelector("#LongStraight")
var FullHouse = document.querySelector("#FullHouse")
var Chance = document.querySelector("#Chance")
var Yahtzee = document.querySelector("#Yahtzee")
var LowerScore = document.querySelector("#LowerScore")
var GrandTotal = document.querySelector("#GrandTotal")

let Score = 0
var OneScore = document.querySelector("#OneScore")
var TwoScore = document.querySelector("#TwoScore")
var ThreeScore = document.querySelector("#ThreeScore")
var FourScore = document.querySelector("#FourScore")
var FiveScore = document.querySelector("#FiveScore")
var SixScore = document.querySelector("#SixScore")
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
var GrandTotalScore = document.querySelector("#GrandScore")

var OneScore2 = document.querySelector("#OneScore2")
var TwoScore2 = document.querySelector("#TwoScore2")
var ThreeScore2 = document.querySelector("#ThreeScore2")
var FourScore2 = document.querySelector("#FourScore2")
var FiveScore2 = document.querySelector("#FiveScore2")
var SixScore2 = document.querySelector("#SixScore2")
var UpperScore2 = document.querySelector("#UpperScore2")
var BonusScore2 = document.querySelector("#BonusScore2")
var ThreeKindScore2 = document.querySelector("#ThreeKindScore2")
var FourKindScore2 = document.querySelector("#FourKindScore2")
var ShortStraightScore2 = document.querySelector("#ShortStraightScore2")
var LongStraightScore2 = document.querySelector("#LongStraightScore2")
var FullHouseScore2 = document.querySelector("#FullHouseScore2")
var ChanceScore2 = document.querySelector("#ChanceScore2")
var YahtzeeScore2 = document.querySelector("#YahtzeeScore2")
var LowerScore2 = document.querySelector("#LowerScore2")
var GrandTotalScore2 = document.querySelector("#GrandTotalScore2")
let Turn = 1

var Zero = document.querySelector("#Zero")
var ZeroNo = document.querySelector("#ZeroNo")
var ZeroYes = document.querySelector("#ZeroYes")

let OneChecker = false
let TwoChecker = false
let ThreeChecker = false
let FourChecker = false
let FiveChecker = false
let SixChecker = false
let CurrentChecker = 0
let ChanceChecker = false
let YahtzeeChecker = false
let LongStraightChecker = false
let ShortStraightChecker = false
let ThreeKindChecker = false
let FourKindChecker = false
let FullHouseChecker = false
let UpperScoreChecker = false
let LowerScoreChecker = false

let OneChecker2 = false
let TwoChecker2 = false
let ThreeChecker2 = false
let FourChecker2 = false
let FiveChecker2 = false
let SixChecker2 = false
let ChanceChecker2 = false
let YahtzeeChecker2 = false
let LongStraightChecker2 = false
let ShortStraightChecker2 = false
let ThreeKindChecker2 = false
let FourKindChecker2 = false
let FullHouseChecker2 = false
let UpperScoreChecker2 = false
let LowerScoreChecker2 = false

let RollResult1 = 0;
let RollResult2 = 0;
let RollResult3 = 0;
let RollResult4 = 0;
let RollResult5 = 0;

var Invalid = document.querySelector("#Invalid")
var InvalidClose = document.querySelector("#InvalidClose")

let Dice = [RollResult1, RollResult2, RollResult3, RollResult4, RollResult5]

var Final = document.querySelector("#Final")
var EndMessage = document.querySelector("#EndMessage")
var FinalClose = document.querySelector("#FinalClose")

var NewGame = document.querySelector("#NewGame")
var New = document.querySelector("#New")
var ConfirmNew = document.querySelector("#ConfirmNew")
var DenyNew = document.querySelector("#DenyNew")

let Mode = 1

var Single = document.querySelector("#Single")
var SingleCircle = document.querySelector("#SingleCircle")
var Multi = document.querySelector("#Multi")
var MultiCircle = document.querySelector("#MultiCircle")

var ScoringTable2 = document.querySelector("#ScoringTable2")

let GrandTotalChecker = false
let GrandTotalChecker2 = false

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

function openBunch() {
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
    if (Mode == 1) {
        SingleAdd()
    }
    if (Mode == 2) {
        MultiAdd()
    }
    openWindow(Single)
    openWindow(Multi)
}

function closeBunch() {
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
    closeWindow(Rules)
    closeWindow(Scoring)
    closeWindow(Invalid)
    closeWindow(Zero)
    closeWindow(New)
    closeWindow(ScoringTable2)
    closeWindow(Single)
    closeWindow(SingleCircle)
    closeWindow(MultiCircle)
    closeWindow(Multi)
}

function NoNo() {
    closeBunch()
    openWindow(Invalid)
}

function SingleAdd() {
    closeWindow(MultiCircle)
    openWindow(SingleCircle)
    Mode = 1
    closeWindow(ScoringTable2)
    openWindow(Header)
}

function MultiAdd() {
    closeWindow(SingleCircle)
    openWindow(MultiCircle)
    Mode = 2
    closeWindow(Header)
    openWindow(ScoringTable2)
}

Single.addEventListener("click", function() {
    SingleAdd()
})

Multi.addEventListener("click", function() {
    MultiAdd()
})

RulesClose.addEventListener("click", function() {
    closeWindow(Rules)
    openBunch()
})
RulesOpener.addEventListener("click", function() {
    closeBunch()
    openWindow(Rules)
    Rules.scrollTop = 0

})

RulesOpen.addEventListener("click", function() {
    closeBunch()
    openWindow(Rules)
    Rules.scrollTop = 0
})

ScoringOpen.addEventListener("click", function() {
    closeBunch()
    openWindow(Scoring)
    Scoring.scrollTop = 0
})

ScoringClose.addEventListener("click", function() {
    closeBunch()
    openBunch()
})

die1.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else {
        if (Die1Lock == false) {
            openWindow(Lock1)
            Die1Lock = true
        }
        else if (Die1Lock == true) {
            closeWindow(Lock1)
            Die1Lock = false
        }
    }
})
die2.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else {
        if (Die2Lock == false) {
            openWindow(Lock2)
            Die2Lock = true
        }
        else if (Die2Lock == true) {
            closeWindow(Lock2)
            Die2Lock = false
        }
    }
})

die3.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else {
        if (Die3Lock == false) {
            openWindow(Lock3)
            Die3Lock = true
        }
        else if (Die3Lock == true) {
            closeWindow(Lock3)
            Die3Lock = false
        }
    }
})
die4.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else {
        if (Die4Lock == false) {
            openWindow(Lock4)
            Die4Lock = true
        }
        else if (Die4Lock == true) {
            closeWindow(Lock4)
            Die4Lock = false
        }
    }
})

die5.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else {
        if (Die5Lock == false) {
            openWindow(Lock5)
            Die5Lock = true
        }
        else if (Die5Lock == true) {
            closeWindow(Lock5)
            Die5Lock = false
        }
    }
})

InvalidClose.addEventListener("click", function() {
    closeWindow(Invalid)
    openBunch()
})

function diceroll1() {
    if (Die1Lock == false) {
        RollResult1 = Math.floor(Math.random() *6) + 1;
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
        RollResult2 = Math.floor(Math.random() *6) + 1;
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
        RollResult3 = Math.floor(Math.random() *6) + 1;
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
        RollResult4 = Math.floor(Math.random() *6) + 1;
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
        RollResult5 = Math.floor(Math.random() *6) + 1;
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
        closeBunch()
        openWindow(RollWarning)
        
    }
}

Roll.addEventListener("click", diceroll)

RollWarningClose.addEventListener("click", function() {
    closeWindow(RollWarning)
    openBunch()
})

FinalClose.addEventListener("click", function() {
    closeWindow(Final)
    openBunch()
})

function DiceValues() {
    let Dice = [RollResult1, RollResult2, RollResult3, RollResult4, RollResult5];
    Dice.sort((a, b) => a - b);
    return Dice;
}

function clearDice() {
    Die1Lock = false
    Die2Lock = false
    Die3Lock = false
    Die4Lock = false
    Die5Lock = false
    closeWindow(Lock1)
    closeWindow(Lock2)
    closeWindow(Lock3)
    closeWindow(Lock4)
    closeWindow(Lock5)
}

function Finish() {
    if (Mode == 1) {
        if (GrandTotal < 100) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "You got a score of" + GrandTotal + ". You can do better than that! Come and play another game."
        }
        else if (GrandTotal >= 100 && GrandTotal <= 150) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "You got a score of " + GrandTotal + ". Not bad, but you can do better. Come and play another game."
        }
        else if (GrandTotal > 150 && GrandTotal < 200) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "You got a score of " + GrandTotal + "! Nice Job! Thats an average score. Improve your skills and play another game"
        }
        else if (GrandTotal >= 200 && GrandTotal < 250) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "You got a score of " + GrandTotal + "! WOW! That's an advanced score, Could you do even better in another game?"
        }
        else if (GrandTotal >= 250 && GrandTotal <300) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "You got a score of " + GrandTotal + "! WOW! That's an incredible score. It'd be pretty hard to beat that"
        }
        else if (GrandTotal >= 300) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "YOU GOT A SCORE OF " + GrandTotal + "! INCREDIBLE JOB! It's almost impossible to beat that score"
        }
    }
    else if (Mode == 2 && GrandTotalChecker == true && GrandTotalChecker2 == true) {
        if (GrandTotal > GrandTotalScore2) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "Looks like Player 1 beat Player 2! Maybe a rematch?"
        }
        else if (GrandTotalScore2 > GrandTotal) {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "Looks like Player 2 beat Player 1! Would Player 1 like a redemption game?"
        }
        else {
            closeBunch()
            openWindow(Final)
            EndMessage.innerHTML = "It's a tie! Another game to settle the victor?"
        }
    }
}

function Total() {
    if (UpperScoreChecker == true && LowerScoreChecker == true) {
        Score = 0
        Score += UpperScore
        Score += LowerScore
        GrandTotal = Score
        GrandTotalScore.innerHTML = Score
        GrandTotalChecker = true
        setTimeout(function() {
            Finish()
        }, 3000)
    }
}

function Total2() {
    if (UpperScoreChecker2 == true && LowerScoreChecker2 == true) {
        console.log("UpperScore2 looks like:", UpperScore2);
        console.log("LowerScore2 looks like:", LowerScore2);
        console.log("GrandTotalScore2 looks like:", GrandTotalScore2);
        Score = 0
        Score += Number(UpperScore2)
        Score += Number(LowerScore2)
        Score += Number(BonusScore2)
        GrandTotalScore2.innerHTML = Score
        GrandTotalScore2 = Score
        GrandTotalChecker2 = true
        setTimeout(function() {
            Finish()
        }, 3000)
    }
}

function BonusPoints() {
    if (OneChecker == true && TwoChecker == true && ThreeChecker == true && FourChecker == true && FiveChecker == true && SixChecker == true) {
        let Score = 0
        let Bonus = 0
        Score += Ones
        Score += Twos
        Score += Threes
        Score += Fours
        Score += Fives
        Score += Sixes
        UpperScore = Score
        UpScore.innerHTML = Score
        UpperScoreChecker = true
        if (Score > 62) {
            let Score = 35
            BonusScore.innerHTML = Score
            Bonus = 35
        }
        else {
            let Score = 0
            BonusScore.innerHTML = Score
            Bonus = 0
        }
        UpperScore += Bonus
        Total()
    }
}

function BonusPoints2() {
    if (OneChecker2 == true && TwoChecker2 == true && ThreeChecker2 == true && FourChecker2 == true && FiveChecker2 == true && SixChecker2 == true) {
        let Score = 0
        Score += OneScore2
        Score += TwoScore2
        Score += ThreeScore2
        Score += FourScore2
        Score += FiveScore2
        Score += SixScore2
        UpperScore2.innerHTML = Score
        UpperScore2 = Score
        UpperScoreChecker2 = true
        if (Score >= 63) {
            Score = 35
            BonusScore2.innerHTML = Score
            BonusScore2 = Score
        }
        if (Score < 63) {
            Score = 0
            BonusScore2.innerHTML = Score
            BonusScore2 = Score
        }
        Total2()
    }
}

function BottomScore() {
    if (ThreeKindChecker == true && FourKindChecker == true && ShortStraightChecker == true && LongStraightChecker == true && FullHouseChecker == true && ChanceChecker == true && YahtzeeChecker == true) {
        Score = 0
        Score += ThreeKind
        Score += FourKind
        Score += ShortStraight
        Score += LongStraight
        Score += Chance
        Score += Yahtzee
        LowerScore = Score
        LowScore.innerHTML = Score
        LowerScoreChecker = true
        Total()
    }
}

function BottomScore2() {
    if (ThreeKindChecker2 == true && FourKindChecker2 == true && ShortStraightChecker2 == true && LongStraightChecker2 == true && FullHouseChecker2 == true && ChanceChecker2 == true && YahtzeeChecker2 == true) {
        Score = 0
        Score += ThreeKindScore2
        Score += FourKindScore2
        Score += ShortStraightScore2
        Score += LongStraightScore2
        Score += FullHouseScore2
        Score += ChanceScore2
        Score += YahtzeeScore2
        LowerScore2.innerHTML = Score
        LowerScore2 = Score
        LowerScoreChecker2 = true
        Total2()
    }
}

function ZeroChecker() {
    closeBunch()
    openWindow(Zero)
}

function Reset() {
    clearDice()
    RollCounter = 0
}

function Adding() {
    Score = 0
    Score += RollResult1
    Score += RollResult2
    Score += RollResult3
    Score += RollResult4
    Score += RollResult5
    return Score
}

Ones.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && OneChecker == true)||
        (Mode == 2 && Turn == 1 && OneChecker == true)||
        (Mode == 2 && Turn == 2 && OneChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 1) {
            Score = Score + 1
        }
        if (RollResult2 == 1) {
            Score = Score + 1
        }
        if (RollResult3 == 1) {
            Score = Score +  1
        }
        if (RollResult4 == 1) {
            Score = Score +  1
        }
        if (RollResult5 == 1) {
            Score = Score +  1
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 1
            ZeroNo.addEventListener("click", function() {
                openBunch()
                closeWindow(Zero)
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 1) {
                    openBunch()
                    closeWindow(Zero)
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (OneChecker == false && RollCounter > 0) {
                            OneChecker = true
                            Ones = Score
                            OneScore.innerHTML = Score
                            BonusPoints()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (OneChecker2 == false && RollCounter > 0) {
                            OneScore2.innerHTML = Score
                            OneScore2 = Score
                            OneChecker2 = true
                            Turn = 1
                            BonusPoints2()
                            Reset()
                        }
                    }
                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                OneScore.innerHTML = Score
                OneChecker = true
                Ones = Score
                BonusPoints()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                OneScore2.innerHTML = Score
                OneScore2 = Score
                OneChecker2 = true
                Turn = 1
                BonusPoints2()
            }
        }
    }
})

Twos.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && TwoChecker == true)||
        (Mode == 2 && Turn == 1 && TwoChecker == true)||
        (Mode == 2 && Turn == 2 && TwoChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 2) {
            Score += 2
        }
        if (RollResult2 == 2) {
            Score += 2
        }
        if (RollResult3 == 2) {
            Score += 2
        }
        if (RollResult4 == 2) {
            Score += 2
        }
        if (RollResult5 == 2) {
            Score += 2
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 2
            ZeroNo.addEventListener("click", function() {
                openBunch()
                closeWindow(Zero)
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 2) {
                    openBunch()
                    closeWindow(Zero)
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (TwoChecker == false) {
                            Twos = Score
                            TwoScore.innerHTML = Score
                            TwoChecker = true
                            BonusPoints()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (TwoChecker2 == false && RollCounter > 0) {
                            TwoScore2.innerHTML = Score
                            TwoScore2 = Score
                            TwoChecker2 = true
                            Turn = 1 
                            BonusPoints2()
                            Reset()
                        }
                    }

                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Twos = Score
                TwoScore.innerHTML = Score
                TwoChecker = true
                BonusPoints()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                TwoScore2.innerHTML = Score
                TwoScore2 = Score
                TwoChecker2 = true
                Turn = 1 
                BonusPoints2()
            }
        }
    }
})

Threes.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && ThreeChecker == true)||
        (Mode == 2 && Turn == 1 && ThreeChecker == true)||
        (Mode == 2 && Turn == 2 && ThreeChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 3) {
            Score += 3
        }
        if (RollResult2 == 3) {
            Score += 3
        }
        if (RollResult3 == 3) {
            Score += 3
        }
        if (RollResult4 == 3) {
            Score += 3
        }
        if (RollResult5 == 3) {
            Score += 3
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 3
            ZeroNo.addEventListener("click", function() {
                openBunch()
                closeWindow(Zero)
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 3) {
                    openBunch()
                    closeWindow(Zero)
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (ThreeChecker == false) {
                            Threes = Score  
                            ThreeScore.innerHTML = Score
                            ThreeChecker = true
                            BonusPoints()
                            Reset()
                            if (Mode == 2){
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (ThreeChecker2 == false && RollCounter > 0) {
                            ThreeScore2.innerHTML = Score
                            ThreeScore2 = Score
                            ThreeChecker2 = true
                            Turn = 1 
                            BonusPoints2()
                            Reset()
                        }
                    }
                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Threes = Score
                ThreeScore.innerHTML = Score
                ThreeChecker = true
                BonusPoints()
                if (Mode == 2){
                    Turn = 2
                }
            }
            else {
                ThreeScore2.innerHTML = Score
                ThreeScore2 = Score
                ThreeChecker2 = true
                Turn = 1 
                BonusPoints2()
            }
        }
    }
})

Fours.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && FourChecker == true)||
        (Mode == 2 && Turn == 1 && FourChecker == true)||
        (Mode == 2 && Turn == 2 && FourChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 4) {
            Score += 4
        }
        if (RollResult2 == 4) {
            Score += 4
        }
        if (RollResult3 == 4) {
            Score += 4
        }
        if (RollResult4 == 4) {
            Score += 4
        }
        if (RollResult5 == 4) {
            Score += 4
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 4
            ZeroNo.addEventListener("click", function() {
                openBunch()
                closeWindow(Zero)
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 4) {
                    openBunch()
                    closeWindow(Zero)
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (FourChecker == false && RollCounter > 0) {
                            Fours = Score
                            FourScore.innerHTML = Score
                            FourChecker = true
                            BonusPoints()
                            Reset()
                            if (Mode == 2){
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (FourChecker2 == false && RollCounter > 0) {
                            FourScore2.innerHTML = Score
                            FourScore2 = Score
                            FourChecker2 = true
                            Turn = 1 
                            BonusPoints2()
                            Reset()
                        }
                    }
                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Fours = Score
                FourScore.innerHTML = Score
                FourChecker = true
                BonusPoints()
                if (Mode == 2){
                    Turn = 2
                }
            }
            else {
                FourScore2.innerHTML = Score
                FourScore2 = Score
                FourChecker2 = true
                Turn = 1 
                BonusPoints2()
            }
        }
    }
})

Fives.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && FiveChecker == true)||
        (Mode == 2 && Turn == 1 && FiveChecker == true)||
        (Mode == 2 && Turn == 2 && FiveChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 5) {
            Score += 5
        }
        if (RollResult2 == 5) {
            Score += 5
        }
        if (RollResult3 == 5) {
            Score += 5
        }
        if (RollResult4 == 5) {
            Score += 5
        }
        if (RollResult5 == 5) {
            Score += 5
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 5
            ZeroNo.addEventListener("click", function() {
                openBunch()
                closeWindow(Zero)
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 5) {
                    openBunch()
                    closeWindow(Zero)
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (FiveChecker == false && RollCounter > 0) {
                            Fives = Score
                            FiveScore.innerHTML = Score
                            FiveChecker = true
                            BonusPoints()
                            Reset()
                            if (Mode == 2){
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (FiveChecker2 == false && RollCounter > 0) {
                            FiveScore2.innerHTML = Score
                            FiveScore2 = Score
                            FiveChecker2 = true
                            Turn = 1 
                            BonusPoints2()
                            Reset()
                        }
                    }
                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Fives = Score
                FiveScore.innerHTML = Score
                FiveChecker = true
                BonusPoints()
                if (Mode == 2){
                    Turn = 2
                }
            }
            else {
                FiveScore2.innerHTML = Score
                FiveScore2 = Score
                FiveChecker2 = true
                Turn = 1 
                BonusPoints2()
            }
        }
    }
})

Sixes.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && SixChecker == true)||
        (Mode == 2 && Turn == 1 && SixChecker == true)||
        (Mode == 2 && Turn == 2 && SixChecker2 == true)) {
        NoNo()
    }
    else {
        let Score = 0
        if (RollResult1 == 6) {
            Score += 6
        }
        if (RollResult2 == 6) {
            Score += 6
        }
        if (RollResult3 == 6) {
            Score += 6
        }
        if (RollResult4 == 6) {
            Score += 6
        }
        if (RollResult5 == 6) {
            Score += 6
        }
        if (Score == 0) {
            ZeroChecker()
            CurrentChecker = 6
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 6) {
                    closeWindow(Zero)
                    openBunch()
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (SixChecker == false && RollCounter > 0) {
                            Sixes = Score
                            SixScore.innerHTML = Score
                            SixChecker = true
                            BonusPoints()
                            Reset()
                            if (Mode == 2){
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (SixChecker2 == false && RollCounter > 0) {
                            SixScore2.innerHTML = Score
                            SixScore2 = Score
                            SixChecker2 = true
                            Turn = 1 
                            BonusPoints2()
                            Reset()
                        }
                    }
                }
            })
        }
        else {
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Sixes = Score
                SixScore.innerHTML = Score
                SixChecker = true
                BonusPoints()
                if (Mode == 2){
                    Turn = 2
                }
            }
            else {
                SixScore2.innerHTML = Score
                SixScore2 = Score
                SixChecker2 = true
                Turn = 1 
                BonusPoints2()
            }
        }
    }
})

ThreeKind.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && ThreeKindChecker == true)||
        (Mode == 2 && Turn == 1 && ThreeKindChecker == true)||
        (Mode == 2 && Turn == 2 && ThreeKindChecker2 == true)) {
        NoNo()
    }
    else {
        let Dice = DiceValues()
        if (
            (Dice[0] == Dice[1] && Dice[1] == Dice[2]) ||
            (Dice[1] == Dice[2] && Dice[2] == Dice[3]) ||
            (Dice[2] == Dice[3] && Dice[3] == Dice[4])
        ) {
            Score = Adding()
            Reset()
            if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                ThreeKind = Score
                ThreeKindScore.innerHTML = Score
                ThreeKindChecker = true
                BottomScore()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                ThreeKindScore2.innerHTML = Score
                ThreeKindScore2 = Score
                ThreeKindChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
            ZeroChecker()
            CurrentChecker = 7
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 7) {
                    closeWindow(Zero)
                    openBunch()
                    Score = 0
                    if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                        if (ThreeKindChecker == false && RollCounter > 0) {
                            ThreeKind = Score
                            ThreeKindScore.innerHTML = Score
                            ThreeKindChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (ThreeKindChecker2 == false && RollCounter > 0) {
                            ThreeKindScore2.innerHTML = Score
                            ThreeKindScore2 = Score
                            ThreeKindChecker2 = true
                            BottomScore2()
                            Turn = 1
                            Reset()
                        }
                    }
                }
            })
        }
    }
})

FourKind.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && FourKindChecker == true)||
        (Mode == 2 && Turn == 1 && FourKindChecker == true)||
        (Mode == 2 && Turn == 2 && FourKindChecker2 == true)) {
        NoNo()
    }
    else {
        Dice = DiceValues()
        if (
            (Dice[0] == Dice[1] && Dice[1] == Dice[2] && Dice[2] == Dice[3]) ||
            (Dice[1] == Dice[2] && Dice[2] == Dice[3] && Dice[3] == Dice[4])
        ) {
            Score = Adding()
            Reset()
            if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                FourKind = Score
                FourKindScore.innerHTML = Score
                FourKindChecker = true
                BottomScore()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                FourKindScore2.innerHTML = Score
                FourKindScore2 = Score
                FourKindChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
            ZeroChecker()
            CurrentChecker = 8
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 8) {
                    closeWindow(Zero)
                    openBunch()
                    Score = 0
                    if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                        if (FourKindChecker == false && RollCounter > 0) {
                            FourKind = Score
                            FourKindScore.innerHTML = Score
                            FourKindChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (FourKindChecker2 == false && RollCounter > 0) {
                            FourKindScore2.innerHTML = Score
                            FourKindScore2 = Score
                            FourKindChecker2 = true
                            BottomScore2()
                            Turn = 1
                            Reset()
                        }
                    }
                }
            })
        }
    }
})

ShortStraight.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && ShortStraightChecker == true)||
        (Mode == 2 && Turn == 1 && ShortStraightChecker == true)||
        (Mode == 2 && Turn == 2 && ShortStraightChecker2 == true)) {
        NoNo()
    }
    else {
        let Dice = DiceValues()
        if (
            (Dice[0] + 1 == Dice[1] && Dice[1] +1 == Dice[2] && Dice[2] + 1 == Dice[3]) ||
            (Dice[1] + 1 == Dice[2] && Dice[2] + 1 == Dice[3] && Dice[3] + 1 == Dice[4]) ||
            (Dice[0] + 1 == Dice[1] && Dice[1] + 1 == Dice[3] && Dice[3] + 1 == Dice[4]) ||
            (Dice[0] + 1 == Dice[1] && Dice[1] + 1 == Dice[2] && Dice[2] + 1 == Dice[4]) ){
            let Score = 0
            Score += 30
            Reset()
            if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                ShortStraight = Score
                ShortStraightScore.innerHTML = Score
                ShortStraightChecker = true
                BottomScore()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                ShortStraightScore2.innerHTML = Score
                ShortStraightScore2 = Score
                ShortStraightChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
          ZeroChecker()
            CurrentChecker = 9
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 9) {
                    let Score = 0
                    closeWindow(Zero)
                    openBunch()
                    if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
                        if (ShortStraightChecker == false && RollCounter > 0) {
                            ShortStraight = Score
                            ShortStraightScore.innerHTML = Score
                            ShortStraightChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (ShortStraightChecker2 == false && RollCounter > 0) {
                            ShortStraightScore2.innerHTML = Score
                            ShortStraightScore2 = Score
                            ShortStraightChecker2 = true
                            BottomScore2()
                            Turn = 1 
                            Reset()
                        }
                    }
                }
            })  
        }
    }
})

LongStraight.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && LongStraightChecker == true)||
        (Mode == 2 && Turn == 1 && LongStraightChecker == true)||
        (Mode == 2 && Turn == 2 && LongStraightChecker2 == true)) {
        NoNo()
    }
    else{
        let Dice = DiceValues()
        if (Dice[0] + 1 == Dice[1] && Dice[1] + 1 == Dice[2] && Dice[2] + 1 == Dice[3] && Dice[3] + 1 == Dice[4]) {
            let Score = 0
            Score += 40
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)){
                LongStraight = Score
                LongStraightScore.innerHTML = Score
                LongStraightChecker = true
                BottomScore()
                if (Mode == 2){
                    Turn = 2
                }
            }
            else {
                LongStraightScore2.innerHTML = Score
                LongStraightScore2 = Score
                LongStraightChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
            ZeroChecker()
            CurrentChecker = 10
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 10) {
                    let Score = 0
                    closeWindow(Zero)
                    openBunch()
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (LongStraightChecker == false && RollCounter > 0) {
                            LongStraight = Score
                            LongStraightScore.innerHTML = Score
                            LongStraightChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (LongStraightChecker2 == false && RollCounter > 0) {
                            LongStraightScore2.innerHTML = Score
                            LongStraightScore2 = Score
                            LongStraightChecker2 = true
                            BottomScore2()
                            Turn = 1
                            Reset()
                        }
                    }
                }
            })
        }
    }
})

FullHouse.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && FullHouseChecker == true)||
        (Mode == 2 && Turn == 1 && FullHouseChecker == true)||
        (Mode == 2 && Turn == 2 && FullHouseChecker2 == true)) {
        NoNo()
    }
    else {
        Dice = DiceValues()
        if (
            (Dice[0] == Dice[1] && Dice[2] == Dice[3] && Dice[3] == Dice[4] && Dice[2] > Dice[1]) ||
            (Dice[0] == Dice[1] && Dice[1] == Dice[2] && Dice[3] == Dice[4] && Dice[3] > Dice[2])
        ) {
            Score = 25
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                FullHouse = Score
                FullHouseScore.innerHTML = Score
                FullHouseChecker = true
                BottomScore()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                FullHouseScore2.innerHTML = Score
                FullHouseScore2 = Score
                FullHouseChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
            ZeroChecker()
            CurrentChecker = 11
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 11) {
                    closeWindow(Zero)
                    openBunch()
                    Score = 0
                    if ((Mode == 1)||(Mode == 2 && Turn == 1)) {
                        if (FullHouseChecker == false && RollCounter > 0) {
                            FullHouse = Score
                            FullHouseScore.innerHTML = Score
                            FullHouseChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (YahtzeeChecker2 == false && RollCounter > 0) {
                            FullHouseScore2.innerHTML = Score
                            FullHouseScore2 = Score
                            FullHouseChecker2 = true
                            BottomScore2()
                            Turn = 1
                            Reset()
                        }
                    }
                }
            })
        }
    }
})

Chance.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && ChanceChecker == true) ||
        (Mode == 2 && ChanceChecker == true && Turn == 1) ||
        (Mode == 2 && ChanceChecker2 == true && Turn == 2)
    ) {
        NoNo()
    }
    else {
        Score = Adding()
        Reset()
        if ((Mode == 1) || (Mode == 2 && Turn == 1)) {
            Chance = Score
            ChanceScore.innerHTML = Score
            ChanceChecker = true
            BottomScore()
            if (Mode == 2) {
                Turn = 2
            }
        }
        else {
            ChanceScore2.innerHTML = Score
            ChanceScore2 = Score
            ChanceChecker2 = true
            BottomScore2()
            Turn = 1
        }
    }
})

Yahtzee.addEventListener("click", function() {
    if (RollCounter == 0) {
        NoNo()
    }
    else if (
        (Mode == 1 && YahtzeeChecker == true)||
        (Mode == 2 && Turn == 1 && YahtzeeChecker == true)||
        (Mode == 2 && Turn == 2 && YahtzeeChecker2 == true)
    ) {
        NoNo()
    }
    else {
        if (RollResult1 == RollResult2 && RollResult3 == RollResult4 && RollResult5 == RollResult1 && RollResult5 == RollResult3){
            let Score = 0
            Score += 50
            Reset()
            if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                Yahtzee = Score
                YahtzeeScore.innerHTML = Score
                YahtzeeChecker = true
                BottomScore()
                if (Mode == 2) {
                    Turn = 2
                }
            }
            else {
                YahtzeeScore2.innerHTML = Score
                YahtzeeScore2 = Score
                YahtzeeChecker2 = true
                BottomScore2()
                Turn = 1
            }
        }
        else {
            ZeroChecker()
            CurrentChecker = 12
            ZeroNo.addEventListener("click", function() {
                closeWindow(Zero)
                openBunch()
                CurrentChecker = 0
            })
            ZeroYes.addEventListener("click", function() {
                if (CurrentChecker == 12) {
                    let Score = 0
                    closeWindow(Zero)
                    openBunch()
                    if ((Mode == 1)|| (Mode == 2 && Turn == 1)) {
                        if (YahtzeeChecker == false && RollCounter > 0) {
                            Yahtzee = Score
                            YahtzeeScore.innerHTML = Score
                            YahtzeeChecker = true
                            BottomScore()
                            Reset()
                            if (Mode == 2) {
                                Turn = 2
                            }
                        }
                    }
                    else {
                        if (YahtzeeChecker2 == false && RollCounter > 0) {
                            YahtzeeScore2.innerHTML = Score
                            YahtzeeScore2 = Score
                            YahtzeeChecker2 = true
                            BottomScore2()
                            Reset()
                            Turn = 1
                        }
                    }
                }
            })
        }
    }
})

NewGame.addEventListener("click", function() {
    closeBunch()
    openWindow(New)
})

DenyNew.addEventListener("click", function() {
    closeWindow(New)
    openBunch()
})

ConfirmNew.addEventListener("click", function() {
    closeWindow(New)
    openBunch()
    Reset()
    OneChecker = false
    TwoChecker = false
    ThreeChecker = false
    FourChecker = false
    FiveChecker = false
    SixChecker = false
    ThreeKindChecker = false
    FourKindChecker = false
    ShortStraightChecker = false
    LongStraightChecker = false
    FullHouseChecker = false
    ChanceChecker = false
    YahtzeeChecker = false
    UpperScoreChecker = false
    LowerScoreChecker = false
    OneScore.innerHTML = ""
    TwoScore.innerHTML = ""
    ThreeScore.innerHTML = ""
    FourScore.innerHTML = ""
    FiveScore.innerHTML = ""
    SixScore.innerHTML = ""
    ThreeKindScore.innerHTML = ""
    FourKindScore.innerHTML = ""
    ShortStraightScore.innerHTML = ""
    LongStraightScore.innerHTML = ""
    FullHouseScore.innerHTML = ""
    ChanceScore.innerHTML = ""
    YahtzeeScore.innerHTML = ""
    UpScore.innerHTML = ""
    LowScore.innerHTML = ""
    BonusScore.innerHTML = ""
    GrandTotalScore.innerHTML = ""
})