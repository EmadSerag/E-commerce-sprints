// select Elements
const loginSection = document.getElementById('login');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
	const adminUser ={
		email: "emad@admin.com",
		password: "123"
	}
	localStorage.setItem("adminUser", JSON.stringify(adminUser));
	let userAdmin = JSON.parse(localStorage.getItem("adminUser"));
// pull Data in Elements 
registerForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	let name = document.getElementById('regName').value;
	let email = document.getElementById('regEmail').value;
	let password = document.getElementById('regPassword').value;
	// Values ​​test  
	if(!email || !password || !name) {
		alert('Please fill in all fields 🥺');
		return;
	}
	if(!validateEmail(email)) {
		alert('Please enter a valid email address 🥺');
		return;
	}
	// set data in localStorage
	localStorage.setItem("user", JSON.stringify({
		name,
		email,
		password
	}))
	alert('Registeration successful! 🎉');
// reset the form
clearForm(registerForm);
})

loginForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	let email = document.getElementById('loginEmail').value;
	let password = document.getElementById('loginPassword').value;
	let userData = JSON.parse(localStorage.getItem("user"));
	if(!loginEmail || !loginPassword) {
		alert('Please fill in all fields 🥺');
		return;
	}

	if(userData && email === userData.email && password === userData.password) {
		alert('Welcome back ' + userData.name + '! 🎉');
		localStorage.setItem("isLoggedIn", true);
		window.location.href = 'home.html';
	}else if( email===adminUser.email && password === adminUser.password) {
		alert('Welcome Admin! 🎉');
	window.location.href = 'admin.html';
	}else{
		alert('Invalid email or password 🥺');
		
	}
})

// window.onload = () => {
// 	const user = JSON.parse(localStorage.getItem("user"));
// 	if(localStorage.getItem("isLoggedIn") === 'true' && user) {
// 	}
// }

//validate email
function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
// clear form
function clearForm(form) {
	form.reset();
}







