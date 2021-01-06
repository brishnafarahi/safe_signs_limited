const navSlide = () =>{
    const burger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.menu-items');
    const navLinks = document.querySelectorAll('.menu-items a')

    burger.addEventListener('click', ()=>{
        //Toggle Nav
       nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/4 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

const app = ()=>{
    navSlide();
}

app();