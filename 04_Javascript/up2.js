const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const input = document.getElementById("guessInput");
const button = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const attemptInfo = document.getElementById("attemptInfo");

function checkAnswer(guess) {
  if (guess === answer) return "correct";
  if (guess < answer) return "up";
  return "down";
}

function handleGuess() {
  const userGuess = Number(input.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultDiv.textContent = " 1부터 100 사이의 숫자만 입력해주세요.";
    return;
  }

  attempts++;
  const result = checkAnswer(userGuess);

  if (result === "correct") {
    resultDiv.textContent = `정답입니다! ${answer}`;
    input.disabled = true;
    button.disabled = true;
  } else if (result === "up") {
    resultDiv.textContent = `${userGuess}🔼 UP!`;
  } else if (result === "down") {
    resultDiv.textContent = `${userGuess}🔼 DOWN!`;
  }

  attemptInfo.textContent = `남은 기회: ${maxAttempts - attempts}`;

  if (attempts >= maxAttempts && result !== "correct") {
    resultDiv.textContent = `실패! 정답은 ${answer}였습니다.`;
    input.disabled = true;
    button.disabled = true;
  }

  input.value = "";
  input.focus();
}

// 버튼 클릭 시 처리
button.addEventListener("click", handleGuess);

// 엔터키 입력 시 처리
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleGuess();
  }
});
