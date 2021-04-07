function interactions() {
let content = document.querySelector('.content')

    let btn_hero = document.querySelector('.js-btn-hero')
    let next = document.querySelector('.next')

    let btn_manifesto = document.querySelector('.js-manifesto')
    let btn_how_to = document.querySelector('.js-how-to')

    let manifesto = document.querySelector('.manifesto')
    let how_to = document.querySelector('.how-to')

    btn_hero.addEventListener('click', () => {
        content.style.display = "none"
        next.style.display = "block"
    });
    
    btn_manifesto.addEventListener('click', () => {
        next.style.display = "none"
        manifesto.style.display = "block"
    });
    btn_how_to.addEventListener('click', () => {
        next.style.display = "none"
        how_to.style.display = "block"
    
    });
}

export { interactions }