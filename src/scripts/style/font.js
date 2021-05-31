import { rN, trueOrFalse } from '../utils/fcts'
import { getRealTime} from '../utils/fcts'

function font() {

    const title_h1 = document.querySelectorAll('.title--large')
    const title_h2 = document.querySelectorAll('.title--big')
    const title_h3 = document.querySelectorAll('.title--medium')
    const paragraph = document.querySelectorAll('.base-font')   

    var aTextLevel = [
        [title_h3],
        [title_h2],
        [title_h1],
        [paragraph]
    ]

    var aFontFamily = [
        ['Roboto Condensed'],
        ['Playfair Display'],
        ['Poppins'],
        ['IBM Plex Sans'],
        ['Raleway'],
        ['DM Serif sans'],
        ['Inconsolata'],
    ]
    var aFontValues = {
        "Roboto Condensed": {
            ratio: "1.5",
            base: "17",
            lineHeight: {
                tagline: "130%",
                p:"145%",
                title:"100%"
            }
        },
        "Playfair Display": {
            ratio: "1.272",
            base: "17",
            lineHeight: {
                tagline: "145%",
                p:"150%",
                title:"100%"
            }
        },
        "Poppins": {
            ratio: "1.333",
            base: "17",
            lineHeight: {
                tagline: "145%",
                p:"140%",
                title:"100%"
            }
        },
        "IBM Plex Sans": {
            ratio: "1.5625",
            base: "17",
            lineHeight: {
                tagline: "145%",
                p:"149%",
                title:"100%"
            }
        },
        "Raleway": {
            ratio: "1.236",
            base: "16",
            lineHeight: {
                tagline: "145%",
                p:"140%",
                title:"100%"
            }
        },
        "DM Serif Display": {
            ratio: "1.5",
            base: "17",
            lineHeight: {
                tagline: "130%",
                p:"145%",
                title:"100%"
            }
        },
        "Roboto Condensed": {
            ratio: "1.5",
            base: "17",
            lineHeight: {
                tagline: "130%",
                p:"145%",
                title:"100%"
            }
        },
    }
    // Font size variables
    const iterator = aTextLevel.keys()
    let time = getRealTime()

    // Font family
    let fontFamily = time.days-1
    var currentFont = aFontFamily[fontFamily]
    document.body.style.fontFamily = currentFont

    // Font values
    var oFont = aFontValues.[currentFont]
    var WebFont = require('webfontloader')
    WebFont.load({
        google: {
            families: [currentFont[0]]
        }
    })

    var aComputedRatio = []
    for (const key of iterator) {
        var aText = []
        var element  = aTextLevel[key]
        var elementNodelist = element[0]

        // base font
        if(key == 3) {
            for (let i = 0; i < element[0].length; i++) {
                elementNodelist[i].style.fontSize = oFont.base + "px"
                elementNodelist[i].style.lineHeight = oFont.lineHeight.p
            }
        }
        // Titles
        // Will be executed 4 times (h1,h2,h3)
        else {
            var val = oFont.base
            console.log(oFont.ratio);
            for(let i = 0; i < key+1 ; i++) {
                var val = val * oFont.ratio
            }
                aComputedRatio.push(val)
            
            // Size calculator for each title (depend on head level)
            for (let i = 0; i < element[0].length; i++) {
                elementNodelist[i].style.fontSize = aComputedRatio[key] + "px"
                elementNodelist[i].style.fontFamily = currentFont
                elementNodelist[i].style.lineHeight = oFont.lineHeight.title + "%"
                
            }

        }
    } 


}
export { font }