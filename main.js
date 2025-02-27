let password = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.type = "password";
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});