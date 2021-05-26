import { rN } from '../utils/fcts.js'
import { colorChanging } from '../style/color'
import { aSpacing } from '../style/spacing'
import { aBorder } from '../style/border'



function buttons() {
    let colorHSL = colorChanging()
    let buttons = document.querySelectorAll('.button')
    let borderType = aBorder
    // buttons
    let rBorderRadius = rN(2,8) + "px"
    for (let i = 0; i < buttons.length; i++) {
        let element = buttons[i]
        var padding = aSpacing[0] + "px " + aSpacing[1] + "px "
        element.style.borderRadius = rBorderRadius
        if(element.classList.contains("button--alt")) {
            element.style.border = 2 + "px" + " solid white "
            element.style.borderRadius = borderType
            var padding = aSpacing[1] - 2 + "px " + aSpacing[2] + "px"
            element.style.backgroundColor = "transparent"
            element.style.color = "hsl(" + colorHSL.hue + ", " + colorHSL.saturation + "%, " + colorHSL.lightness + "%)"
        } else {
            element.style.backgroundColor = "hsl(" + colorHSL.hue + ", " + colorHSL.saturation + "%, " + colorHSL.lightness + "%)"
            element.style.border = 1 + "px" + " solid black "

        }
        //console.log(padding)
        element.style.padding = padding
    }

    
}
export { buttons }
