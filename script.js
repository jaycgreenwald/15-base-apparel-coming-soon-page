const submitButton = document.querySelector(".js-btn-rounded");

// prevent form from being submitted before validation
submitButton.addEventListener("click", function(event) {
    event.preventDefault()
  });


const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

submitButton.addEventListener("click", validateEmail);

submitButton.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});

function validateEmail() {
  const inputEmail = document.querySelector('.js-input-email-rounded').value;
  const inputField = document.querySelector('.js-input-email-rounded');
  const isValidEmail = emailRegex.test(inputEmail);
  
  if (isValidEmail === false) {
      inputField.style.border = "1px solid hsl(0, 93%, 68%)";
      document.querySelector('.js-error-email').style.display = 'block';
    } else {
      inputField.style.border = "1px solid hsl(0, 36%, 70%)";
      document.querySelector('.js-error-email').style.display = 'none';
  }
  
}
