const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY > 300){
        navBar.style.backgroundColor = '#030E15'
    }
    else{
        navBar.style.backgroundColor = 'transparent'
    }
})
