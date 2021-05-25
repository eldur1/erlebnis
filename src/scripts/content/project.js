// Project link
    import { aSpacing } from '../style/spacing.js'
    import { aBorder } from '../style/border.js' 
    import { rN } from '../fcts.js'
    import { rSaturation, rLightness, aHue } from '../style/gradient.js'
    import { paths } from './lang'
    
    function project() {
        fetch(paths[0])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Recover border, spacing
            var count = Object.keys(data).length;
            console.log(count);
            // For each project, create element
            let container = document.querySelector('.work')
            // Hue and Lightness are defined outside the loop the get the same value for every element
    
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    let divCreateElement = document.createElement('div')
                    let aCreateElement = document.createElement('a')
                    let summaryCreateElement = document.createElement('p')
                    let thumbnailCreateElement = document.createElement('img') 
    
                    const element = data[key];
                    let div = container.appendChild(divCreateElement)
                    let link = div.appendChild(aCreateElement)
                    let summary = div.appendChild(summaryCreateElement)
                    let thumbnail = div.appendChild(thumbnailCreateElement)
    

                        // Link
                        link.textContent = element.name
                        link.href = element.more +".html"
                        //link.target = "_blank"
                        link.rel = "noreferrer"
                        link.style.color = "black"
                        
        
                        // Thumbnail
                        thumbnail.src = element.src
                        thumbnail.style.width = "100px"

                        // Summary

                        summary.style.color = "black"
                        summary.textContent = element.summary
                        summary.style.fontSize = "13px"
                        summary.style.marginTop = aSpacing[2] + "px"
                        summary.classList.add('summary')
                        
                        // Div
                        div.style.fontSize = "22px"
                        div.classList.add('button', 'button--project', 'p' )
        
                        let rSaturationButton = rN(rSaturation[0][0], rSaturation[0][1])
                        let rLightnessButton = rN(rLightness[0][0], rLightness[0][1])+25
                        let rHueButton = rN(aHue[0][0], aHue[0][1])
        
                        //console.log("hsl(" + closeColor(aHue[0][0], 30) + "," + closeColor(rSaturation[0], 10) + "%," + closeColor(rLightness[0], 30) + "%)");
                        div.style.backgroundColor = "hsl(" + rHueButton + "," + rSaturationButton + "%," + rLightnessButton + "%)"
                        var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                        div.style.borderRadius = aBorder
                        div.style.padding = padding 



                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }
export { project }
