const myCanvas = document.querySelector("canvas");
const inputRef = document.querySelector(".function-input");
const buttonRef = document.querySelector(".apply-btn");
const clearButtonRef = document.querySelector(".clear-btn");

const ctx = myCanvas.getContext("2d");
ctx.canvas.width = 400;
ctx.canvas.height = 400;

drawAxes();

buttonRef.addEventListener("click", () => {
  drawLinearFunction(inputRef.value);
});

clearButtonRef.addEventListener("click", () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawAxes();
});

function drawLinearFunction(graphFunction) {
  ctx.lineWidth = 1;
  for (let xS = 0; xS <= 399; xS++) {
    const x = xS - 200;
    const y = eval(graphFunction.toLowerCase());
    const yS = 200 - y;
    // ctx.fillRect(xS, yS, 2, 2);

    if (xS !== 0) {
      ctx.lineTo(xS, yS);
    }

    ctx.moveTo(xS, yS);

    if (xS !== 0) {
      ctx.stroke();
    }
  }
}

function drawAxes() {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(201, 0);
  ctx.lineTo(201, 401);

  ctx.moveTo(0, 201);
  ctx.lineTo(401, 201);

  ctx.stroke();

  ctx.font = "12px Arial";
  ctx.fillText("-100", 85, 215);
  ctx.fillText("100", 290, 215);
  ctx.fillText("-100", 172, 305);
  ctx.fillText("100", 175, 105);
}
