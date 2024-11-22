/** calculator application JavaScript
 *  Author: Tyler Hughes
 */

const inputScreen = document.getElementById("InputScreen");
const calculationScreen = document.getElementById("CalculationScreen");

/**
 *   appends value to screen
 *   @param input - a string value of for an integer to be appended to the calculator screen
 */ 
function addToScreen(input){
    inputScreen.value += input;
}

function addOperator(input){
    calculationScreen.value += inputScreen.value;
    calculationScreen.value += input;
    inputScreen.value="";
}

// clears all values from screen
function clearValues(){
    inputScreen.value="";
    calculationScreen.value="";
}

// evaluates code and displays the result
function evaluateSum(){
    calculationScreen.value += inputScreen.value;
    inputScreen.value="";
    try{
        inputScreen.value = eval(calculationScreen.value);
    } 
    catch(err){
        inputScreen.value = "Error";
    }
}