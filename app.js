const mainArticleImg = document.querySelector('.main-article img');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sideMenu = document.querySelector('dialog');
const body = document.querySelector('body');

if (window.innerWidth > 700) {
    mainArticleImg.src = "./assets/images/image-web-3-desktop.jpg"
}

openMenu.addEventListener('click', () => {
   sideMenu.show();
   handleSideMenu();
   handleBackdropEffect();
})

closeMenu.addEventListener('click', () => {
  handleSideMenu();
  handleBackdropEffect();
  sideMenu.close();
})

function handleSideMenu() {
  sideMenu.classList.toggle('showMenu'); 
}

function handleBackdropEffect() {
    mainArticleImg.classList.toggle('darken-img');
    changeBackground();
}

function changeBackground() {
    if (sideMenu.classList.contains('showMenu')) {
          body.style.background = 'hsl(236, 13%, 42%, .7)';
    } else {
        body.style.background = 'var(--white)';
    }
}
