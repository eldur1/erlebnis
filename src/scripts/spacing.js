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
        "medium",
        "big",
    ]
    // Execute 2 times (medium, big)
    for (let i = 0; i < aSizeSpacing.length; i++) {
        const sizeName = aSizeSpacing[i];
        let spacingElementBottom = document.querySelectorAll('.spacing-bottom--' + sizeName)
        // Affect style of each element (medium or big)
        for (let x = 0; x < spacingElementBottom.length; x++) {
            const element = spacingElementBottom[x];
            //console.log(aSpacing[i+2]);
            element.style.marginBottom = aSpacing[i+2] + "px"
        }

        let spacingElementTop = document.querySelectorAll('.spacing-top--' + sizeName)
        // Affect style of each element (medium or big)
        for (let y = 0; y < spacingElementTop.length; y++) {
            const element = spacingElementTop[y];
            element.style.marginTop = aSpacing[i+2] + "px"
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

    let gradientBg = document.querySelector('.gradient')
    gradientBg.style.borderRadius = border


    return border
}



export { spacing, border }