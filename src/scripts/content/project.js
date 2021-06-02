// Project link
    import { aSpacing } from '../style/spacing.js'
    import { aBorder } from '../style/border.js' 
    import { langNavigator, paths } from './lang'
    import { aFontFamily, aFontValues } from '../style/font' 
    import { getRealTime} from '../utils/fcts'
    import { colorChanging } from '../style/color'
    import { aComputedRatio } from '../style/font'
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
                    let categoryCreateElement = document.createElement('p')

                    const element = data[key];


                    let divCreateElement = document.createElement('div')
                    let div = container.appendChild(divCreateElement)
                    div.style.position = "relative"
                    div.style.marginBottom = aSpacing[3] + "px"
                    div.style.marginTop = aSpacing[3] + "px"


                    
                    let titleCreateElement = document.createElement('h3')
                    let title = div.appendChild(titleCreateElement)
                    let category = div.appendChild(categoryCreateElement)
                    
                    title.textContent = element.name
                    title.style.fontSize = aComputedRatio[3] + "px"
                    category.textContent = element.activity
                    category.style.marginBottom = aSpacing[3] + "px"

        
                    // Thumbnail
                    let thumbnailCreateElement = document.createElement('img') 
                    let thumbnail = div.appendChild(thumbnailCreateElement)
                    thumbnail.src = element.src
                    thumbnail.style.width = "100%"
                    thumbnail.style.marginBottom = aSpacing[2] + "px"

                    // Summary
                    let summaryCreateElement = document.createElement('p')
                    let summary = div.appendChild(summaryCreateElement)
                    summary.textContent = element.summary
                    summary.style.marginTop = aSpacing[3] + "px"
                    summary.style.marginBottom = aSpacing[3] + "px"

                    summary.classList.add('summary', 'base-font')

                    // Button 
                    
                    let buttonCreateElement = document.createElement('a')
                    let button = div.appendChild(buttonCreateElement)
                    if(langNavigator.langCode == "en") {
                        element.name == "Rethinking UX" ? button.textContent = "Read the case study" : button.textContent = "Go to..."
                    } else if(langNavigator.langCode == "fr" ){
                        element.name == "Rethinking UX" ? button.textContent = "Lire l'étude de cas" : button.textContent = "Consulter le site"
                    }
                    button.target = "_blank"
                    button.rel = "noreferrer"
                    button.style.marginRight = aSpacing[2] + "px"
                    button.style.padding = aSpacing[1] + "px"
                    button.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                    if(element.name == "Ordinem") {
                        let buttonCreateElement_case = document.createElement('a')
                        let button_case = div.appendChild(buttonCreateElement_case)
                       langNavigator.langCode == "en" ? button_case.textContent = "Read the case study" : button_case.textContent = "Lire l'étude de cas"
                        button_case.href = element.case
                        button_case.style.padding = aSpacing[1] + "px"
                    }
                    // Div
    
                    let backgroundCreateElement = document.createElement('div')
                    let background = div.appendChild(backgroundCreateElement)

                    background.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                    var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                    background.style.borderRadius = aBorder
                    background.style.padding = aSpacing[2]
                    background.classList.add('background--project')



                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }
export { project }
