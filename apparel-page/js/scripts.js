"use strict";

let $ = document.querySelector.bind(document);

const email = $("#email");
const submit = $("#submit");

submit.addEventListener("click", notifyMe);

function notifyMe() {
  if (email.value === "") {
    alert("Please enter an email!");
  }

  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (re.test(email.value)) {
    alert("You have been notified!");
  } else {
    alert(
      "Your email has not passed the email format. ex: someone@something.com"
    );
  }

  email.value = "";
}
