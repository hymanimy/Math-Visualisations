class ModularArithmeticTable{
    constructor(n, typeOfTable){
        this.n = n
        this.typeOfTable = typeOfTable == 0 ? "Multiplication" : "Addition";
    }

    show(){
        // Since tables are symmetric down the diagonal
        // This could be made twice as effiicient by only doing half the calculations

        // We care about starting at 0 with addition, not multiplication (since its trivial)
        let start = this.typeOfTable == "Multiplication" ? 1 : 0; 
        let squareWidth = canvas.width/(this.n-start); 
        
        for(let r = start; r < this.n; r++){
            for(let c = start; c < this.n; c++){

                let rectX = squareWidth*(r-start); 
                let rectY = squareWidth*(c-start);
                let operatorModuloN = this.typeOfTable == "Multiplication" ? (r*c)%this.n : (r+c)%this.n; 
                let rectColor = this.redToBlueGradient(operatorModuloN); 

                rect(rectX, rectY, squareWidth, squareWidth, rectColor); 


                let textX = rectX + squareWidth/2.8;
                let textY = rectY + squareWidth/1.5;
                let textString = String(operatorModuloN); 
                let textSize = squareWidth/2;   
                let textColor = rectColor == "White" ? "Black" : "White";

                text(textString, textX, textY, textColor, textSize);
            }
        }
    }

    redToBlueGradient(x){
        // x = 0 returns white
        // x being near 1 will return a blue shade
        // x being near this.n will return a red shade

        // White case
        if(x === 0){
            return "White"; 
        }
        
        // We subtract one from x and n since we want a pure red or blue when
        // x equals 1 or n-1 (not 0 or n)

        let red = String((x-1) * 255/(this.n-1)); 
        let green = "0"; 
        let blue = String(255 - (x-1) * 255/(this.n-1));
        return "rgb(" + red + "," + green + "," + blue + ")";
    }
}