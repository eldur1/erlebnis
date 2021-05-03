import { rN } from 'fcts.js'
import { aColor } from 'color.js'
import { spacing, border } from 'spacing.js'
import { gsap, Power3} from "gsap"

function buttons() {

    let buttons = document.querySelectorAll('.button')
    let aSpacing = spacing()
    let borderType = border()

    // interactions

    // Project link
    fetch('../assets/data/projects.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Recover border, spacing
        var count = Object.keys(data).length;
        // For each project, create element
        let container = document.querySelector('.work')
        // Hue and Lightness are defined outside the loop the get the same value for every element
        let rSaturation = rN(30,100)
        let rLightness = rN(40,60)
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
                link.style.color = "white"
                link.style.fontSize = "22px"
                link.classList.add('button', 'button--project', 'p' )
                link.style.backgroundColor = "hsl(" + rN(0,360) + ", " + rSaturation + "%, " + rLightness + "%)"
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
        var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
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
