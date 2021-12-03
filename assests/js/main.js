const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll("#nav-link");

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle("show-menu");
});

navLink.forEach(n=>n.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu");
}));