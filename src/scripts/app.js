
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

// Generation a random pallet type
// Type of pallet
function typeOfPallet() {
    let i = randomNumber(1,6);

    if (i == 1) { return analogous()}
    else if (i == 2) { return monochromatic()}
    else if (i == 3) { return triad()}
    else if (i == 4) { return complementary()}
    else if (i == 5) { return square() }
    else if (i == 6) { return shades() }
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


// Show color generates
/*
let h2 = document.createElement('h2');
let title_h2 = document.body.appendChild(h2);
title_h2.innerHTML = `${c[0]} color generation`;
 c[1].forEach(element => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    console.log(element);
    div.style.backgroundColor = element;
});  */



// Find 2 color in the generate pallet

return c

}


colorsGeneration();


/* Background generation */
let bg = document.querySelector('.background');


function bgChoice() {
    let typeOfBg = randomNumber(1,4)
    if( typeOfBg == 1 ) { return blackBg() } else 
    if( typeOfBg == 2 ) { return whiteBg() } else
    if( typeOfBg == 3 ) { return colorBg() } else
    if( typeOfBg == 4 ) { return gradientBg() }
}

function blackBg() {
    bg.style.backgroundColor = "black";
}
function whiteBg() {
    bg.style.backgroundColor = "white";

}
function colorBg() {
    let namePallet = colorsGeneration()[0]
    let colors = colorsGeneration()[1]
    let colorsLength = colors.length
    // Choose a color in the colors array
    let rColorOfPallet = randomNumber( 1, colorsLength)-1
    // Apply the color
    bg.style.backgroundColor = colors[rColorOfPallet]

}
function gradientBg() {
    let colors = colorsGeneration()[1]
    let colorsLength = colors.length
    
    // 1. Choose a type of  gradient (linear or radial) 
    let gradientType = randomNumber(1,1)

    if( gradientType == 1 ) { linearGradient() } else
    if( gradientType == 2 ) { radialGradient() }

    // Choose number of colors we'll use (minimum 2)


    // Loop that choose the color in the array

    // Generate angles for each color selected



    // 
    function linearGradient() {
        var rColorOfPallet = randomNumber( 2, 4)

        var colorsSelected = []
        for (let i = 0; i < rColorOfPallet; i++) {
            let element = colors[i]
            if(! colorsSelected.includes(element)) {
                colorsSelected.push(element)
            } 
        }

        let angles = []
        for (let i = 0; i < colorsSelected.length; i++) {
            let rAngle = randomNumber(0,360)
            angles.push(rAngle)
        }
//   background: linear-gradient(180deg,hsl(207,92%,35%), hsl(100,40%,34%));
        for (let i = 0; i < rColorOfPallet/2; i++) {
            bg.style.background = "linear-gradient( " + angles[i] + "deg, " + colorsSelected[i] + "," + colorsSelected[i+1] + ")"
            console.log(bg.style.background)
        }


    }
    //
    
    function radialGradient() {
        let rColorStop = randomNumber(0,1)

    }

    




}

gradientBg()





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
