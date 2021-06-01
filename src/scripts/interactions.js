import { gsap, Power3} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { langNavigator, languages } from 'content/lang.js'
import { themeSwitch } from 'style/theme'

var theme_btn = document.querySelector('.js-dark-mode')
export var isReload = {
    state: false
}
gsap.registerPlugin(ScrollTrigger);

export function classSwitch() {
    document.body.classList.toggle('theme--light')

    let footer = document.querySelector('footer')
    footer.classList.toggle('theme--light')

    let section_projet = document.querySelector('.section__projects')
    section_projet.classList.toggle('theme--light')

    let aDOM = document.querySelectorAll('a')
    for (let i = 0; i < aDOM.length; i++) {
        const element = aDOM[i];
        element.classList.toggle('theme--light')
        
    }

    let icon_DOM = document.querySelectorAll('.icon')
    for (let i = 0; i < icon_DOM.length; i++) {
        const element = icon_DOM[i];
        element.classList.toggle('theme--light')
        
    }

    let nav = document.querySelector('nav')
    nav.classList.toggle('theme--light')
}

function interactions() {
    // theme switch
    let theme_btn = document.querySelector('.js-dark-mode')
    theme_btn.addEventListener('click', () => {
        themeSwitch()
        classSwitch()
    })





    // Lang switch
    let lang_btn = document.querySelector('.js-lang')
    lang_btn.addEventListener('click', () => {
        // If it's in english > change to english
        if(langNavigator.langCode == "fr") {
            lang_btn.textContent = "FR"
            langNavigator.langCode = "en"
            localStorage.setItem('language', 'en')

        } else 
        // If it's in english > change to french
        if(langNavigator.langCode == "en") {
            lang_btn.textContent = "EN"
            langNavigator.langCode = "fr"
            localStorage.setItem('language', 'fr')
        }
        isReload.state = true
        languages()

    })
    function scrollDelay() {
        const delSections = document.querySelectorAll(".delayed-section");
        delSections.forEach(section => {
        const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
            y: "30vh",
            ease: "none"
        });
        
        const imageAnim = gsap.to(section.querySelector(".js-scroll"), {
            y: "-30vh",
            ease: "none",
            paused: true
        });
        
        const scrub = gsap.to(imageAnim, {
            progress: 1,
            paused: true,
            ease: "power3",
            duration: parseFloat(section.dataset.scrub) || 1,
            overwrite: true
        });
        
        ScrollTrigger.create({
            animation: containerAnim,
            scrub: true,
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            onUpdate: self => {
            scrub.vars.progress = self.progress;
            scrub.invalidate().restart();
            }
        });
        });

    }

}

export { interactions }