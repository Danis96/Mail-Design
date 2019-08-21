// variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form'),
     


// eventListeners
eventListeners();

function eventListeners() {
    // app init (pojsavljuje se kada se stranica loada)
     document.addEventListener('DOMContentLoaded', appInit); 
    

    // validate the fields 
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // send email and reset btn
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
    
    

}

// functions

// app initialization
function appInit() {
    // disble the send btn

    sendBtn.disabled = true;

}

function sendEmail(e) {
    e.preventDefault();

    // show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // show the email image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // hide spinenr then show email image
    setTimeout(function() {
        
        // hide the spinner
        spinner.style.display = 'none';

        // show the image
        document.querySelector('#loaders').appendChild(sendEmailImg);
        
        // after 5 s hide the image and reset the form
        setTimeout(function(){
           sendEmailForm.reset();
           sendEmailImg.remove();
           alert('Email Sent');
        }, 5000);

    }, 3000);
    

    
}

// validate the fields
function validateField(){
    let errors;

    // validate the length of the field
    validateLength(this);

    // validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }

    // both will return errors then check if there are any errors
    errors = document.querySelectorAll('.error');

    // check that inputs are not empry

    if(email.value !== '' && subject.value !== '' && message.value !== '') {
                if(errors.length === 0) {
                    sendBtn.disabled = false;
                }
    }


}

// validate the length of the fields
function validateLength(field) {
    if(field.value.length  > 0)
    {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// validate email
function validateEmail(field) {
    let emailText = field.value;

    if(emailText.indexOf('@') !== -1 )
    {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
    
}

// reset the form
function resetForm() {
    sendEmailForm.reset();
}

