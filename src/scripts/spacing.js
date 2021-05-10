import { rN } from 'fcts.js'


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
    let aSizeSpacing = [
        "min",
        "small",
        "medium",
        "big",
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
    return aSpacing
}
function border() {
    let aBorderValues = [
        "0px",
        "50px",
        "100000px"
    ]
    let rBorder = rN(0, aBorderValues.length-1)
    let border = aBorderValues[rBorder]
    
    // Apply border to images & gradient bg
    let avatar = document.querySelector('.avatar')
    avatar.style.borderRadius = border

    let gradientBg = document.querySelectorAll('.gradient')
    for (let i = 0; i < gradientBg.length; i++) {
        const element = gradientBg[i];
        element.style.borderRadius = border
    }


    return border
}



export { spacing, border }