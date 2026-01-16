const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

/* ===== MATRIX RAIN ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const letters = "アカサ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const size = 16;
const cols = canvas.width / size;
const drops = Array.from({ length: cols }).fill(1);

function matrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#22d3ee";
  ctx.font = size + "px monospace";

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * size, y * size);
    if (y * size > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(matrix, 33);

/* ===== TERMINAL AUTO TYPING ===== */
const terminal = document.getElementById("terminal");
const commands = [
  "Scanning ports...",
  "Bypassing firewall...",
  "Injecting payload...",
  "Access granted ✔"
];

let i = 0;
setInterval(() => {
  if (i < commands.length) {
    terminal.innerHTML += `<p>${commands[i]}</p>`;
    i++;
  }
}, 1200);