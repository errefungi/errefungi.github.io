/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
const svgGradient = document.getElementById('b')
const logoNav = document.getElementById('logoNav');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)

  // Update the SVG gradient color based on current theme
  if (getCurrentTheme() === 'dark') {
    svgGradient.children[2].setAttribute('stop-color', 'rgba(255, 255, 255, 1)');
    svgGradient.children[1].setAttribute('stop-color', 'rgba(255, 255, 255, 0.5)');
    svgGradient.children[0].setAttribute('stop-color', 'rgba(0, 0, 0, 0)');
    logoNav.src = "public/assets/images/simbolo_poesista_gray.svg";
  } else {
    svgGradient.children[2].setAttribute('stop-color', 'rgba(143, 122, 91, 0.8)');
    svgGradient.children[1].setAttribute('stop-color', 'rgba(143, 122, 91, 0.5)');
    svgGradient.children[0].setAttribute('stop-color', 'rgba(255, 255, 255, 0)');
    logoNav.src = "public/assets/images/simbolo_poesista.svg";
  }
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // Update the SVG gradient color based on current theme
  if (getCurrentTheme() === 'dark') {
    svgGradient.children[2].setAttribute('stop-color', 'rgba(255, 255, 255, 1)');
    svgGradient.children[1].setAttribute('stop-color', 'rgba(255, 255, 255, 0.5)');
    svgGradient.children[0].setAttribute('stop-color', 'rgba(0, 0, 0, 0)');
    logoNav.src = "public/assets/images/simbolo_poesista_gray.svg";
  } else {
    svgGradient.children[2].setAttribute('stop-color', 'rgba(143, 122, 91, 0.8)');
    svgGradient.children[1].setAttribute('stop-color', 'rgba(143, 122, 91, 0.5)');
    svgGradient.children[0].setAttribute('stop-color', 'rgba(255, 255, 255, 0)');
    logoNav.src = "public/assets/images/simbolo_poesista.svg";
  }
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

//Entrada Animada

const animacionYaActivada = false;

async function activarAnimacion() {

  if (!animacionYaActivada) {

    const elementos = document.querySelectorAll('.move-from-left, .move-from-right');
    console.log(elementos);
    const tamañoPantalla = window.innerHeight / 1;
    for (let i = 0; i < elementos.length; i++) {
      const posicion = elementos[i].getBoundingClientRect().top;
      if (posicion < tamañoPantalla) {
        await new Promise(resolve => setTimeout(resolve, 50));
        elementos[i].classList.add('visible');
      }
    }
  } else {
    const elementos = document.querySelectorAll('.move-from-left:not(.visible), .move-from-right:not(.visible)');
    const tamañoPantalla = window.innerHeight / 1;
    for (let i = 0; i < elementos.length; i++) {
      const posicion = elementos[i].getBoundingClientRect().top;
      if (posicion < tamañoPantalla) {
        await new Promise(resolve => setTimeout(resolve, 50));
        elementos[i].classList.add('visible');
      }
    }
  }
}

window.addEventListener('scroll', function () {
  activarAnimacion();
});

window.addEventListener('load', function () {
  activarAnimacion();
});



var modal = document.getElementById("modal");
var countdownElement = document.getElementById("countdown");
var modalLinks = document.getElementsByClassName("open-modal");
var closeButton = document.getElementById("close-modal");
var suscribeButton = document.getElementById("button-modal");
const href = suscribeButton.getAttribute('href');

// Fecha de finalización de la cuenta regresiva
var countDownDate = new Date().getTime() + (50 * 24 * 60 * 60 * 1000); // 50 días

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizar el elemento de cuenta regresiva
  countdownElement.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}

// Iniciar la cuenta regresiva
// updateCountdown();
// setInterval(updateCountdown, 1000);

// Agregar controlador de eventos a todos los enlaces
for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = function () {
    modal.style.display = "block";
    return false;
  }
}


// Cerrar el modal cuando se hace clic en el botón de cerrar
closeButton.onclick = function () {
  modal.style.display = "none";
}

suscribeButton.onclick = function () {
  modal.style.display = "none";
  // window.location.href = href;
}

// Cerrar el modal cuando se hace clic en el fondo
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const images = [
  "public/assets/images/poeofiuco.jpg",
  "public/assets/images/poeimage1.PNG",
  "public/assets/images/poeimage2.jpg",
  "public/assets/images/poeimage4.jpg",
  "public/assets/images/poeimage5.jpg",
  // Agrega más imágenes aquí
];


function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const videos = [
  "https://www.youtube.com/embed/a_SQ4JwnV5g",
  "https://www.youtube.com/embed/iHe1WRo8t6o",
  "https://www.youtube.com/embed/iqGZHc2p8Ic"
  // Agrega más videos aquí
];

function getRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
  const imageElement = document.getElementById("imagen_aleatoria");
  const videoElement = document.getElementById("video_aleatorio");
  imageElement.src = getRandomImage();
  videoElement.src = getRandomVideo();
});





