import { rN } from 'fcts.js'
import { aColor } from 'color.js'
import { spacing, border } from 'spacing.js'
function buttons() {
    let buttons = document.querySelectorAll('.button')
    let aSpacing = spacing()
    let borderType = border()
    
    let rBorderRadius = rN(2,8) + "px"
    for (let i = 0; i < buttons.length; i++) {
        let element = buttons[i]
        var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
        element.style.borderRadius = rBorderRadius
        //console.log(aColor[0])
        if(element.classList.contains("button--alt")) {
            element.style.border = 2 + "px" + " solid white "
            element.style.borderRadius = borderType
            var padding = aSpacing[1] - 2 + "px " + aSpacing[2] + "px"
            element.style.backgroundColor = "transparent"
            element.style.color = aColor[2]
        } else {
            element.style.backgroundColor = aColor[2]
        }
        //console.log(padding)
        element.style.padding = padding
    }

}
export { buttons }
