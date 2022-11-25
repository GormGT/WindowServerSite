const mainPage = document.querySelectorAll(".mainPageElement");
console.log(mainPage);

function changeTheme(){
    mainPage.forEach((element) => {
        element.classList.toggle("darkTheme");
    })
}