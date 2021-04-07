import { rN } from 'fcts.js'

function analogous() {
    // Generate between 2 and 5 colors
    // Generate a random Hue and by that, generate other colors close to this hue
    // Analogous must have a short range of hue
    let rHue = rN(0,360)
    let rSaturation = rN(50,100)
    let nColor = rN(2,5)
    let rLightness = rN(30,75)
    // Delta is always the same as the N of color 
    let rDelta = rN(130,210);
    let delta = rDelta - ( (rDelta / 5 ) * (5 - nColor) );
    let colors = [
        ["Analogous"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let hue = rHue + (i *  (delta/nColor) )
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}
function monochromatic() {
    let rHue = rN(0,360)
    let nColor = rN(2,5)
    let colors = [
        ["Monochromatic"],
        []
    ]

    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        colors[1].push(`hsl(${rHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}
function complementary() {

    // Gen a color and became complementary if even 
    let nColor =  rN(2,5)
    let rHue = rN(0,360)
    let colors = [
        ["Complementary"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        let hue = rHue;
        if( i % 2 == 0) {
            hue = rHue + 180
        }
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function triad() {
    
    let nColor = rN(3,3)
    let rHue = rN(0,360)
    let colors = [
        ["Triad"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        let hue = rHue + (i * 120);
        if(hue > 360) {
            hue = hue - 360;
        }
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function shades() {
    // Gen a color and became complementary if even 
    let nColor = rN(2,5)
    let rHue = rN(0,360)
    let rSaturation = rN(30,100)
    let colors = [
        ["Shades"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let ShadesHue = rHue;
        colors[1].push(`hsl(${ShadesHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}

let aPallet = [
    analogous(),
    monochromatic(),
    complementary(),
    triad(),
    shades()
]
let choosenPallet = aPallet[rN(0,aPallet.length-1)]
export { choosenPallet }


// Nut used

function gradient() {
    // Create a gradient
    let colors = colorsGeneration()[1]
    let rAngle = rN(0,360)
    let colorsSelected = []
    let rColor1 = 1
    let rColor2 = 1
    // Make sure there's two different colors
    do {
        rColor1 = rN(2, colors.length)
    } while( rColor1 == rColor2)

    colorsSelected.push(colors[rColor1-1])
    colorsSelected.push(colors[rColor2-1])
    bg.style.background = "linear-gradient( " + rAngle + "deg, " + colorsSelected[0] + " 0% ," + colorsSelected[1] + " 100%" + ")"
    return "gradient"
}