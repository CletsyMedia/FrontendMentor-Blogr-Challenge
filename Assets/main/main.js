
const menu = document.querySelector(".navDesktop")
const menuOpen = document.querySelector(".fa-bars")
const menuClose = document.querySelector(".fa-times");

menuOpen.addEventListener("click", ()=>{
    menuOpen.style.display="none"
    menuClose.classList.add("closeX");
    menu.classList.add("activeMenu");
})
menuClose.addEventListener("click", ()=>{
    menuOpen.style.display="block";
    menuClose.classList.remove("closeX");
    menu.classList.remove("activeMenu");
})
