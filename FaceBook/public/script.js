const form = document.querySelector("form");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const name = document.getElementById("name");
const messageFeedback = document.getElementById("messageFeedback");
const nameFeedback = document.getElementById("nameFeedback");
const nameFeedbackRequired = document.getElementById("nameFeedbackRequired");
let messageValue = message.value;
let nameValue = name.value;
let isMessageValid = messageValue.length > 0 ? true : false;
let isnameValid = nameValue.length > 0 ? true : false;

let messageValidation = () => {
  if (messageValue.length <= 40 && messageValue.length > 0) {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
    messageFeedback.style.display = "none";
    messageFeedbackRequired.style.display = "none";
    isMessageValid = true;
  } else if (messageValue.length > 40) {
    message.classList.remove("is-valid");
    message.classList.add("is-invalid");
    messageFeedback.style.display = "block";
    messageFeedbackRequired.style.display = "none";
    isMessageValid = false;
  } else if (messageValue.length == 0) {
    message.classList.remove("is-valid");
    message.classList.add("is-invalid");
    messageFeedback.style.display = "none";
    messageFeedbackRequired.style.display = "block";
    isMessageValid = false;
  }
};

let nameValidation = () => {
  if (nameValue.length <= 15 && nameValue.length > 0) {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    nameFeedback.style.display = "none";
    nameFeedbackRequired.style.display = "none";
    isnameValid = true;
  } else if (nameValue.length > 15) {
    name.classList.remove("is-valid");
    name.classList.add("is-invalid");
    nameFeedback.style.display = "block";
    nameFeedbackRequired.style.display = "none";
    isnameValid = false;
  } else if (nameValue.length == 0) {
    name.classList.remove("is-valid");
    name.classList.add("is-invalid");
    nameFeedback.style.display = "none";
    nameFeedbackRequired.style.display = "block";
    isnameValid = false;
  }
};

message.addEventListener("keyup", (e) => {
  messageValue = e.target.value;
  messageValidation();
});

name.addEventListener("keyup", (e) => {
  nameValue = e.target.value;
  nameValidation();
});

form.addEventListener("keyup", () => {
  if (isMessageValid && isnameValid) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "true");
  }
});
