let nSlider = document.getElementById("nSliderRange");
let tableSelect = document.getElementById("tableSelect"); 

nSlider.oninput = function(){
    document.getElementById("nSliderValue").innerHTML = "n = " + nSlider.value;
    reset();
}

function createTable(){

    // Reads the selected index of the select element in HTML
    let tableType = tableSelect.selectedIndex == "0" ? "Multiplication" : "Addition"; 
    
    // Changes the title in the HTML document 
    document.getElementById("nSliderTitle").innerHTML = tableType + " table for Integers modulo n";

    // Reset board
    reset();
}