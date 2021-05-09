import { rN } from 'fcts.js'
import { rPicture } from 'content.js'

export var colors = []

function gradientbg() {
    // Set up background
    var background = document.querySelectorAll('.gradient')


    function deltaGeneration(rDeltaMin, rDeltaMax, maxDelta ) {
        var delta = 0
        // Get hue enought different than the first one
        do {
            var rDelta = [rN(rDeltaMin, rDeltaMax), rN(rDeltaMin, rDeltaMax)]
            let highestHue = Math.max(...rDelta)
            let minHue = Math.min(...rDelta)
            var delta = highestHue - minHue
        }
        while(delta < maxDelta )
        return rDelta
    }

    var rLightness = [rN(30,50), rN(30,50)]
    var rSaturation = [rN(70, 100), rN(70,100)]

    if(rPicture == 1) {
        var aHue = deltaGeneration(168,255, 50)
    }
    else if(rPicture == 2) {
        // Noir et blanc
        var aHue = deltaGeneration(0,360, 180)
        var rSaturation = [0,0]
        var rLightness = deltaGeneration(20,60,30)
    }
    else if(rPicture == 3) {
        // Brun
        var aHue = deltaGeneration(13,47, 20)
        var rSaturation = deltaGeneration(30,80,30)
        var rLightness = deltaGeneration(30,67,30)
    }
    else if(rPicture == 4) {
        // Rouges bleu fushia
        var aHue = [rN(1,8), rN(170,190)]
        var rSaturation = deltaGeneration(80,85,1)
        var rLightness = deltaGeneration(40,67,10)
    }
    else if(rPicture == 5) {
        // Vert
        var aHue = deltaGeneration(73,140, 50)
        var rSaturation = deltaGeneration(20,80,30)
        var rLightness = deltaGeneration(10,45,10)

    }
    else if(rPicture == 6) {
        //  Bleu rouge
        var aHue = [rN(170,190), rN(310,360)]
        var rSaturation = deltaGeneration(70,90,10)
        var rLightness = deltaGeneration(40,50,5)

    }

    gradientGeneration()

function gradientGeneration() {
    for (let i = 0; i < 2; i++) {
        colors.push(`hsl(${aHue[i]},${rSaturation[i]}%,${rLightness[i]}%)`)
    }
    // Create a gradient
    let rAngle = rN(0,360)
    for (let i = 0; i < background.length; i++) {
        background.classList.add('background')
        const element = background[i];
        element.style.background = "linear-gradient( "  + rAngle + "deg, " + colors[0] + " 0% ," + colors[1] + " 100%" + ")"
    }
}


}
export { gradientbg }