function handleSubmit(evt) {
    evt.preventDefault();
    alert('Form submitted');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const userImage = document.querySelector('#userImage');

userImage.addEventListener('mouseover', function() {
    alert('Hola Cutie ;)'); 
});