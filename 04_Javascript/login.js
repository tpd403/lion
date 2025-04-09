document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    if (username === "" || password === "" || email === "") {
      alert("아이디, 비밀번호, 이메일을 모두 입력해주세요.");
      return;
    }

    if (password.length < 6) {
      alert("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    const passwordchar = /[!*\%$#@?]/;
    if (!passwordchar.test(password)) {
      alert("비밀번호에는 다음 특수문자 중 하나 이상이 포함되어야 합니다: !, *, %, $, #, @, ?");
      return;
    }

    console.log("정보가 성공적으로 전송되었습니다!");
    console.log("아이디:", username);
    console.log("이메일:", email);

    alert("정보가 성공적으로 전송되었습니다!");
    form.reset();
  });
});