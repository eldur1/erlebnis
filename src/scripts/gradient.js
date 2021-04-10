import { rN } from 'fcts.js'
import gsap  from "gsap"
function gradientbg() {
    // Set up background
    let background = document.createElement('div')
    document.body.appendChild(background)
    background.classList.add('background')

    var colors = []
    var rHue = [rN(0,360), rN(0,360)]
    var delta = Math.abs(rHue[0] - rHue[1]);
    // Get hue enought different than the first one
    do {
        var delta = Math.abs(rHue[0] - rHue[1]);
        rHue[1] = rN(0,360)
    }
    while( delta < 60)

    console.log(delta);
    for (let i = 0; i < 2; i++) {
        let rLightness = rN(50,80)
        let rSaturation = rN(70, 100)
        colors.push(`hsl(${rHue[i]},${rSaturation}%,${rLightness}%)`)
        console.log(colors[i]);
    }


    // Create a gradient
            // Colors = 2 couleurs random
    let rAngle = rN(0,360)
    background.style.background = "linear-gradient( " + rAngle + "deg, " + colors[0] + " 0% ," + colors[1] + " 100%" + ")"
    return "gradient"





}
export { gradientbg }