import { rN, trueOrFalse } from 'fcts.js'
import { aColor } from 'color.js'
function font() {

    let aRatioFont = [
        //["Minor Second", "1.067"],
        //["Major Second", "1.125"], 
        ["Minor Third", "1.200"], 
        ["Major Third", "1.250"], 
        ["Perfect fourth", "1.333"], 
        ["Augmented fourth", "1.414"],
        //["Perfect fifth","1.500"],
        //["Golden ratio", "1.618"]
    ]
    const title_h1 = document.querySelectorAll('.title--large')
    const title_h2 = document.querySelectorAll('.title--big')
    const title_h3 = document.querySelectorAll('.title--medium')
    const paragraph = document.querySelectorAll('.p')    

    var aTextLevel = [
        [title_h3],
        [title_h2],
        [title_h1],
        [paragraph]
    ]

    var aFontFamily = [
        ['Montserrat'],
        ['Inconsolata'],
        ['Playfair Display'],
        //['Open Sans Light'],
        //['Oxygen'],
        ['DM Serif Display'],
        ['Work Sans'],
        ['IBM Plex Sans'],
    ]

    // Font size variables
    const iterator = aTextLevel.keys()
    var baseSizeFont = rN(16,20)
    let ratioValues = aRatioFont[rN(0,aRatioFont.length-1)]
    let ratioFont = ratioValues[1]
    let ratioFontName = ratioValues[0]
    let aComputedRatio = []
    var rLineHeight = rN(120,150)
    var computedFontSize = baseSizeFont


    // Text layout
    let pBump = trueOrFalse()
    let marginBottomElement = rN(0,50) + "px"
    let pMaxWidth = rN(30,70) + "ch"


    // DEBUG

    //console.log(ratioFontName + " : " + ratioFont)
    //console.log("Base font size : " + baseSizeFont)

    // Loop every type of text (p, h1, h2, h3)


    // Font family
    let rFontFamily = rN(0,aFontFamily.length-1)
    var fontName = aFontFamily[rFontFamily]
    let rFontWeight = rN(1,2)

    var WebFont = require('webfontloader')
    WebFont.load({
        google: {
            families: [fontName[0]]
        }
    })


    document.body.style.fontFamily = aFontFamily[rFontFamily]
    for (const key of iterator) {
        var aText = []
        var element  = aTextLevel[key]
        var elementNodelist = element[0]

        // Font size and line height

        // Paragraph
        if(key == 3) {
            for (let i = 0; i < element[0].length; i++) {
                elementNodelist[i].style.fontSize = computedFontSize + "px"
                elementNodelist[i].style.lineHeight = rLineHeight + "%"
                elementNodelist[i].style.maxWidth = pMaxWidth
/*                 // A little bump
                if(pBump == true) { 
                    elementNodelist[i].style.marginLeft = rN(10,20) + "px"
                } 
 */

            }
        }
        // Titles
        // Will be executed 3 times (h1,h2,h3)
        else {
            var val = baseSizeFont

            for(let i = 0; i < key+1 ; i++) {
                var val = val * ratioFont
            }
                aComputedRatio.push(val)
            
            // Size calculator for each title (depend on head level)
            for (let i = 0; i < element[0].length; i++) {
                elementNodelist[i].style.fontSize = aComputedRatio[key] + "px"
                elementNodelist[i].style.lineHeight = rLineHeight + "%"
                elementNodelist[i].style.fontFamily = fontName
                
            }
        }
    } 
    let bg = document.querySelector('.background');

    let spanColor = document.querySelectorAll('.color--primary')

    for (let i = 0; i < spanColor.length; i++) {
    let element = spanColor[i]
    //console.log(element);
    element.style.color = aColor[0]
    }
    bg.style.backgroundColor = aColor[3]

}
export { font }