import { rN } from '../fcts.js'
import { aColors } from '../style/gradient.js'
import { aSpacing } from '../style/spacing.js'
import { aBorder } from '../style/border.js'

function buttons() {

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
            element.style.color = aColors[2]
        } else {
            element.style.backgroundColor = aColors[2]
        }
        //console.log(padding)
        element.style.padding = padding
    }

    
}
export { buttons }
