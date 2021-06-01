// Project link
    import { aSpacing } from '../style/spacing.js'
    import { aBorder } from '../style/border.js' 
    import { paths } from './lang'
    import { aFontFamily, aFontValues } from '../style/font' 
    import { getRealTime} from '../utils/fcts'
    import { colorChanging } from '../style/color'
    function project() {
        fetch(paths[0])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Recover border, spacing
            var count = Object.keys(data).length;
            // For each project, create element
            let container = document.querySelector('.work')
            // Hue and Lightness are defined outside the loop the get the same value for every element

            // Get current font
            let time = getRealTime()
            let currentFont = aFontFamily[time.days-1]
            var oFont = aFontValues.[currentFont]
            var colorHSL = colorChanging()
    
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    let divCreateElement = document.createElement('div')
                    let aCreateElement = document.createElement('h3')
                    let categoryCreateElement = document.createElement('p')

                    const element = data[key];
                    let div = container.appendChild(divCreateElement)
                    let title = div.appendChild(aCreateElement)
                    let category = div.appendChild(categoryCreateElement)

                    
                    title.textContent = element.name
                    category.textContent = element.activity

        
                    // Thumbnail
                    let thumbnailCreateElement = document.createElement('img') 
                    let thumbnail = div.appendChild(thumbnailCreateElement)
                    thumbnail.src = element.src
                    thumbnail.style.width = "100%"

                    // Summary
                    let summaryCreateElement = document.createElement('p')
                    let summary = div.appendChild(summaryCreateElement)
                    summary.textContent = element.summary
                    summary.style.marginTop = aSpacing[2] + "px"
                    summary.classList.add('summary', 'base-font')

                    // Button 
                    let buttonCreateElement = document.createElement('a')
                    let button = div.appendChild(buttonCreateElement)
                    element.name == "Rethinking UX" ? button.textContent = "Lire l'étude de cas" : button.textContent = "Consulter le site"
                    button.target = "_blank"
                    button.rel = "noreferrer"
                    button.style.padding = aSpacing[1] + "px"
                    button.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                    console.log(element.name);
                    if(element.name == "Ordinem") {
                        let buttonCreateElement_case = document.createElement('a')
                        let button_case = div.appendChild(buttonCreateElement_case)
                        button_case.textContent = "Lire l'étude de cas"
                        button_case.href = element.case
                        button_case.style.padding = aSpacing[1] + "px"
                    }
                    // Div



                        let rSaturationButton = 50
                        let rLightnessButton = 50
                        let rHueButton = 50
        
 /*                        div.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                        var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                        div.style.borderRadius = aBorder
                        div.style.padding = "15px"  */



                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }
export { project }
