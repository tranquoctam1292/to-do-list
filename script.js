// script.js

// 🎯 Thời điểm đến Tết Nguyên Đán 2025: 29/01/2025
const targetDate = new Date("2025-01-29T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>🎆 Chúc mừng năm mới!</h2>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// 🕓 Gọi lần đầu + lặp lại mỗi giây
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
