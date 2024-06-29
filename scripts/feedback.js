/* THIS JS FILE IS MADE BY ADVIKA */

document.addEventListener ('DOMContentLoaded', function(){
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
        feedbackForm.reset();
    });
})