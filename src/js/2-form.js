const form = document.querySelector('form');
const emailInput = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', collectFormData);

storedData();

function onFormSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = textarea.value.trim();

  if (email === '' || message === '') {
    alert(
      'The Please fill in all fields before submitting the form can not be empty'
    );
    return;
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  }

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function collectFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function storedData() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage !== null && savedMessage !== undefined) {
    const { email, message } = JSON.parse(savedMessage);
    emailInput.value = email;
    textarea.value = message;
  }
}
