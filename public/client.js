var socket = io();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// change the temp based on the data from the server
function changeTemp(tempData) {
  //scale the input to be half the circle from 0 to 255
  var angle = (Math.PI/120)*tempData + Math.PI;
  console.log('tempAngle:', angle);

  //define the arc
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, 50, 1*Math.PI, angle);
  ctx.lineWidth=20;
  ctx.font="30px Arial";
  ctx.textAlign="center";

  //Add some comments about the temperature and set the color of the arc
  if (tempData < 60) {
    ctx.fillText("It's fucking cold!",c.width/2,c.height/2+35);
    ctx.strokeStyle="blue";
  }
  else if (tempData > 60 && tempData < 85) {
    ctx.fillText("It's fucking alright!",c.width/2,c.height/2+35);
    ctx.strokeStyle="yellow";
  }
  else {
    ctx.fillText("It's fucking hot!",c.width/2,c.height/2+35);
    ctx.strokeStyle="red";
  }

  // draw the arc
  ctx.stroke();
  ctx.fillText(Math.round(tempData),c.width/2,c.height/2);
}

// read the data from the message that the server sent and change the
// background of the webpage based on the data in the message
socket.on('server-msg', function(msg) {
    console.log('msg:', msg);
    changeTemp(Number(msg)); //change the temperature indicator
});
