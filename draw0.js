
let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");


ctx.fillStyle = "#000000";


ctx.fillRect(0, 0, canvas.width, canvas.height);


document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.code === "Escape") {
 
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return; // Ukončení funkce
  }

  switch (event.code) {
    case "KeyS":
  
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let s = Math.random() * 100 + 50;
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      drawSquare(x, y, s, col);
      break;
    case "KeyL":
      randLightning();
      break;
    case "KeyK":
      randCross();
      break;
    case "KeyC":
      randomCircle();
      break;
  }
});

function randomEllipse() {
  let r = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  drawCircle(x, y, r, col);
}

function randomCircle() {
  let w = Math.random() * 100 + 50;
  let h = w;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  drawEllipse(x, y, w, h, c);
}



function drawRectangle(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.strokeRect(x, y, w, h);
}


function drawEllipse(x, y, w, h, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function drawCircle(x, y, r, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSquare(x, y, s, col) {
  ctx.fillStyle = col;
  ctx.fillRect(x, y, s, s);
}

function randCross() {
  let size = Math.random() * 100 + 50; 
  let x = Math.random() * (canvas.width - size) + size / 2; 
  let y = Math.random() * (canvas.height - size) + size / 2; 
  let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; 
  drawCross(x, y, size, color);
}

function drawCross(x, y, size, col) {
  ctx.strokeStyle = col;
  ctx.lineWidth = 5; 
  ctx.beginPath();
  ctx.moveTo(x - size / 2, y); 
  ctx.lineTo(x + size / 2, y);
  ctx.moveTo(x, y - size / 2); 
  ctx.lineTo(x, y + size / 2);
  ctx.stroke();
}

function randLightning() {
  let size = Math.random() * 100 + 50; 
  let x = Math.random() * (canvas.width - size) + size / 2; 
  let y = Math.random() * (canvas.height - size) + size / 2; 
  let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; 
  drawLightning(x, y, size, color);
}

function drawLightning(x, y, size, col) {
  ctx.strokeStyle = col;
  ctx.lineWidth = 5; 
  ctx.beginPath();
  ctx.moveTo(x, y - size / 2); 
  ctx.lineTo(x + size / 4, y + size / 4);
  ctx.lineTo(x - size / 4, y + size / 4);
  ctx.lineTo(x + size / 4, y + size / 2);
  ctx.lineTo(x, y + size / 4);
  ctx.lineTo(x - size / 4, y + size / 2);
  ctx.lineTo(x, y - size / 2); 
  ctx.stroke();
}