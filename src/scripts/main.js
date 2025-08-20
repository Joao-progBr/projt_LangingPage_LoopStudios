const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')
const body = document.body

openMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
     body.classList.add('no-scroll')
})

closeMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active')
    body.classList.remove('no-scroll')
})
