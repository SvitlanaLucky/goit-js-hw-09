const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
  formData = JSON.parse(saveData);
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}

refs.form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  refs.form.reset();
});
