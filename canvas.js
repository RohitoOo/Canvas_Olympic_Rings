var canvas = document.querySelector("canvas") ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




var c = canvas.getContext("2d");



// color = "#" + Math.floor(Math.random() * 10000)
// color2 = "#" + Math.floor(Math.random() * 1000)
// console.log(color);
//
// c.fillStyle = color
// c.fillRect(100,100,100,100)
// c.fillRect(300,100,100,100)
// c.fillStyle = color2
// c.fillRect(200,300,100,100)
// c.fillStyle = "black"
// c.fillRect(100,500,300,50)
//
//
// c.beginPath();
// c.moveTo(150,250)
// c.lineTo(150,300)
// c.stroke()
// c.style = "black"
x=200;
y=200
var radius = 70;
dx= 3;
dy=3;
function animate(){

  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);


c.beginPath();
c.arc(x ,y, radius, 0, Math.PI * 2,false);
c.strokeStyle = "blue";
c.lineWidth = 10;
c.stroke();

c.beginPath();
c.arc(x+85,y+50, radius, 0, Math.PI * 2,false);
c.strokeStyle = "orange";
c.stroke();

c.beginPath();
c.arc(x+160,y, radius, 0, Math.PI * 2,false);
c.strokeStyle = "black";
c.stroke();

c.beginPath();
c.arc(x+255,y+50, radius, 0, Math.PI * 2,false);
c.strokeStyle = "green";
c.stroke();

c.beginPath();
c.arc(x+320,y, radius, 0, Math.PI * 2,false);
c.strokeStyle = "red";
c.stroke();

x += dx
y += dy

//adjusted for arc thickness
if ( x + 320 + radius > innerWidth || x - radius < 0){

  dx = -dx
}
//adjusted for arc thickness
if (y + 50 + radius > innerHeight || y - radius - 20 < 0 ){
dy = - dy

}
};
animate();
