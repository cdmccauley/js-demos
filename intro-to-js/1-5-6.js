noStroke();

var leftX = 164;
var rightX = 235;
var sunRadius = 100;

draw = function() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    // left cloud moves left
    leftX--;
    
    // right cloud moves right
    rightX++;
    
    // sun becomes closer
    sunRadius += 2;
    
};