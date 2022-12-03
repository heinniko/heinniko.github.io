// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("Pfand").value = "";
    document.getElementById("Punsch").value = "";
    document.getElementById("Bowle").value = "";
    document.getElementById("Halb - Halb").value = "";
    document.getElementById("Baumkuchen").value = "";
    document.getElementById("Langos").value = "";
    document.getElementById("Pfand zurück").value = "";
    }
    
// This function displays values
function display(value) {
document.getElementById("result").value += value;
}

//Overview
function overview(value) {
    var a = document.getElementById(value).value += '+1';
    var b = eval(a);
    document.getElementById(value).value = b;
}
    
// This function evaluates the expression and returns result
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}