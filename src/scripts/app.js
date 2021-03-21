
// True or false 
function trueOrFalse() {
    let i = 0.5
    while(i == 0.5) { i = Math.random() }
    if(i > 0.5) { return true } 
    else { return false }
}

// Random Number between min and max
function randomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRValue() {
    let rValue = input.value
    return rValue
} 
// Generation of the site
function generation() {
    fontGeneration()
}


let bg = document.querySelector('.background');

/* let randonmess = randomNumber(1,10)
const input = document.querySelector('input')

input.value = randonmess
input.nextElementSibling.innerHTML = input.value

input.addEventListener('change', () => {
    input.nextElementSibling.innerHTML = input.value
    generation()
    return randonmess
}) */


generation()
// Generation a random pallet type
// Type of pallet

function typeOfPallet() {
    let i = randomNumber(1,6);

    if (i == 1) { return analogous()} else
    if (i == 2) { return monochromatic()} else
    if (i == 3) { return triad()} else
    if (i == 4) { return complementary()} else
    if (i == 5) { return square() } else
    if (i == 6) { return shades() }
} 


function rColorInPallet() {
    let rColorOfPallet1 = randomNumber( 1, c[1].length)
    let rColorOfPallet2 = randomNumber( 1, c[1].length)
    while(rColorOfPallet2 == rColorOfPallet1) {
        rColorOfPallet2 = randomNumber( 1, c[1].length)
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
    let typeOfBg = randomNumber(1,4)
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
    let rColorOfPallet = randomNumber( 1, colors.length)-1
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
    // Create a gradient with two different color of the pallet
    let colors = colorsGeneration()[1]
    let rAngle = randomNumber(0,360)
    let colorsSelected = []
    let rColor1 = 1
    let rColor2 = 1

    do {
        rColor1 = randomNumber(2, colors.length)
    } while( rColor1 == rColor2)


    colorsSelected.push(colors[rColor1-1])
    colorsSelected.push(colors[rColor2-1])
    bg.style.background = "linear-gradient( " + rAngle + "deg, " + colorsSelected[0] + " 0% ," + colorsSelected[1] + " 100%" + ")"
    return "gradient"
}


/* font generation */


function fontGeneration() {

    // Get return of randomness



    if(randomness == 1 ) {
        let rNumberOfFont  = 1
        let rLineHeight = randomNumber(110,130)
    } else
    if(randomness == 2) {
        let rNumberOfFont  = 2
    } else 
    if(randomness == 3) {
        let rNumberOfFont  = 3

    } else 
    if(randomness == 4) {
        let rNumberOfFont  = 4

    } else 
    if(randomness == 5) {
        let rNumberOfFont  = 5
        let rLineHeight = randomNumber(80,180)
    }
    let rFont = randomNumber(1,5)
    let rNumberOfFont  = 2 


    // Title font bold or not
    let rStyle = trueOrFalse()
    if(rStyle == true) {
        // Title font is bold
    }
    else {
        // Title font is normal
    }


    // random Line height
    let rLineHeight = randomNumber(100,150)

    // color font (must be readable)


}

function contentGeneration() {


}




/*  Pallet generation   */

function analogous() {
    // Generate between 2 and 5 colors
    // Generate a random Hue and by that, generate other colors close to this hue
    // Analogous must have a short range of hue
    let rHue = randomNumber(0,360)
    let rSaturation = randomNumber(50,100)
    let nColor = randomNumber(2,5)
    let rLightness = randomNumber(30,75)
    // Delta is always the same as the number of color 
    let rDelta = randomNumber(130,210);
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
    let rHue = randomNumber(0,360)
    let nColor = randomNumber(2,5)
    let colors = [
        ["Monochromatic"],
        []
    ]

    for (let i = 0; i < nColor; i++) {
        let rLightness = randomNumber(20,85)
        let rSaturation = randomNumber(30,100)
        colors[1].push(`hsl(${rHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}
function triad() {
    
    let nColor = randomNumber(3,3)
    let rHue = randomNumber(0,360)
    let colors = [
        ["Triad"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = randomNumber(20,85)
        let rSaturation = randomNumber(30,100)
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
    let nColor =  randomNumber(2,5)
    let rHue = randomNumber(0,360)
    let colors = [
        ["Complementary"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = randomNumber(20,85)
        let rSaturation = randomNumber(30,100)
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
        let rHue = randomNumber(0,360)
        let colors = [
            ["Square"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = randomNumber(20,85)
            let rSaturation = randomNumber(30,100)
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
        let nColor = randomNumber(2,5)
        let rHue = randomNumber(0,360)
        let rSaturation = randomNumber(30,100)
        let colors = [
            ["Shades"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = randomNumber(20,85)
            let ShadesHue = rHue;
            colors[1].push(`hsl(${ShadesHue},${rSaturation}%,${rLightness}%)`)
        }
        return colors
}
