const form = document.querySelector("form");
const button = form.querySelector('[type="submit"]');
const msg = "Please provide a valid email address";

const error = document.createElement("p");
error.classList.add("error_text");
error.textContent = msg;

function checkEmail(e) {
  e.preventDefault();
  const email = e.target.querySelector('[type="email"]').value;
  if (!validateEmail(email)) {
    form.classList.add("error");
    form.insertBefore(error, button);
  } else {
    form.classList.remove("error");
    form.removeChild(error);
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", checkEmail);
