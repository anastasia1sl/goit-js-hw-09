const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', collectFormData);
textarea.addEventListener('input', collectFormData);

storedData();

function onFormSubmit(event) {
  event.preventDefault();

  if (emailInput.value === '' || textarea.value === '') {
    alert('The fields can not be empty');
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

  if (savedMessage) {
    const { email, message } = JSON.parse(savedMessage);
    emailInput.value = email;
    textarea.value = message;
  }
}
