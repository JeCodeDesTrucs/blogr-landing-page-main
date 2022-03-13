const productMenu = document.querySelector('.main-navigation__left__product');
const companyMenu = document.querySelector('.main-navigation__left__company');
const connectMenu = document.querySelector('.main-navigation__left__connect');

const mobileButton = document.querySelector('.header__mobile__menu');
const mainNav = document.querySelector('.main-navigation');

productMenu.addEventListener('click', () =>{
    if(productMenu.classList.contains('active-menu')){
        productMenu.classList.remove('active-menu');
    }else{
        productMenu.classList.add('active-menu');
        companyMenu.classList.remove('active-menu');
        connectMenu.classList.remove('active-menu');
    }
});

companyMenu.addEventListener('click', () =>{
    if(companyMenu.classList.contains('active-menu')){
        companyMenu.classList.remove('active-menu');
    }else{
        companyMenu.classList.add('active-menu');
        productMenu.classList.remove('active-menu');
        connectMenu.classList.remove('active-menu');
    }
});

connectMenu.addEventListener('click', () =>{
    if(connectMenu.classList.contains('active-menu')){
        connectMenu.classList.remove('active-menu');
    }else{
        connectMenu.classList.add('active-menu');
        productMenu.classList.remove('active-menu');
        companyMenu.classList.remove('active-menu');
    }
});

mobileButton.addEventListener('click', () => {
    if(mainNav.classList.contains('active-menu-mobile')){
        mainNav.classList.remove('active-menu-mobile');
        mobileButton.classList.remove('closed');
    }else{
        mainNav.classList.add('active-menu-mobile');
        mobileButton.classList.add('closed');
    }
});