// getting HTML items
const form = document.getElementById("theForm");
const submit = document.getElementById("submit");
const inputs = document.querySelectorAll(".inputs");
const title = document.querySelector("#title");
const first = document.getElementById("first");
const last = document.getElementById("last");
const username = document.getElementById("username");
const password = document.getElementById("pass");
const passErr = document.querySelector("#passErr");
const email = document.querySelector("#email");
const emErr = document.getElementById("emErr");
const welcome = document.getElementById("welcome");

// title
const titleText = "Sign up in NO WHERE";

// empty fields error
inputs.forEach(function (input) {
  submit.addEventListener("click", function () {
    if (input.value == "") {
      input.placeholder = "This field must not be empty!";
      input.classList.add("shadow");
      title.textContent = titleText;
    } else {
      input.classList.remove("shadow");
    }
  });
});

// password low char error
const passError = function () {
  console.log(password.value.length);
  const passCond = password.value > "" && password.value.length < 8;
  let passText = "your password must have at least 8 characters!";
  if (passCond) {
    passErr.textContent = passText;
    password.classList.add("passShadow");
    title.textContent = titleText;
  } else {
    password.classList.remove("passShadow");
    passErr.textContent = "";
  }
};
submit.addEventListener("click", passError);

// email not having @ error
const emailErr = function () {
  const noAddsign = email.value.includes("@");
  const noValid = email.value.includes("@gmail.com");
  const noValue = email.value != "";
  let emailText = "your email must contain '@' !";
  if (!noAddsign && noValue) {
    emErr.textContent = emailText;
    email.classList.add("emailShadow");
    title.textContent = titleText;
  } else if (!noValid && noAddsign) {
    emailText = "write a valid email!";
    emErr.textContent = emailText;
  } else {
    email.classList.remove("emailShadow");
    emErr.textContent = "";
  }
};
submit.addEventListener("click", emailErr);

// correct form submission proccess
form.addEventListener("submit", function (e) {
  // saved data
  const firstName = first.value;
  const lastName = last.value;

  // conditions
  const errors =
    password.value !== "" &&
    password.value.length > 7 &&
    email.value !== "" &&
    username.value !== "" &&
    email.value.includes("@gmail.com");

  e.preventDefault();
  console.log(errors);
  if (errors) {
    form.remove();
    title.textContent = `Hello ${firstName} ${lastName}`;
    welcome.textContent = "Welcome to NO WHERE!";
  }
});
