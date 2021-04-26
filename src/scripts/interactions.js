import { gsap, Power3} from "gsap"
gsap.registerPlugin(ScrollTrigger);

import { ScrollTrigger } from "gsap/ScrollTrigger"
function interactions() {
    let hero = document.querySelector('.main')
    let manifesto = document.querySelector('.manifesto')
    let btn_about = document.querySelector('.js-btn-hero')
    
    btn_about.addEventListener('click', () => {
        // Animation to anchor
    });
    let btn_reload = document.querySelector('.js-reload')
    btn_reload.addEventListener('click', () => {
        document.location.reload()
    });

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
    function cursor() {
        let div = document.createElement('div')
        var cursor = document.body.appendChild(div)
        cursor.classList.add('cursor')
        function mouseMove() {

        }
        document.addEventListener('mousemove', (event) => {
            gsap.to(cursor, {
                x:event.pageX-10,
                y:event.pageY-10,
                ease:Power3.easeOut
            })
            
        })
        document.addEventListener('scroll', () => {
            var coords = cursor.getBoundingClientRect()
            //console.log(Math.round(coords.top + window.scrollY));
            //console.log("coordonnées : " + coords.y);
            //console.log("window : " + window.scrollY);
            // Récupérer la position en X et Y du curseur actuel 
            // Au scroll, fais en sorte qu'elle garde sa position par 
            //console.log(currentPos);
            gsap.to(cursor, {
                duration:0.1,
                y:Math.round(coords.top + window.scrollY),
                ease:Power3.easeOut
            }) 
        })
    }
   //cursor()
   scrollDelay()

}

export { interactions }