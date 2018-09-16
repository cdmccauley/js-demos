var xPos = 385;
var yPos = 10;
var xUfo = -10;
var rUfo = 255;
var gUfo = 0;
var bUfo = 0;

draw = function() {
    
    // night sky
    background(29, 40, 115);
    
    // moon
    fill(255, 255, 255);
    ellipse(40, 40, 100, 100);
    
    // stars
    stroke(255, 255, 255);
    strokeWeight(2.5);
    point(144, 63);
    point(192, 72);
    point(233, 88);
    point(276, 115);
    point(360, 121);
    point(363, 174);
    point(286, 177);
    
    noStroke();
    
    // buildings
    fill(0, 0, 0);
    rect(10, 300, 83.75, 100);
    rect(103.75, 200, 83.75, 200);
    rect(197.5, 250, 83.75, 150);
    rect(291.25, 300, 83.75, 100);
    
    // windows
    fill(255, 255, 255);
    rect(135, 314, 21.25, 21.25);
    rect(123, 216, 21.25, 21.25);
    rect(212, 269, 21.25, 21.25);
    rect(303, 353, 21.25, 21.25);
    rect(148, 258, 21.25, 21.25);
    rect(245, 305, 21.25, 21.25);
    rect(338, 316, 21.25, 21.25);
    rect(31, 363, 21.25, 21.25);
    rect(55, 323, 21.25, 21.25);
    
    // shooting star
    fill(255, 255, 255);
    ellipse(xPos, yPos, 10, 10);
    
    // ufo
    fill(rUfo, gUfo, bUfo);
    triangle(xUfo, 120, xUfo + 40, 85, xUfo, 50);
    
    noStroke();
    
    xPos -= 12;
    yPos += 6;
    xUfo += 2;
    rUfo -= 1;
    gUfo += 1;
    bUfo += 1;
};
