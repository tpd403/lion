const input = prompt("숫자를 입력하세요:");
const num = Number(input);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

if (isNaN(num)) {
  console.log("숫자를 입력해야 합니다.");
} else {
  if (isPrime(num)) {
    console.log(`${num}은(는) 소수입니다.`);
  } else {
    console.log(`${num}은(는) 소수가 아닙니다.`);
  }
}