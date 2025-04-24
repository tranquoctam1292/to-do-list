// script.js

let timer = null; // biến toàn cục để clearInterval khi cần

document.getElementById("start-btn").addEventListener("click", () => {
  const input = document.getElementById("date-input").value;
  if (!input) {
    alert("Bạn chưa chọn ngày!");
    return;
  }

  const targetDate = new Date(input + "T00:00:00");

  // Nếu người dùng chọn ngày trong quá khứ
  if (targetDate <= new Date()) {
    alert("Hãy chọn một ngày trong tương lai!");
    return;
  }

  document.getElementById("countdown").style.display = "flex";

  // Xoá bộ đếm cũ nếu có
  if (timer) clearInterval(timer);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>🎉 Đã đến ngày bạn chọn!</h2>";
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

  updateCountdown(); // gọi ngay lập tức
  timer = setInterval(updateCountdown, 1000); // rồi lặp mỗi giây
});
