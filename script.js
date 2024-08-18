

let getButton = document.getElementById('myBtn')
let lastScrollTop = 0
let myHeader = document.getElementById('main-header')


window.addEventListener('scroll', () => {

    if (window.scrollY > 20) {
        myHeader.style.backgroundColor = 'rgb(19,11,173)'
        myHeader.style.transition = 'all 2s ease-in-out'

    } else {
        myHeader.style.backgroundColor = ''
        myHeader.style.transition = ''
    }
})



window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        getButton.style.display = 'block';
    } else {
        getButton.style.display = 'none';
    }
});


getButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})


addEventListener("scroll", () => {
    const scrollTop = scrollY;

    if (scrollTop > 20) {
        getButton.style.display = 'block';
        if (scrollTop < lastScrollTop) {
            getButton.classList.add('bounce')
        } else {
            getButton.classList.remove('bounce')
        }
    } else {
        getButton.style.display = 'none';
    }

    lastScrollTop = scrollTop
})


getButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
















