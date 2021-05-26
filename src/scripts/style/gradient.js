import { gsap } from 'gsap'
import { colorChanging } from  './color'

var background = document.querySelectorAll('.background')


function gradient() {
    let colorHSL = colorChanging();
    gsap.to(background, {
        duration:0.5,
        backgroundColor: "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
    })
}

export { gradient }
