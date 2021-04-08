import { rN, trueOrFalse } from 'fcts.js'

    var aColor = []
    for (let i = 0; i < 5; i++) {
        // Primary
        if(i == 0) {
            var primaryHue = rN(0,360)
            var primarySaturation = rN(70,95)
            let primaryLightness = rN(50,60)
            let color = `hsl(${primaryHue},${primarySaturation}%,${primaryLightness}%)`
            aColor.push(color)
        } else
        if(i == 1) {
            let hue = primaryHue
            var saturation = primarySaturation-30
            let lightness = rN(90,95)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        } else
        if(i == 2) {
            let hue = primaryHue + 180
            if(hue > 360) {
                hue = hue - 360;
            }
            let actionSaturation = rN(70,95)
            let actionLightness = rN(50,60)
            let color = `hsl(${hue},${actionSaturation}%,${actionLightness}%)`
            aColor.push(color)
        } else 
        if(i == 3) {
            let hue = 0
            let saturation = 0
            let lightness = rN(95,100)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        } else
        if(i == 4) {
            let hue = 0
            let saturation = 0
            let lightness = rN(5,20)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        }
    }
/* let primary = document.querySelector('.color--primary')
    primary.style.backgroundColor = aColor[0]

    let secondary = document.querySelector('.color--secondary')
    secondary.style.backgroundColor = aColor[1]

    let action = document.querySelector('.color--action')
    action.style.backgroundColor = aColor[2]

    let grey = document.querySelector('.color--grey')
    grey.style.backgroundColor = aColor[3]

    let black = document.querySelector('.color--black')
    black.style.backgroundColor = aColor[4]

    */

export { aColor }