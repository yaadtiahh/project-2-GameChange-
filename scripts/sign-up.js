var i=0;
var image=document.getElementById("myImg");
var imgs=new Array('../images/no-view.svg','../images/view.svg');
function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}


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


