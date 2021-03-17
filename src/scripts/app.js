
// True or false 
function trueOrFalse() {
    let i = 0.5
    while(i == 0.5) { i = Math.random() }
    if(i > 0.5) { return true } 
    else { return false }
}

// Random Number between min and max
function RandomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generation a random pallet type
// Type of pallet
function typeOfPallet() {
    let i = RandomNumber(1,6);

    if (i == 1) { return Analogous()}
    if (i == 2) { return Monochromatic()}
    if (i == 3) { return Triad()}
    if (i == 4) { return Complementary()}
    if (i == 5) { return Square() }
    if (i == 6) { return  Shades() }
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



}

colorsGeneration();

function Analogous() {
    // Generate between 2 and 5 colors
    // Generate a random Hue and by that, generate other colors close to this hue
    // Analogous must have a short range of hue
    let rHue = RandomNumber(0,360)
    let rSaturation = RandomNumber(50,100)
    let nColor = RandomNumber(2,5)
    let rLightness = RandomNumber(30,75)
    // Delta is always the same as the number of color 
    let rDelta = RandomNumber(130,210);
    let delta = rDelta - ( (rDelta / 5 ) * (5 - nColor) );
    let colors = [
        ["Analogous"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let currentHue = rHue + (i *  (delta/nColor) )
        colors[1].push(`hsl(${currentHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function Monochromatic() {
    let rHue = RandomNumber(0,360)
    let nColor = RandomNumber(2,5)
    let colors = [
        ["Monochromatic"],
        []
    ]

    for (let i = 0; i < nColor; i++) {
        let rLightness = RandomNumber(20,85)
        let rSaturation = RandomNumber(30,100)
        colors[1].push(`hsl(${rHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors
}
function Triad() {
    
    let nColor = RandomNumber(3,3)
    let rHue = RandomNumber(0,360)
    let colors = [
        ["Triad"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = RandomNumber(20,85)
        let rSaturation = RandomNumber(30,100)
        let triadHue = rHue + (i * 120);
        if(triadHue > 360) {
            triadHue = triadHue - 360;
        }
        colors[1].push(`hsl(${triadHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function Complementary() {

    // Gen a color and became complementary if even 
    let nColor =  RandomNumber(2,5)
    let rHue = RandomNumber(0,360)
    let colors = [
        ["Complementary"],
        []
    ]
    for (let i = 0; i < nColor; i++) {
        let rLightness = RandomNumber(20,85)
        let rSaturation = RandomNumber(30,100)
        let ComplHue = rHue;
        if( i % 2 == 0) {
            ComplHue = rHue + 180
        }
        colors[1].push(`hsl(${ComplHue},${rSaturation}%,${rLightness}%)`)
    }
    return colors

}
function Square() {
        // Gen a color and became complementary if even 
        let nColor = 4;
        let rHue = RandomNumber(0,360)
        let colors = [
            ["Square"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = RandomNumber(20,85)
            let rSaturation = RandomNumber(30,100)
            let SquareHue = rHue + (i * 90)
            if( SquareHue > 360) {
                SquareHue = SquareHue - 360;

            }
            colors[1].push(`hsl(${SquareHue},${rSaturation}%,${rLightness}%)`)
        }
        return colors

}
function Shades() {
        // Gen a color and became complementary if even 
        let nColor = RandomNumber(2,5)
        let rHue = RandomNumber(0,360)
        let rSaturation = RandomNumber(30,100)
        let colors = [
            ["Shades"],
            []
        ]
        for (let i = 0; i < nColor; i++) {
            let rLightness = RandomNumber(20,85)
            let ShadesHue = rHue;
            colors[1].push(`hsl(${ShadesHue},${rSaturation}%,${rLightness}%)`)
        }
        return colors
}
