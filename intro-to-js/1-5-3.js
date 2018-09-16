noStroke();

// sky
background(82, 222, 240);

// initial sun size
var sunSize = 30; 

draw = function() {
    
// sun
fill(255, 204, 0);
ellipse(200, 298, sunSize, sunSize);

// land
fill(76, 168, 67);
rect(0, 300, 400, 100);

// sun becomes closer
sunSize = sunSize + 1;

};