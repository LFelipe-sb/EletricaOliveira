function AtivandoScrollSuavizado(){
    const linksInternos = document.querySelectorAll('.menu-bg .menu .menu-nav ul li a[href^="#"]');
    // let linksInternos = document.getElementById('sobre')
    function rolandoSuave(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
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
