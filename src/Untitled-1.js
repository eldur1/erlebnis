        // Paragraph

        if( i > aTextLevel.length+1 ) {
            for (let i = 0; i < element.length; i++) {
                const aText = element[i];
                console.log(element)
                //aText.style.lineHeight = rLineHeight + "%"
                //aText.style.fontSize = fontTitleSize + "px"
            } 
        }
        // Title
        else {
            for (let i = 0; i < element.length; i++) {
                const aText = element[i];
                let rNumberRatioFont = rN(1,8)
                //aText.style.lineHeight = rLineHeight + "%"
                let ratioFont = rRatioFont[rNumberRatioFont]
                //console.log(aTextLevel.length-1)

                var computedFontSize = baseSizeFont * ( ratioFont * ( 4 -  aTextLevel.length-1 )  )
                //aText.style.fontSize = computedFontSize + "px"
            } 
        }


        /* let randonmess = rN(1,10)
const input = document.querySelector('input')

input.value = randonmess
input.nextElementSibling.innerHTML = input.value

input.addEventListener('change', () => {
    input.nextElementSibling.innerHTML = input.value
    generation()
    return randonmess
}) */

console.log(i)
let dynamicElement = element[0][i]
if(dynamicElement.classList.contains('title--big')) {
    var iN = 3
} else 
if(dynamicElement.classList.contains('title--large')) {
    var iN = 2
} else 
if(dynamicElement.classList.contains('title--medium')) {
    var iN = 1
}
for(let i = 0; i < iN ; i++) {
    var val = val * ratioFont
    console.log("coucou " + iN)
}
if(! aComputedRatio.includes(val)) { aComputedRatio.push(val) }