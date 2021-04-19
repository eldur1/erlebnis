import { gsap, Power3} from "gsap"
import { rN } from "fcts.js"
gsap.registerPlugin(ScrollTrigger);

import { ScrollTrigger } from "gsap/ScrollTrigger"
function interactions() {
    let hero = document.querySelector('.main')
    let manifesto = document.querySelector('.manifesto')
    let btn_about = document.querySelector('.js-btn-hero')
    
    btn_about.addEventListener('click', () => {
        hero.style.display = "none"
        manifesto.style.display = "block"
    });
    let btn_reload = document.querySelector('.js-reload')
    btn_reload.addEventListener('click', () => {
        document.location.reload()
    });

    function scrollDelay() {
        const delSections = document.querySelectorAll(".delayed-section");
        delSections.forEach(section => {
        const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
            y: "10vh",
            ease: "none"
        });
        
        const imageAnim = gsap.to(section.querySelector(".js-scroll"), {
            y: "-10vh",
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