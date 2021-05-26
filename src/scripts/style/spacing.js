import { rN } from '../utils/fcts.js'


// Values of Spacing and border
export var aSpacing = []

export function spacing() {

    var spacingValue = rN(5,8)
    var last = spacingValue
    aSpacing.push(spacingValue)
    for (let i = 0; i < 5; i++) {
        var current = last * 2
        var last = current
        aSpacing.push(current)

        let elementSpacing = "spacing--" + (i+1)
        let currentElement = document.querySelector('.' + elementSpacing)
        //currentElement.textContent = aSpacing[i]
    }
    let aSizeSpacing = [
        "min",
        "small",
        "medium",
        "big",
        "enormous"
    ]
    // Execute 3 times (min, small, medium, big)
    for (let i = 0; i < aSizeSpacing.length; i++) {
        const sizeName = aSizeSpacing[i]

        let coords = ['top', 'left', 'right', 'bottom']
        for (let j = 0; j < coords.length; j++) {
            const elementPos = coords[j]
            let spacingElement = document.querySelectorAll('.spacing-' + elementPos + "--" + sizeName)
            for (let x = 0; x < spacingElement.length; x++) {
                const element = spacingElement[x]
                let margin = "margin-" + elementPos
                element.style.[margin]  = aSpacing[i+1] + "px"
            }
        }
    }
}
