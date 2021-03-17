
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
    if (i == 2) { return monochromatic()}
    if (i == 3) { return triad()}
    if (i == 4) { return complementary()}
    if (i == 5) { return square() }
    if (i == 6) { return shades() }
} 

function colorsGeneration() {

let c = typeOfPallet();
let h2 = document.createElement('h2');
let title_h2 = document.body.appendChild(h2);
title_h2.innerHTML = `${c[0]} color generation`;
 c[1].forEach(element => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    console.log(element);
    div.style.backgroundColor = element;
    


}); 
// Find a color in the generate pallet
let rColorOfPallet1 = randomNumber( 1, c[1].length)
let rColorOfPallet2 = randomNumber( 1, c[1].length)
while(rColorOfPallet2 == rColorOfPallet1) {
    rColorOfPallet2 = randomNumber( 1, c[1].length)
}

}

colorsGeneration();

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
