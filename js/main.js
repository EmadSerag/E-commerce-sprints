// Naviagtion Button 
const navbarBtn = document.getElementById("navbarBtn");
const nav = document.getElementById('navgation');
navbarBtn.addEventListener('click', function () {
    nav.classList.toggle('show')
})
// Logout Button 
document.getElementById('login').addEventListener('click', function () {
	localStorage.removeItem("user");
	window.location.href = "./index.html";
})


