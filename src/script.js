const $ = document;
const menuIcon = $.getElementById("menu-icon");
const smMenuBar = $.getElementById("sm-menuBar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-times");
  smMenuBar.classList.toggle("h-[195px]");
});

// introduction part
const introductionPart = $.getElementById("introduction");
const introductionImg = $.getElementById("introduction-img");
const introductionDesc = $.getElementById("introduction-desc");
const navBar  = $.getElementById('navBar')



window.addEventListener("scroll", () => {
  
  if (introductionPart.offsetTop <= window.scrollY) {
    introductionImg.classList.replace("hidden", "block");
    introductionDesc.classList.replace("hidden", "flex");
    introductionImg.classList.remove("-translate-x-[120%]");
    introductionDesc.classList.remove("translate-x-[120%]");
  }
  if(window.scrollY > 5){
navBar.classList.add('nav-bar','fixed','top-0','left-0','w-full','z-50')
}if(window.scrollY == 0){
    navBar.classList.remove('nav-bar','fixed','top-0','left-0','w-full','z-50')
  }
});
