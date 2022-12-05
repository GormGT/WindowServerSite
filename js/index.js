const mainPage = document.querySelectorAll(".mainPageElement");
const mainNav = document.querySelector(".mainNav");
const mainNavLinks = document.querySelectorAll(".navLink");
const lightBulbText = document.querySelector(".lightBulb p");
const tutImgs = document.querySelectorAll("img.tutImg");

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
    mainNav.classList.toggle("darkTheme2");
    if (mainNav.classList.contains("darkTheme2")){
        lightBulbText.innerText = "Lyst tema";
    }else{lightBulbText.innerText = "Mørkt tema";}
}