function AtivandoScrollSuavizado(){
    const linksInternos = document.querySelectorAll('.menu-nav ul li a[href^="#"]');
    function rolandoSuave(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        console.log(section);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach(item => {
        item.addEventListener('click', rolandoSuave);
    });
}
AtivandoScrollSuavizado();
