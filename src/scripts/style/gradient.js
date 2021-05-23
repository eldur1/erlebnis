import { rN, deltaGeneration } from '../fcts.js'
import { rPicture } from '../content/content.js'

export var aColors = []
var background = document.querySelectorAll('.background')


export var rLightness = []
export var rSaturation = []
export var aHue = []

function gradient() {
    // Set up background
    if(rPicture == 1) {
        aHue.push(deltaGeneration(168,255, 50))
        rLightness.push(deltaGeneration(20,60,30))
        rSaturation.push(deltaGeneration(30,80,30))

    }
    else if(rPicture == 2) {
        // Noir et blanc
        aHue.push(deltaGeneration(0,359, 180))
        rSaturation.push([0,0])
        rLightness.push(deltaGeneration(20,60,30))
    }
    else if(rPicture == 3) {
        // Brun
        aHue.push(deltaGeneration(13,47, 20))
        rSaturation.push(deltaGeneration(30,80,30))
        rLightness.push(deltaGeneration(40,67,20))
    }
    else if(rPicture == 4) {
        // Rouges bleu fushia
        aHue.push([rN(1,8), rN(170,190)])
        rSaturation.push(deltaGeneration(80,85,1))
        rLightness.push(deltaGeneration(40,67,10))
    }
    else if(rPicture == 5) {
        // Vert
        aHue.push(deltaGeneration(73,140, 50))
        rSaturation.push(deltaGeneration(20,80,30))
        rLightness.push(deltaGeneration(30,55,10))

    }
    else if(rPicture == 6) {
        //  Bleu rouge
        aHue.push([rN(170,190), rN(310,359)])
        rSaturation.push(deltaGeneration(70,90,10))
        rLightness.push(deltaGeneration(40,50,5))

    }

    for (let i = 0; i < 2; i++) {
        aColors.push(`hsl(${aHue[0][i]},${rSaturation[0][i]}%,${rLightness[0][i]}%)`)
    }
    // Create a gradient
    let rAngle = rN(0,360)

    for (let i = 0; i < background.length; i++) {
        const element = background[i];
        element.style.background = "linear-gradient( "  + rAngle + "deg, " + aColors[0] + " 0% ," + aColors[1] + " 100%" + ")"
    }


}


export { gradient }