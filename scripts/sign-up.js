var i = 0;
var image = document.getElementById("myImg");
var confirmImage = document.getElementById("confirm-myImg");
var imgs = new Array('../images/no-view.svg', '../images/view.svg');

function imgsrc() {
    i++;
    i %= imgs.length;
    image.src = imgs[i];
}

function confirmImgsrc() {
    i++;
    i %= imgs.length;
    confirmImage.src = imgs[i];
}

const inputPass = document.getElementById('form-pass');
const confirmInputPass = document.getElementById('confirm-pass');
const iconPass = document.getElementById('pass-icon');
const confirmIconPass = document.getElementById('confirm-pass-icon');

iconPass.addEventListener('click', () => {
    if (inputPass.getAttribute('type') === "password") {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password');
    }
});

confirmIconPass.addEventListener('click', () => {
    if (confirmInputPass.getAttribute('type') === "password") {
        confirmInputPass.setAttribute('type', 'text');
    } else {
        confirmInputPass.setAttribute('type', 'password');
    }
});


