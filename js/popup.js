let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');

// console.log(loginPopup);
// console.log(loginButton);

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
	evt.preventDefault();
	// console.log(evt);
	loginPopup.classList.add('visible');
}