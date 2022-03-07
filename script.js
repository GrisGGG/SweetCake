console.log("hello");
const navBar = document.querySelector('.nav-mob');
const btn = document.querySelector('.burger-nav');

btn.addEventListener('click', ()=> navBar.classList.toggle('active'));

