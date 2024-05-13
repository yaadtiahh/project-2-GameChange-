const inputPass = document.
getElementById('form-pass');
const iconPass = document.
getElementById('pass-icon');

iconPass.addEventListener('click', () => 
    {
    if (inputPass.getAttribute('type')  
    === "password") {
        inputPass.setAttribute('type',
        'text');
    } else {    
        inputPass.setAttribute('type',
        'password');
    }
});

