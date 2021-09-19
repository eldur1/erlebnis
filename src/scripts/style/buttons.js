import { rN } from '../utils/fcts.js'
import { colorChanging } from '../style/color'
import { aSpacing } from '../style/spacing'
import { aBorder } from '../style/border'



function buttons() {
    let colorHSL = colorChanging()
    let buttons = document.querySelectorAll('.button')
    let borderType = aBorder
    // buttons
    for (let i = 0; i < buttons.length; i++) {
        let element = buttons[i]
        var padding = aSpacing[0] + "px " + aSpacing[1] + "px "
        element.style.borderRadius = rBorderRadius
        if(element.classList.contains("button--alt")) {
            element.style.border = 16 + "px" + " solid white "
            element.style.borderRadius = borderType
            element.style.backgroundColor = "transparent"
            element.style.color = "hsl(" + colorHSL.hue + ", " + colorHSL.saturation + "%, " + colorHSL.lightness + "%)"
        } else {
            element.style.backgroundColor = "hsl(" + colorHSL.hue + ", " + colorHSL.saturation + "%, " + colorHSL.lightness + "%)"

        }
        //console.log(padding)
        element.style.padding = padding
    }

    
}
export { buttons }
