/*========== DROPDOWN ==========*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
    const dropdownHeader = item.querySelector('.dropdown__header')

    dropdownHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.dropdown-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
             toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const dropdownContent = item.querySelector('.dropdown__content')

    if (item.classList.contains('dropdown-open')) {
        dropdownContent.removeAttribute('style')
        item.classList.remove('dropdown-open')
    } else {
        dropdownContent.style.height = dropdownContent.scrollHeight + 'px'
        item.classList.add('dropdown-open')
    }
}

/*========== SHOW NAVBAR ==========*/
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
                nav = document.getElementById(navbarId)

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggleBtn.classList.toggle('show-icon')
    })
}
showMenu('header-toggle', 'navbar')

/*========== REMOVE MENU MOBILE ON CLICK ==========*/
/* const navLink = document.querySelectorAll('.nav__link, .dropdown__content-item')

function linkAction() {
    const navMenu    = document.getElementById('navbar')
    const toggleMenu = document.getElementById('header-toggle')

    toggleMenu.classList.toggle('show-icon')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) */

/*========== CHANGE BACKGROUND HEADER ==========*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 10 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*========== SHOW SCROLL UP ==========*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*========== SWIPER SLIDER ==========*/
const sliderSwiper = new Swiper('.slider__content', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

/*========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})