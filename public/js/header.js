let navToggle= document.querySelector('.nav-toggle')
let navLinks= document.querySelector('.nav-links')
navToggle.addEventListener('click',()=>{
    navLinks.classList.toggle('nav-links-mover')
})