import { rN } from 'fcts.js'
import { aColor } from 'color.js'
import { spacing, border } from 'spacing.js'

function buttons() {

    let buttons = document.querySelectorAll('.button')
    let aSpacing = spacing()
    let borderType = border()



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
                let elementDOM = container.appendChild(a)
                elementDOM.innerHTML = element.name
                elementDOM.href = element.link
                elementDOM.target = "_blank"
                elementDOM.style.fontSize = "22px"
                elementDOM.classList.add('button', 'button--project', 'p' )
                elementDOM.style.backgroundColor = "hsl(" + rN(0,360) + ", " + rSaturation + "%, " + rLightness + "%)"
                var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                elementDOM.style.borderRadius = borderType
                elementDOM.style.padding = padding
            }
        }
    })
    .catch((err) => {
        console.log(err);
    })
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
