const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpTransition = document.getElementById("sign-up-transition");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
const username = document.getElementById(`username`);
const password = document.getElementById(`password`);
console.log(userDB[0].username);
function loginSucceed() {
  let isLoginSucces = false;
  for (let i = 0; i < userDB.length; i++) {
    console.log(
      `Here data ===> ${userDB[i].password} --- ${password.value}`,
      userDB[i].password === password.value
    );
    if (
      userDB[i].username === username.value &&
      userDB[i].password === password.value
    ) {
      isLoginSucces = true;
      window.location.href = "index.html";
      break;
    }
  }
  if (isLoginSucces) {
    alert("Login success");
  } else {
    alert("Try again");
    username.value = "";
    password.value = "";
  }
}
function enterLogin(e) {
  if (e.key === "Enter") {
    loginSucceed();
  }
}

const usernameSignUp = document.getElementById(`username-sign-up`);
const passwordSignUp = document.getElementById(`password-sign-up`);
const emailSignUp = document.getElementById("email-sign-up");
function signUp() {
  if (
    usernameSignUp.value === "" ||
    passwordSignUp.value === "" ||
    emailSignUp.value === ""
  ) {
    alert("Please fill in the require info");
  }
  //   else if (userDB.indexOf(user)) {}
  else {
    const newUserDB = {
      username: usernameSignUp.value,
      password: passwordSignUp.value,
    };
    userDB.push(newUserDB);
    console.log(userDB);
    alert("You have successfully sign up");
    usernameSignUp.value = "";
    passwordSignUp.value = "";
    emailSignUp.value = "";
  }
}
function enterSignup(e) {
  if (e.key === "Enter") {
    signUp();
  }
}
