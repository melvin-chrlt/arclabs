let navMenu = document.querySelector(".navBar");
let closeBtn = document.querySelector("#close");
let openMenu = document.querySelector("#menuBurger");

// Ouvrir le menu burger
function openBurger(){
    navMenu.style.display = "flex";
    closeBtn.style.display = "block";
}

// Fermer le menu burger
closeBtn.addEventListener("click", function(){
    navMenu.style.display = "none";
    closeBtn.style.display = "none";
})

// Ouvrir le menu burger
// openMenu.addEventListener("click", function(){
//     navMenu.classList.toggle("displayFlex");
//     closeBtn.classList.toggle("displayNone");
// })

// Fermer le menu burger
// closeBtn.addEventListener("click", function(){
//     navMenu.classList.toggle("displayFlex");
//     closeBtn.classList.toggle("displayNone");
// })

