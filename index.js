const open_nav=document.querySelector('.mobile-nav-icon');
const close_nav=document.querySelector('.close-nav');
const navbar_icon=document.querySelectorAll('.navbar');

open_nav.addEventListener('click',()=>{
    navbar_icon.forEach((Element)=>Element.classList.add('active'))
})
close_nav.addEventListener('click',()=>{
    navbar_icon.forEach((Element)=>Element.classList.remove('active'))
})

