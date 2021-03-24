"use strict"

// True or false 
function trueOrFalse() {
    let i = 0.5
    while( i == 0.5 ) { i = Math.random() }
    if( i > 0.5 ) { return true } 
    else { return false }
}
// random number between a determined min and max
function rN(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRValue() {
    let rValue = input.value
    return rValue
} 
// Generation of the site
function generation() {
    fontGeneration()
    bgChoice()
    layoutGeneration()
    contentGeneration()
}

let bg = document.querySelector('.background');
let content = document.querySelector('.content')
generation()

// Type of pallet
function typeOfPallet() {
    let i = rN(1,6);
    if (i == 1) { return analogous()} else
    if (i == 2) { return monochromatic()} else
    if (i == 3) { return triad()} else
    if (i == 4) { return complementary()} else
    if (i == 5) { return square() } else
    if (i == 6) { return shades() }
} 


function rColorInPallet() {
    let rColorOfPallet1 = rN( 1, c[1].length)
    let rColorOfPallet2 = rN( 1, c[1].length)
    while(rColorOfPallet2 == rColorOfPallet1) {
        rColorOfPallet2 = rN( 1, c[1].length)
    }
    return rColorOfPallet1, rColorOfPallet2
}

function colorsGeneration() {

    let c = typeOfPallet();
/*     // Show color generates
    let h2 = document.createElement('h2');
    let title_h2 = document.body.appendChild(h2);
    title_h2.innerHTML = `${c[0]} color generation`;
    c[1].forEach(element => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.backgroundColor = element;
    });   */


return c

}

/* Background generation */


function bgChoice() {
    //let rValue = getRValue()
    let typeOfBg = rN(4,4)
    if( typeOfBg == 1 ) { blackBg() } else 
    if( typeOfBg == 2 ) { whiteBg() } else
    if( typeOfBg == 3 ) { colorBg() } else
    if( typeOfBg == 4 ) { gradientBg() }    
}

function getDataColors() {

}

function blackBg() {
    bg.style.backgroundColor = "black";
    return "black"
}
function whiteBg() {
    bg.style.backgroundColor = "white";
    return "white"
}
function colorBg() {
    let colors = colorsGeneration()[1]
    // Choose a color in the colors array
    let rColorOfPallet = rN( 1, colors.length)-1
    let dataColors = []
    // Apply the color
    bg.style.backgroundColor = colors[rColorOfPallet]

    for (let i = 0; i < 2; i++) {
        if(i == 1) { dataColors[0].push("color") }
        else { dataColors[1].push(rColorOfPallet) }
    }
    return dataColors
}
function gradientBg() {
    // Create a gradient
    let colors = colorsGeneration()[1]
    let rAngle = rN(0,360)
    let colorsSelected = []
    let rColor1 = 1
    let rColor2 = 1
    // Make sure there's two different colors
    do {
        rColor1 = rN(2, colors.length)
    } while( rColor1 == rColor2)

    colorsSelected.push(colors[rColor1-1])
    colorsSelected.push(colors[rColor2-1])
    bg.style.background = "linear-gradient( " + rAngle + "deg, " + colorsSelected[0] + " 0% ," + colorsSelected[1] + " 100%" + ")"
    return "gradient"
}


/* font generation */

function fontGeneration() {

    let aRatioFont = [
        ["Minor Second", "1.067"],
        ["Major Second", "1.125"], 
        ["Minor Third", "1.200"], 
        ["Major Third", "1.250"], 
        ["Perfect fourth", "1.333"], 
        ["Augmented fourth", "1.414"],
        ["Perfect fifth","1.500"],
        ["Golden ratio", "1.618"] // 
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
        ['Lato'],
        ['Lexend'],
        ['Montserrat'],
        ['Noto Sans'],
        ['Open Sans'],
        ['Oswald']
    ]

    // Font size variables
    const iterator = aTextLevel.keys()
    var baseSizeFont = rN(16,24)
    let ratioValues = aRatioFont[rN(0,7)]
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
    let rFontFamily = rN(1,aFontFamily.length-1)
    var fontName = aFontFamily[rFontFamily]
    let rFontWeight = rN(1,2)

    var WebFont = require('webfontloader')
    WebFont.load({
        google: {
            families: [fontName[0]]
        }
    })


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
                elementNodelist[i].style.fontFamily = fontName
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
                elementNodelist[i].style.marginBottom = marginBottomElement
                
            }
        }
    } 
}






function contentGeneration() {
    var generativeElement = document.querySelectorAll('.generative-content')
    var aHello = [
        "Hello",
        "Hi",
        "Salut",
        "Hallo"
    ]

    var aTryingTo = [
        "impress his futur employee.",
        "feel existing",
        "prove himself he can also do great design",
        "escape from impostor syndrome",
        "have the love he never had from his parents",
        "make a living from his passion"
    ]

    for(let i = 0; i < generativeElement.length; i++) {
        let currentElement = generativeElement[i]
        if(currentElement.classList.contains("hi")) {
            currentElement.innerHTML = aHello[rN(0, aHello.length-1)]
        } else 
        if(currentElement.classList.contains("amount_designer")) {
            currentElement.innerHTML = rN(100,10000)
        } else 
        if(currentElement.classList.contains("trying_to")) {
            currentElement.innerHTML = aTryingTo[rN(0, aTryingTo.length-1)]
        }
    } 
}

function layoutGeneration() {

    let rMargin = rN(8, 24) + "px"
    let contentWidth = rN(50,90) + "%"

    document.body.style.margin = rMargin
    content.style.width = contentWidth



}


/*  Pallet generation   */
function analogous() {
    // Generate between 2 and 5 colors
    // Generate a random Hue and by that, generate other colors close to this hue
    // Analogous must have a short range of hue
    let rHue = rN(0,360)
    let rSaturation = rN(50,100)
    let nColor = rN(2,5)
    let rLightness = rN(30,75)
    // Delta is always the same as the N of color 
    let rDelta = rN(130,210);
    let delta = rDelta - ( (rDelta / 5 ) * (5 - nColor) );
    let colors = [
        ["Analogous"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let hue = rHue + (i *  (delta/nColor) )
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function monochromatic() {
    let rHue = rN(0,360)
    let nColor = rN(2,5)
    let colors = [
        ["Monochromatic"],
        []
    ]

    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        colors[1].push(`hsl(${rHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}
function triad() {
    
    let nColor = rN(3,3)
    let rHue = rN(0,360)
    let colors = [
        ["Triad"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        let hue = rHue + (i * 120);
        if(hue > 360) {
            hue = hue - 360;
        }
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function complementary() {

    // Gen a color and became complementary if even 
    let nColor =  rN(2,5)
    let rHue = rN(0,360)
    let colors = [
        ["Complementary"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = rN(20,85)
        let rSaturation = rN(30,100)
        let hue = rHue;
        if( i % 2 == 0) {
            hue = rHue + 180
        }
        colors[1].push(`hsl(${hue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
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
function shades() {
        // Gen a color and became complementary if even 
        let nColor = rN(2,5)
        let rHue = rN(0,360)
        let rSaturation = rN(30,100)
        let colors = [
            ["Shades"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = rN(20,85)
            let ShadesHue = rHue;
            colors[1].push(`hsl(${ShadesHue},${rSaturation}%,${rLightness}%)`)
        }
        return colors
}



/* Interaction */

let btn_hero = document.querySelector('.js-btn-hero')
let next = document.querySelector('.next')

btn_hero.addEventListener('click', () => {
    content.style.display = "none"
    next.style.display = "block"
});


let btn_manifesto = document.querySelector('.js-manifesto')
let btn_how_to = document.querySelector('.js-how-to')

let manifesto = document.querySelector('.manifesto')
let how_to = document.querySelector('.how-to')


btn_manifesto.addEventListener('click', () => {
    next.style.display = "none"
    manifesto.style.display = "block"
});
btn_how_to.addEventListener('click', () => {
    next.style.display = "none"
    how_to.style.display = "block"

});