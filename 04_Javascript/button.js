// 요소 선택
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

// 증가
increaseBtn.addEventListener("mouseover", () => {
  count++;
  countDisplay.textContent = count;
});

// 감소
decreaseBtn.addEventListener("mouseover", () => {
  count--;
  countDisplay.textContent = count;
});