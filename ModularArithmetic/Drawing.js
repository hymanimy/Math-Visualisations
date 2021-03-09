function rect(x, y, w, h, color = "Black"){
    ctx.beginPath(); 
    ctx.fillStyle = color;
    ctx.rect(x, y, w, h); 
    ctx.fill();
    ctx.closePath(); 
}

function strokeRect(x, y, w, h, strokeColor = "Black"){
    ctx.beginPath(); 
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, w, h); 
    ctx.stroke();
    ctx.closePath(); 
}

function text(str, x, y, color = "White", size = 20, fontFamily = "Arial"){
    ctx.fillStyle = color;
    ctx.font = String(size) + "px " + String(fontFamily); 
    ctx.fillText(str, x, y);
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
