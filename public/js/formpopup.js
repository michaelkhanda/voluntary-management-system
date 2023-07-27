const contactForm = document.querySelector('.contact-form');

let nameInput = document.getElementById('dname');
let emailInput = document.getElementById('demail');
let subjectInput = document.getElementById('dsubject');
let messageInput = document.getElementById('dmessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
        } else {
            alert('Something went wrong!');
        }
    }
    xhr.send(JSON.stringify(formData));
});