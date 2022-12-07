const mainPage = document.querySelectorAll(".mainPageElement");
const mainNav = document.querySelectorAll(".mainNav");
const mainNavLinks = document.querySelectorAll(".navLink");
const lightBulbText = document.querySelector(".lightBulb p");
const tutImgs = document.querySelectorAll("img.tutImg");
const tutLinks = document.querySelectorAll("div.tutStepContainer a");
const lightCode = document.querySelectorAll("p.lightCode");
const button = document.querySelector("button");
const backToTop = document.querySelector(".backtoTop");

for(i = 0; tutImgs.length > i; i++){
    //console.log(tutImgs[i].width);
    if(tutImgs[i].width == 300){
        tutImgs[i].classList.add('width300');
    }else if(tutImgs[i].width == 400){
        tutImgs[i].classList.add('width400');
    }else if(tutImgs[i].width == 500){
        tutImgs[i].classList.add('width500');
    }else if(tutImgs[i].width == 600){
        tutImgs[i].classList.add('width600');
    }
}

function changeTheme(){
    mainPage.forEach((element) => {
        element.classList.toggle("darkTheme");
    })
    mainNavLinks.forEach((element) => {
        element.classList.toggle("darkThemeLink");
    })
    mainNav.forEach((element) => {
        element.classList.toggle("darkTheme2");
    })
    tutLinks.forEach((element) => {
        element.classList.toggle("darkThemeLink2");
    })
    lightCode.forEach((element) => {
        element.classList.toggle("darkBack");
    })
    button.classList.toggle("darkTheme2")
    backToTop.classList.toggle("darkThemeLink2");
    if (mainNav[0, 1].classList.contains("darkTheme2")){
        lightBulbText.innerText = "Lyst tema";
    }else{lightBulbText.innerText = "Mørkt tema";}
}