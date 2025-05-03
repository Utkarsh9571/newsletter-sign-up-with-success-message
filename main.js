const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const form = document.getElementById('form')
const emailInput = document.getElementById('email')
const wholePage = document.getElementById('card')
const successPage = document.querySelector('.success-message')
const dismissMessage = document.getElementById('dismiss')

let isValidationOn = false
let isFormValid = false

const validateInputs = () =>{
    if(!isValidationOn) return;
     isFormValid = true;

    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.classList.add('hidden');

    if(!isValidEmail(emailInput.value)){
        emailInput.classList.add('invalid');
        emailInput.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
}

const resetForm = () => {
    isFormValid = true;
    form.reset();
    emailInput.classList.remove('invalid');
    const errorDiv = emailInput.nextElementSibling;
    errorDiv.classList.add('hidden');
    successPage.classList.add('removed');
    wholePage.classList.remove('hide');
  };

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateInputs();
    isValidationOn = true;

    if(isFormValid) {
        wholePage.classList.add('hide');
        successPage.classList.remove('removed');
    }
});

emailInput.addEventListener('input', () =>{
    validateInputs();
});

dismissMessage.addEventListener('click', () =>{
    resetForm();
    isValidationOn = true;
})