// Generation of the site
function generation() {
    font()
    spacing()
    layoutGeneration()
    contentGeneration()
}

let bg = document.querySelector('.background');
let content = document.querySelector('.content')
generation()

// Type of pallet
function typeOfPallet() {
    let aTypeOfPallet = [
        analogous(),
        //monochromatic(),
        complementary(),
        //square(),
        shades()
    ]
    let rPallet = aTypeOfPallet[rN(0,aTypeOfPallet.length-1)]

    //DEBUG
    let typeOfPallet = rPallet[0]
    let aOfColors = rPallet[1]
    //console.log(typeOfPallet + " : " + aOfColors)

    return rPallet
} 


function rColorInPallet() {
    let rColorOfPallet1 = rN( 1, c[1].length)
    let rColorOfPallet2 = rN( 1, c[1].length)
    while(rColorOfPallet2 == rColorOfPallet1) {
        rColorOfPallet2 = rN( 1, c[1].length)
    }
    return rColorOfPallet1, rColorOfPallet2
}



var aColor = color()



let spanColor = document.querySelectorAll('.color--primary')

for (let i = 0; i < spanColor.length; i++) {
    let element = spanColor[i]
    console.log(element);
    element.style.color = aColor[0]
}


function spacing() {
    let aSpacing = []
    var spacingValue = rN(5,8)
    var last = spacingValue

    aSpacing.push(spacingValue)
    for (let i = 0; i < 5; i++) {
        var current = last * 2
        var last = current
        aSpacing.push(current)

        let elementSpacing = "spacing--" + (i+1)
        let currentElement = document.querySelector('.' + elementSpacing)
        //currentElement.innerHTML = aSpacing[i]
    }
    return aSpacing
}

let buttons = document.querySelectorAll('.button')
let aSpacing = spacing()
let rBorderRadius = rN(2,8) + "px"
for (let i = 0; i < buttons.length; i++) {
    let element = buttons[i]
    var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
    element.style.borderRadius = rBorderRadius
    //console.log(aColor[0])
    if(element.classList.contains("button--alt")) {
        let rBorderWidth = rN(2,4)
        element.style.border = rBorderWidth + "px" + " solid " + aColor[0]
        var padding = aSpacing[1] - rBorderWidth + "px " + aSpacing[2] + "px"
        element.style.backgroundColor = "transparent"
        element.style.color = aColor[0]
    } else {
        element.style.backgroundColor = aColor[2]
    }
    console.log(padding)
    element.style.padding = padding
}



// Type of pallet
function typeOfPallet() {
    let aTypeOfPallet = [
        analogous(),
        //monochromatic(),
        complementary(),
        //square(),
        shades()
    ]
    let rPallet = aTypeOfPallet[rN(0,aTypeOfPallet.length-1)]

    //DEBUG
    let typeOfPallet = rPallet[0]
    let aOfColors = rPallet[1]
    //console.log(typeOfPallet + " : " + aOfColors)

    return rPallet
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
    return typeOfPallet()

}

/* Background generation */


    let colors = colorsGeneration()[1]
    // Choose a random color in the colors array
    let rColorOfPallet = rN( 0, colors.length-1)
    let dataColors = []
    // Apply the color
    bg.style.backgroundColor = aColor[3]
    //DEBUG
    //console.log(colors[rColorOfPallet])

function gradient() {
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


function contentGeneration() {
    var generativeElement = document.querySelectorAll('.generative-content')
    var aHello = [
        "Hello",
        "Hi",
        "Salut",
        "Hallo",
        "Hola",
        "Konnichiwa",
        "Guten Tag",
        "Olá",
        "Goddag",
        "Goedendag",
        "Namaste",
    ]

    var aTryingTo = [
        "impress his futur employee",
        "feel existing",
        "prove himself he can also do great design",
        "escape from impostor syndrome",
        "have the love he never had from his parents",
        "make a living from his passion",
        ]

    for(let i = 0; i < generativeElement.length; i++) {
        let currentElement = generativeElement[i]
        if(currentElement.classList.contains("hi")) {
            currentElement.innerHTML = aHello[rN(0, aHello.length-1)]
        } else 
        if(currentElement.classList.contains("amount_designer")) {
            currentElement.innerHTML = rN(10000,100000)
        } else 
        if(currentElement.classList.contains("trying_to")) {
            currentElement.innerHTML = aTryingTo[rN(0, aTryingTo.length-1)]
        }
    } 
}

function layoutGeneration() {

    let rMargin = rN(8, 24) + "px"
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

      }else{
        let contentWidth = rN(40,60) + "%"
        content.style.width = contentWidth
        content.classList.add("center")
      }

    document.body.style.margin = rMargin



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


/* Background generation */


    //let colors = colorsGeneration()[1]
    // Choose a random color in the colors array
    //let rColorOfPallet = rN( 0, colors.length-1)
    //let dataColors = []
    // Apply the color
    //DEBUG
    //console.log(colors[rColorOfPallet])




        // Primary
        if(i == 0) {
            var primaryHue = rN(0,360)
            var primarySaturation = rN(70,95)
            let primaryLightness = rN(50,60)
            let color = `hsl(${primaryHue},${primarySaturation}%,${primaryLightness}%)`
            aColor.push(color)
        } else
        if(i == 1) {
            let hue = primaryHue
            var saturation = primarySaturation-30
            let lightness = rN(90,95)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        } else
        if(i == 2) {
            let hue = primaryHue + 180
            if(hue > 360) {
                hue = hue - 360;
            }
            let actionSaturation = rN(70,95)
            let actionLightness = rN(50,60)
            let color = `hsl(${hue},${actionSaturation}%,${actionLightness}%)`
            aColor.push(color)
        } else 
        if(i == 3) {
            let hue = 0
            let saturation = 0
            let lightness = rN(95,100)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        } else
        if(i == 4) {
            let hue = 0
            let saturation = 0
            let lightness = rN(5,20)
            let color = `hsl(${hue},${saturation}%,${lightness}%)`
            aColor.push(color)
        }

/* function analogous() {
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

let aPallet = [
    analogous(),
    monochromatic(),
    complementary(),
    triad(),
    shades()
]
let choosenPallet = aPallet[0, aPallet.length-1] */



    // movable object

/*     let object = document.createElement('div')
    document.body.appendChild(object)
    let rSize = rN(100, 300)
    object.style.width = rSize + "px"
    object.style.height = rSize + "px"
    object.style.zIndex = -2
    object.style.position = "absolute"
    object.style.borderRadius = rSize + "px"
    object.style.webkitFilter = "blur(" + rSize/2 + "px" + ")"
    object.style.backgroundColor = 'white'
    let centerObject = rSize/2
    console.log(centerObject);
    document.addEventListener('mousemove', (event) => {
        event.clientX 
        gsap.to(object, {
            x:event.clientX-centerObject,
            y:event.clientY-centerObject,
            ease:Power2.easeOut
        })
    }); */