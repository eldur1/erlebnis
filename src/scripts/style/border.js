import { aSpacing } from './spacing.js'
import { rN } from '../utils/fcts.js'


export var aBorder = []
export function border() {
    let aBorderValues = [
        "0px",
        "50px",
        "100000px"
    ]
    let rBorder = rN(0, aBorderValues.length-1)
    let aBorder = aBorderValues[rBorder]
    
    // Apply border to images & gradient bg
    let avatar = document.querySelector('.avatar')
    avatar.style.borderRadius = aBorder

    let hero_content = document.querySelector('.section__hero')


    const mdMobile = window.matchMedia("(max-width:600px)");
    const mdTablet = window.matchMedia("(max-width:1200px)");

    if(aBorder === aBorderValues[2]) {
        if(mdMobile.matches) {
            hero_content.style.transform = "translateY(100px)"
        } 
        else if(mdTablet.matches) {
            hero_content.style.transform = "translateY(320px)"
        } 
    }


    let gradientBg = document.querySelectorAll('.background')
    for (let i = 0; i < gradientBg.length; i++) {
        const element = gradientBg[i];
        if(i == 2) {
            element.style.borderRadius = aBorder + " " + aBorder + " 0 0" 
        }
        else {
            element.style.borderRadius = aBorder

        }
    }
}


