// alert("Salut")

const burger = document.querySelector(".burger")
const menu = document.querySelector(".menuBurger")

// Click pour ouvrir/fermer menu
burger.addEventListener("click", ()=>{

    menu.classList.toggle("menuBurger-visible")

})

