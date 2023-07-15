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
const navLink = document.querySelectorAll('.nav__link, .dropdown__content-item')

function linkAction() {
    const navMenu    = document.getElementById('navbar')
    const toggleMenu = document.getElementById('header-toggle')

    toggleMenu.classList.toggle('show-icon')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))