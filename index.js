/** calculator application JavaScript
 *  Author: Tyler Hughes
 */

const screen = document.getElementById("screen");

/**
 *   appends value to screen
 *   @param input - a string value of for a numeric operator or integer to be appended 
 */ 
function addToScreen(input){
    screen.value += input;
}

// clears all values from screen
function clearValues(){
    screen.value="";
}

// evaluates code and displays the result
function evaluateSum(){
    try{
        screen.value = eval(screen.value);
    } 
    catch(err){
        screen.value = "Error";
    }
}