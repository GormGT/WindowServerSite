const mainPage = document.querySelectorAll(".mainPageElement");
const mainNav = document.querySelector(".mainNav");
const mainNavLinks = document.querySelectorAll(".navLink");

console.log(mainNav);

function changeTheme(){
    mainPage.forEach((element) => {
        element.classList.toggle("darkTheme");
    })
    mainNavLinks.forEach((element) => {
        element.classList.toggle("darkThemeLink");
    })
    mainNav.classList.toggle("darkTheme2");
}