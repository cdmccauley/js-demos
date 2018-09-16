var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // skin color

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // eye fill
ellipse(x - 50, y - 50, 30, 30); // left eye
ellipse(x + 50, y - 50, 30, 30); // right eye
fill(0, 0, 0); // pupil/mouth fill
rect(x - 55, y - 50, 10, 10); // left pupil
rect(x + 45, y - 50, 10, 10); // right pupil

ellipse(x, y, 120, 60); // mouth