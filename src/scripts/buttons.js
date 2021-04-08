import { rN } from 'fcts.js'
import { aColor } from 'color.js'
function spacing() {
    let aSpacing = []
    var spacingValue = rN(5,8)
    var last = spacingValue
    aSpacing.push(spacingValue)
    for (let i = 0; i < 5; i++) {
        var current = last * 2
        var last = current
        aSpacing.push(current)

        let elementSpacing = "spacing--" + (i+1)
        let currentElement = document.querySelector('.' + elementSpacing)
        //currentElement.innerHTML = aSpacing[i]
    }
    return aSpacing
}

function buttons() {
    let buttons = document.querySelectorAll('.button')
    let aSpacing = spacing()
    let rBorderRadius = rN(2,8) + "px"
    for (let i = 0; i < buttons.length; i++) {
        let element = buttons[i]
        var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
        element.style.borderRadius = rBorderRadius
        //console.log(aColor[0])
        if(element.classList.contains("button--alt")) {
            let rBorderWidth = rN(2,4)
            element.style.border = rBorderWidth + "px" + " solid " + aColor[0]
            var padding = aSpacing[1] - rBorderWidth + "px " + aSpacing[2] + "px"
            element.style.backgroundColor = "transparent"
            element.style.color = aColor[0]
        } else {
            element.style.backgroundColor = aColor[2]
        }
        //console.log(padding)
        element.style.padding = padding
    }
}
export { buttons }
