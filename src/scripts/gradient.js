const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#000000", "#07213F", "#1b3a5b"];

let time = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const w = canvas.width;
  const h = canvas.height;

  for (let i = 0; i < 6; i++) {
    const gradient = ctx.createRadialGradient(
      Math.sin(time * 0.001 + i) * w + w / 2,
      Math.cos(time * 0.001 + i) * h + h / 2,
      0,
      w / 2,
      h / 2,
      w
    );

    gradient.addColorStop(0, colors[i % colors.length]);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }

  time++;
  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});