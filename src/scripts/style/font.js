import { getRealTime} from '../utils/fcts'

export var aFontFamily = [
    ['Roboto Condensed'],
    ['Playfair Display'],
    ['Poppins'],
    ['IBM Plex Sans'],
    ['Raleway'],
    ['DM Serif Display'],
    ['Inconsolata'],
]
export const aComputedRatio = []

export var aFontValues = {
    "Roboto Condensed": {
        ratio: "1.414",
        base: "16",
        lineHeight: {
            tagline: "130%",
            p:"145%",
            title:"100%"
        }
    },
    "Playfair Display": {
        ratio: "1.272",
        base: "20",
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
        ratio: "1.272",
        base: "17",
        lineHeight: {
            tagline: "145%",
            p:"140%",
            title:"100%"
        }
    },
    "Raleway": {
        ratio: "1.236",
        base: "20",
        lineHeight: {
            tagline: "145%",
            p:"140%",
            title:"100%"
        }
    },
    "DM Serif Display": {
        ratio: "1.272",
        base: "20",
        lineHeight: {
            tagline: "130%",
            p:"145%",
            title:"100%"
        }
    },
    "Inconsolata": {
        ratio: "1.333",
        base: "14",
        lineHeight: {
            tagline: "145%",
            p:"135%",
            title:"100%"
        }
    }
}
function font() {
    const title_large = document.querySelectorAll('.title--large')
    const title_big = document.querySelectorAll('.title--big')
    const title_medium = document.querySelectorAll('.title--medium')
    const title_small = document.querySelectorAll('.title--small')
    const paragraph = document.querySelectorAll('.base-font')

    var aTextLevel = [
        [title_small],
        [title_medium],
        [title_big],
        [title_large],
        [paragraph]
    ]

    // Font size variables
    const iterator = aTextLevel.keys()
    let time = getRealTime()

    // Font family
    //time.days-1
    var currentFont = aFontFamily[5]
    document.body.style.fontFamily = currentFont

    // Font values
    var oFont = {
        fonts: aFontValues.[currentFont]
    }
    var WebFont = require('webfontloader')
    WebFont.load({
        google: {
            families: [currentFont[0]]
        }
    })

    // Small 

    let small = document.querySelector('small')
    small.style.fontSize = oFont.fonts.base/oFont.fonts.ratio + "px"

    // Paragraph + titles

    for (const key of iterator) {
        var aText = []
        var element  = aTextLevel[key]
        var elementNodelist = element[0]

        // base font
        if(key == 4) {
            for (let i = 0; i < element[0].length; i++) {
                elementNodelist[i].style.fontSize = oFont.fonts.base + "px"
                elementNodelist[i].style.lineHeight = oFont.fonts.lineHeight.p
            }
        }
        // Titles
        // Will be executed 4 times (h1,h2,h3)
        else {
            var val = oFont.fonts.base
            for(let i = 0; i < key+1 ; i++) {
                var val = val * oFont.fonts.ratio
            }
                aComputedRatio.push(Math.floor(val))
            
            // Size calculator for each title (depend on head level)
            for (let i = 0; i < element[0].length; i++) {
                let el = elementNodelist[i]
                el.style.fontSize = aComputedRatio[key] + "px"
                el.style.fontFamily = currentFont
                if(el.classList.contains('tagline')) {
                    el.style.lineHeight = oFont.fonts.lineHeight.tagline
                } else {
                    el.style.lineHeight = oFont.fonts.lineHeight.title
                }
            }
        }
    }

}
export { font }