const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkAnswer(guess) {
  if (guess === answer) return "correct";
  if (guess < answer) return "up";
  return "down";
}


while (attempts < maxAttempts) {
    const input = prompt(`1부터 100 사이 숫자를 입력하세요. (남은 기회: ${maxAttempts - attempts})`);
    const userGuess = Number(input);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert(" 1부터 100 사이의 숫자만 입력해주세요.");
        continue;
    }

    attempts++;

    const result = checkAnswer(userGuess);

    if (result === "correct") {
        console.log(userGuess);
        console.log("축하합니다! 맞추셨습니다!");
        alert("축하합니다! 맞추셨습니다!");
        break;
    } else if (result === "up") {
        console.log(userGuess);
        console.log("UP!");
        alert("UP!");
    } else if (result === "down") {
        console.log(userGuess);
        console.log("DOWN!");
        alert(`DOWN! (남은 기회: ${maxAttempts - attempts})`);
    }

    if (attempts === maxAttempts) {
        alert(`실패! 정답은 ${answer}였습니다.`);
    }
};