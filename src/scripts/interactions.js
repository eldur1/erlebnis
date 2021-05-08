import { gsap, Power3} from "gsap"
import { _removeLinkedListItem } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);

import { ScrollTrigger } from "gsap/ScrollTrigger"
function interactions() {
    let hero = document.querySelector('.main')
    let manifesto = document.querySelector('.manifesto')
    let btn_case = document.querySelector('.js-case')
    let btn_generative = document.querySelector('.js-generative')

    var tl_btn =  gsap.timeline({
        paused : true
    })

    tl_btn.to(hero, {
        opacity:0,
        duration:1,
        ease:Power3.easeOut
    }) 
    tl_btn.to(hero, {
        display:'none',
        duration:1,
        ease:Power3.easeOut
    })


    btn_case.addEventListener('click', () => {
        tl_btn.play()
    })

    btn_generative.addEventListener('click', () => {
        tl_btn.play()
    })

    


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
        let link = document.querySelectorAll('.button')
        console.log(link);
        let mouseX = 0;
        let mouseY = 0;


        cursor.classList.add('cursor')
        window.addEventListener('mousemove', (event) => {
            gsap.to(cursor, {
                    x:event.clientX-10,
                    y:event.clientY -10,
                ease:Power3.easeOut
            })
                mouseX = event.clientX-10;
                mouseY = event.clientY-10;
        })


        var cursor = document.querySelector('.cursor')
        let divTest = document.createElement('div')
        let test = document.body.appendChild(divTest)
        test.style.width = "100px"
        test.style.height = "100px"
        test.style.backgroundColor = "blue"
    
        var tl =  gsap.timeline({
            paused : true
        })
        tl.to(cursor, {
            scale:1,
            duration:0.1,
            ease:Power3.easeOut
        }) 
        tl.to(cursor, {
            scale:5,
            duration:0.1,
            ease:Power3.easeOut
        }) 



        link.forEach(element => {
        
            test.addEventListener('mouseenter', () => {
                tl.play()
            });
        });


    }
   //cursor()
   scrollDelay()

}

export { interactions }