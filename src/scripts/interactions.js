import { gsap, Power3} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { langNavigator, languages, paths } from 'content/lang.js'
import { themeSwitch } from 'style/theme'
import { rN } from 'utils/fcts'
import { classSwitch } from 'style/theme'

var theme_btn = document.querySelector('.js-dark-mode')
export var isReload = {
    state: false
}
gsap.registerPlugin(ScrollTrigger);

function interactions() {

    // Reload
    let btn_reload = document.querySelector('.js-reload')
    let tagline = document.querySelector('.tagline')
    var taglineSeen = []
    btn_reload.addEventListener('click', () => {
        fetch(paths[1])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var rTagline = rN(0, Object.keys(data.fact).length-1)
            //console.log(Object.keys(taglineSeen).length >= 15);
            while (taglineSeen.includes(rTagline)) {
                if(Object.keys(taglineSeen).length > Object.keys(data.fact).length-1) {
                    rTagline = rN(0, Object.keys(data.fact).length-1)
                    break;
                }
                rTagline = rN(0, Object.keys(data.fact).length-1)
            }
            tagline.textContent = data.fact[rTagline]
            taglineSeen.push(rTagline)
            })
        })

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
    scrollDelay()
}

export { interactions }