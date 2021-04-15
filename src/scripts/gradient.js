import { rN } from 'fcts.js'
import {gsap, Power2}  from "gsap"
function gradientbg() {
    // Set up background
    let background = document.querySelector('.gradient')
    background.classList.add('background')

    var colors = []
    var rHue = [rN(0,360), rN(0,360)]
    var delta = Math.abs(rHue[0] - rHue[1]);
    // Get hue enought different than the first one
    do {
        var delta = Math.abs(rHue[0] - rHue[1]);
        rHue[1] = rN(0,360)
    }
    while( delta < 80 && delta > 300)

    for (let i = 0; i < 2; i++) {
        let rLightness = rN(30,50)
        let rSaturation = rN(70, 100)
        colors.push(`hsl(${rHue[i]},${rSaturation}%,${rLightness}%)`)
    }


    // movable object

/*     let object = document.createElement('div')
    document.body.appendChild(object)
    let rSize = rN(100, 300)
    object.style.width = rSize + "px"
    object.style.height = rSize + "px"
    object.style.zIndex = -2
    object.style.position = "absolute"
    object.style.borderRadius = rSize + "px"
    object.style.webkitFilter = "blur(" + rSize/2 + "px" + ")"
    object.style.backgroundColor = 'white'
    let centerObject = rSize/2
    console.log(centerObject);
    document.addEventListener('mousemove', (event) => {
        event.clientX 
        gsap.to(object, {
            x:event.clientX-centerObject,
            y:event.clientY-centerObject,
            ease:Power2.easeOut
        })
    }); */


    // Create a gradient
    let rAngle = rN(0,360)
    background.style.background = "linear-gradient( "  + "0deg, " + colors[0] + " 0% ," + colors[1] + " 100%" + ")"
    return "gradient"
}
export { gradientbg }