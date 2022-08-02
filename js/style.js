const header = document.querySelector("header");

window.addEventListener("scroll",function()
{
    header.classList.toggle("sticky",window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>
{
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('active');
}
window.onscroll= () =>
{
    menu.classlist.remove('bx-x');
    navlist.classlist.remove('active');
}
const sr=ScrollReveal
(
    {
        distance:'45px',
        duration:2700,
        reest:true
    }
)

sr.reveal('.home-text',{delay:350,origin:'left'})
sr.reveal('.home-img',{delay:350,origin:'right'})
sr.reveal('.sub-service,.about,.service,.contact',{delay:200,origin:'bottom'})