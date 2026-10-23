# Yahtzee-with-UI 
<img width="1920" height="917" alt="image" src="https://github.com/user-attachments/assets/5c0198b0-e582-491e-9c68-0aa00c3abcf4" />


A few months ago, I created Yahtzee in the terminal using Python, which can be found here: https://github.com/checkmateman57/Yahtzee <br>
A lot of the comments suggested that I make a UI out of this project, so I did! 
<b> Please note that this will probably work best in a screen resolution of 1920x1080p (1k, or HD, or just 1080p or whatever you want to call it), as that's what I've been basing this entire thing off of. If you have 2k or 4k, or are on mobile, it might be weird for you. Sorry if this is an inconvenience. </b>

## Overview 
My website has very minimal functions, in terms of what you can click, so heres the rundown: <br>
How to play - Opens up the rules of the website, as well as the scoring <br>
New Game - Resets all of your currents score and start from scratch <br>
Single Player - Play a game by youself, only one column of score. Note: switching to this mode starts a new game <br>
MultiPlayer - Play a game with someone else, 2 columns where you alternate turns. Note: switching to this mode starts a new game <br>
Roll - Roll the dice <br>
Clicking on a dice - Unlocks or locks the die's value depending on what its state currently is <br>
Clicking a scoring section - Will give you a score for that section. If it's a 0, you'll be asked to confirm that you want to record a 0 <br>
### Rules
- You can only roll the dice 3 before you have to score a section <br>
- You can only score each section once during the game, which includes yahtzee <br>

## Scoring
Scoring is divided into 2 sections: Upper and Lower Section <br>
### Upper Section
Ones - All of the dice with a value of 1 are added up. <br>
Twos - All of the dice with a value of 2 are added up. <br>
Threes - All of the dice with a value of 3 are added up. <br>
Fours - All of the dice with a value of 4 are added up. <br>
Fives - All of the dice with a value of 5 are added up. <br>
Sixes - All of the dice with a value of 6 are added up. <br>
If your total score in the upper section is at least 63, you get a 35 point bonus.

#### Example
If you have 3 dice that have a value of 6, and click sixes, your score will be 18

### Lower Section
Three of a Kind - If you have 3 dice that are the same, then your score is all dice added up together. <br.>
Four of a Kind - If you have 4 dice that are all the same, your score is all dice added up together. <br>
Short Straight - If you have 4 dice in a row, worth 30 points. <br>
Long Straight - If you have 5 dice in a row, worth 40 points. <br>
Full House - If you have 3 dice of the same value, and 2 dice of the same value but different from the other 3, worth 25 points. <br>
Chance - All your dice added up together <br>
Yahtzee - If all of your dice have the same value, worth 50 points


## Final Comments
I am really happy with how this project turned out, I learned a lot of new things in js, and I improved my CSS skills as well, especially with the making of the dice. I am surprised by the amount of time it took, but of course there has to be a steep learning curve, especially for my second project with these languages and my first without a tutorial. Tying in mulitplayer was also very long, and I came across a lot of bugs so it's kinda interesting to see how I can make my code better whether or not I add features like this or not to my next project. Overall, I'm really happy, a really nice project, and I can't wait to start the next project!
