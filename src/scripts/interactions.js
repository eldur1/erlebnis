import { gsap, Power3} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { langNavigator, languages } from 'content/lang.js'


export var isReload = {
    state: false
}
gsap.registerPlugin(ScrollTrigger);
function interactions() {



/*     let reload_btn = document.querySelector('.js-reload')
    reload_btn.addEventListener('click',() => {
        document.location.reload(true)
    }); */


    

    // Set language 
    let lang_btn = document.querySelector('.js-lang')

    if(langNavigator.langCode == "fr") {
        lang_btn.textContent = "EN"
    } else 
    if(langNavigator.langCode == "en") {
        lang_btn.textContent = "FR"
    }

    lang_btn.addEventListener('click', () => {
        if(langNavigator.langCode == "fr") {
            lang_btn.textContent = "FR"
            langNavigator.langCode = "en"
        } else 
        if(langNavigator.langCode == "en") {
            lang_btn.textContent = "EN"
            langNavigator.langCode = "fr"
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