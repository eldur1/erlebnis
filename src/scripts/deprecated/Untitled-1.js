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

/*     // Show color generates
    let h2 = document.createElement('h2');
    let title_h2 = document.body.appendChild(h2);
    title_h2.innerHTML = `${c[0]} color generation`;
    c[1].forEach(element => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.backgroundColor = element;
    });   */


    function square() {
        // Gen a color and became complementary if even 
        let nColor = 4;
        let rHue = rN(0,360)
        let colors = [
            ["Square"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = rN(20,85)
            let rSaturation = rN(30,100)
            let hue = rHue + (i * 90)
            if( hue > 360) {
                hue = hue - 360;

            }
            colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
        }
        return colors

}