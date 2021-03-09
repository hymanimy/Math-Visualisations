let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); 
let table; 

function reset(){
    clearCanvas();
    table = new ModularArithmeticTable(parseInt(nSlider.value), parseInt(tableSelect.selectedIndex)); 
    table.show(); 
}

reset();
