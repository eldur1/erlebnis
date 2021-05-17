import { rN, closeColor } from 'fcts.js'
import { aColor } from 'color.js'
import { spacing, border } from 'spacing.js'
import { gsap, Power3} from "gsap"
import { colors, rLightness, rSaturation, aHue } from 'gradient.js'

function buttons() {

    let buttons = document.querySelectorAll('.button')
    let aSpacing = spacing()
    let borderType = border()

    // interactions

    // Project link
    fetch('assets/data/projects.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Recover border, spacing
        var count = Object.keys(data).length;
        // For each project, create element
        let container = document.querySelector('.work')
        // Hue and Lightness are defined outside the loop the get the same value for every element

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                let a = document.createElement('a')
                const element = data[key];
                //console.log(element.name);
                let link = container.appendChild(a)
                link.innerHTML = element.name
                link.href = element.link
                link.target = "_blank"
                link.rel = "noreferrer"
                link.style.color = "black"
                link.style.fontSize = "22px"
                link.classList.add('button', 'button--project', 'p' )

                let rSaturationButton = rN(rSaturation[0][0], rSaturation[0][1])
                let rLightnessButton = rN(rLightness[0][0], rLightness[0][1])+25
                let rHueButton = rN(aHue[0][0], aHue[0][1])

                //console.log("hsl(" + closeColor(aHue[0][0], 30) + "," + closeColor(rSaturation[0], 10) + "%," + closeColor(rLightness[0], 30) + "%)");
                link.style.backgroundColor = "hsl(" + rHueButton + "," + rSaturationButton + "%," + rLightnessButton + "%)"
                var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                link.style.borderRadius = borderType
                link.style.padding = padding 
            }
        }
    })
    .catch((err) => {
        console.log(err);
    })



    // tests
/*     var cursor = document.querySelector('.cursor')

    let div = document.createElement('div')
    let test = document.body.appendChild(div)
    test.style.width = "100px"
    test.style.height = "100px"
    test.style.backgroundColor = "blue"

    var tl =  gsap.timeline({
        paused : true
    })
    tl.to(cursor, {
        scale:1,
        duration:0.1,
        ease:Power3.easeOut
    }) 
    tl.to(cursor, {
        scale:5,
        duration:0.1,
        ease:Power3.easeOut
    }) 

    test.addEventListener('mouseenter', () => {
        tl.play()
        console.log(cursor);
        console.log("Entre");
    }); */
/*     test.addEventListener('mouseleave', () => {
        console.log("Sors");
        //tl.reverse(0)
    }); */


    // Other buttons
    let rBorderRadius = rN(2,8) + "px"
    for (let i = 0; i < buttons.length; i++) {
        let element = buttons[i]
        var padding = aSpacing[0] + "px " + aSpacing[1] + "px "
        element.style.borderRadius = rBorderRadius
        if(element.classList.contains("button--alt")) {
            element.style.border = 2 + "px" + " solid white "
            element.style.borderRadius = borderType
            var padding = aSpacing[1] - 2 + "px " + aSpacing[2] + "px"
            element.style.backgroundColor = "transparent"
            element.style.color = aColor[2]
        } else {
            element.style.backgroundColor = aColor[2]
        }
        //console.log(padding)
        element.style.padding = padding
    }

    
}
export { buttons }
