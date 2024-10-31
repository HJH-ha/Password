// alert("test");

function checkPassword() {
  //패스워드 입력한 값
  const password = document.getElementById("password").value;
  //패스워드 재입력 값
  const cnfrmpassword = document.getElementById("cnfrm-password").value;
  console.log(
    "Password: ",
    password,
    "\n",
    "Confirm Password: ",
    cnfrmpassword
  );
  const message = document.getElementById("message");

  if (password.length >= 4) {
    if (password == cnfrmpassword) {
      message.textContent = "패스워드 매치!";
      message.style.backgroundColor = "#1dcd59";
    } else {
      message.textContent = "패스워드가 틀립니다.";
      message.style.backgroundColor = "#ff4d4d";
    }
  } else {
    alert("패스워드 길이는 4이상!");
    message.textContent = "";
  }
}
