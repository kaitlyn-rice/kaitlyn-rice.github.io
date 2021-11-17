var heading = document.querySelector("h1");
var displayColor = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("message");

var levels = document.querySelectorAll(".difficulty");

var mode = document.querySelectorAll(".game");
var gameMode = "RGB";

var reset = document.querySelector("#reset");

var numSqrs = 9;
var sqrs = document.querySelectorAll(".square");

var colors = [];
var winColor;
var userColor

/*
Funciton: getRBG()
Parameters: 
    null

Returns: randomized rgb value
*/

function getRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*
Funciton: getHEX()
Parameters: 
    null

Returns: randomized hex value
*/
function getHEX(){
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var hexidecimal = "#";

    while (hexidecimal.length < 7){
        hexidecimal += digits[Math.floor(Math.random() * digits.length)];
    }

    return hexidecimal;
}

/*
Funciton: setColors()
Parameters: 
    null

Returns: array of color values
*/
function setColors(){
    if (gameMode === "RGB"){
        for (var i = 0; i < numSqrs; i++){
            colors[i] = getRGB();
        }
    } else {
        for (var i = 0; i < numSqrs; i++){
            colors[i] = getHEX();
        }
    }

    return colors;
}

/*
Function: pickColor
Parameters:
    arr: array of randomized colors (colors[])

Returns: value of color array at a random index
        * Note: initialize winningColor 
*/
function pickColor(){
    var index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

/*
Function: changeColor
Parameters:
    null

Returns: null
    sets all color to winning color
*/
function changeColor(){
    for (var i = 0; i < numSqrs; i++){
        sqrs[i].style.background = winColor;
    }

    heading.style.background = winColor;
    displayMessage.style.color = winColor;

    for (var i = 0; i < levels.length; i++){
        levels[i].style.color = winColor;
    }

    for (var i = 0; i < mode.length; i++){
        mode[i].style.color = winColor;
    }

    reset.style.color = winColor;
}

/*
Function: setupLevels
Parameters:
    none

Returns: null
    set numSqrs according to level chosen
*/
function setupLevels(){
    for(var i = 0; i < levels.length; i++){
        levels[i].addEventListener("click", function(){
            levels[0].classList.remove("selected");
            levels[1].classList.remove("selected");
            levels[2].classList.remove("selected");

            this.classList.add("selected");
            
            if (this.textContent === "Easy"){
                numSqrs = 3;
            }
            if (this.textContent === "Medium"){
                numSqrs = 6;
            }
            if (this.textContent === "Hard"){
                numSqrs = 9;
            }

            gameReset();
        });
    }
}

/*
Function: setupMode
Parameters:
    none

Returns: null
    set gameMode to either rgb or hex
*/
function setupMode() {
    for (var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");

            this.classList.add("selected");

            if (this.textContent === "RGB"){
                gameMode = "RGB";
            } else {
                gameMode = "HEX";
            }

            gameReset();
        });
    }
}

/*
Function: setupSqrs
Parameters:
    none

Returns: null
    set square colors and color gameplay
*/
function setupSqrs(){
    for (var i = 0; i < sqrs.length; i++){
        sqrs[i].addEventListener("click", function(){
            userColor = this.style.background;
            
            if(userColor == winColor){
                winReset();
            } else {
                this.style.background = "#1f1f1f";
                displayMessage.textContent = "Try Again";
            }
        });
    }
}

/*
Function: gameReset
Parameters:
    none

Returns: null
    resets gameplay
*/
function gameReset(){
    displayMessage.textContent = "";
    displayMessage.style.color = "#fff";
    reset.textContent = "New Colors";

    colors = setColors(numSqrs);
    winColor = pickColor();
    displayColor.textContent = winColor;
    
    for (var i = 0; i < sqrs.length; i++){
        if (colors[i]){
            sqrs[i].style.display = "block";
            sqrs[i].style.background = colors[i];
        } else {
            sqrs[i].style.display = "none";
        }
        
    }
    heading.style.background = "#C4B454";
    
    for (var i = 0; i < levels.length; i++){
        levels[i].style.color = "#fff";
    }

    for (var i = 0; i < mode.length; i++){
        mode[i].style.color = "#fff";
    }
    
    reset.style.color = "#fff";
}

/*
Function: winReset
Parameters:
    none

Returns: null
    user choice, resets game board or show winning board
*/
function winReset(){
    if (confirm("You Won! Play again?")){
        gameReset();
    } else {
        displayMessage.textContent = "Correct!";
        reset.textContent = "New Colors";
        changeColor(winColor);
    }
}

// set click for reset button
reset.addEventListener("click", function(){
    gameReset();
});

/*
Function: initialize
Parameters:
    none
Returns: null
    start gameplay
*/
function initialize(){
    setupLevels();
    setupMode()
    setupSqrs();
    
    gameReset();
}

initialize();