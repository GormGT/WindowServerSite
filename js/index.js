const mainPage = document.querySelectorAll(".mainPageElement");
const mainNav = document.querySelector(".mainNav");
const mainNavLinks = document.querySelectorAll(".navLink");
const lightBulbText = document.querySelector(".lightBulb p");
const tutImgs = document.querySelectorAll("img.tutImg");

function changeTheme(){
    mainPage.forEach((element) => {
        element.classList.toggle("darkTheme");
    })
    mainNavLinks.forEach((element) => {
        element.classList.toggle("darkThemeLink");
    })
    mainNav.classList.toggle("darkTheme2");
    if (mainNav.classList.contains("darkTheme2")){
        lightBulbText.innerText = "Lyst tema";
    }else{lightBulbText.innerText = "Mørkt tema";}
}