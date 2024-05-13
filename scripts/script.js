/*PROFILE ANIMATION*/
var profileBtn = document.getElementById('profile-btn');
var profileMenu = document.getElementById('profile-menu');

profileBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    profileMenu.style.display = (profileMenu.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function() {
    profileMenu.style.display = 'none';
});


/*PROFILE ANIMATION END*/
