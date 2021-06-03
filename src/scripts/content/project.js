// Project link
    import { aSpacing } from '../style/spacing.js'
    import { aBorder } from '../style/border.js' 
    import { langNavigator, paths } from './lang'
    import { aFontFamily, aFontValues } from '../style/font' 
    import { getRealTime} from '../utils/fcts'
    import { colorChanging } from '../style/color'
    import { aComputedRatio } from '../style/font'
    import { rN } from '../utils/fcts'
    import { gsap } from 'gsap/gsap-core'
    function project() {
        fetch(paths[0])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var count = Object.keys(data).length;
            // For each project, create element
            let container = document.querySelector('.work')
            // Hue and Lightness are defined outside the loop the get the same value for every element

            // Get current font
            let time = getRealTime()
            let currentFont = aFontFamily[5]
            var oFont = aFontValues.[currentFont]
            var colorHSL = colorChanging()
    
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    
                    const element = data[key];


                    let innerCreateElement = document.createElement('div')
                    let inner = container.appendChild(innerCreateElement)
                    inner.classList.add('innerContainer')
                    
                    let divCreateElement = document.createElement('div')
                    let div = inner.appendChild(divCreateElement)
                    div.classList.add('container-project', 'js-scroll')
                    div.style.position = "relative"
                    div.style.marginBottom = aSpacing[5] + "px"
                    div.style.marginTop = aSpacing[3] + "px"


                    function creation(component,container,options) {
                        let current = document.createElement(component)
                        container.appendChild(current)
                        if(options) {
                            current.className = options.className
                            current.textContent = options.textContent
                            current.setAttribute('style', options.style)
                        }
                    }  
                    var title = creation('h3', div, {
                        className:"container-project__title",
                        textContent: element.name,
                        style: `font-size: ${aComputedRatio[3]* oFont.ratio}px`
                    })
                    var containerLineActivity = creation('div', div, {
                        className:"container-project__category",
                    })
                    console.log(containerLineActivity);
/*                     var line = creation('span', containerLineActivity, {
                        className:"icon icon--line",
                    })
                    var activity = creation('p', containerLineActivity, {
                        className:"container-project__category",
                        textContent: element.activity,
                        style: `margin-bottom: ${aSpacing[3]}px`
                    }) */

/*                 
                    // line 
                    let lineCreateElement = document.createElement('span')
                    let line = containerActivity.appendChild(lineCreateElement)
                    line.classList.add('icon', 'icon--line')

                    // Activity
                    let categoryCreateElement = document.createElement('p')
                    let category = containerActivity.appendChild(categoryCreateElement)
                    category.textContent = element.activity
                    category.style.marginBottom = aSpacing[3] + "px"
                     */
                    // Background and thumbnail container
                    let containerImgCreateElement = document.createElement('div')
                    let containerImg = div.appendChild(containerImgCreateElement)
                    containerImg.style.position = "relative"
                    containerImg.style.marginTop = "32px"

                    // Thumbnail
                    let thumbnailCreateElement = document.createElement('img') 
                    let thumbnail = containerImg.appendChild(thumbnailCreateElement)
                    thumbnail.classList.add('container-project__thumb')
                    thumbnail.src = element.src
                    thumbnail.style.marginBottom = aSpacing[2] + "px"

                    // Summary
                    let summaryCreateElement = document.createElement('p')
                    let summary = div.appendChild(summaryCreateElement)
                    summary.classList.add('container-project__summary')
                    summary.textContent = element.summary
                    summary.style.marginTop = aSpacing[3] + "px"
                    summary.style.marginBottom = aSpacing[3] + "px"
                    summary.style.fontSize = oFont.base + "px"
                    summary.style.lineHeight = oFont.lineHeight.p
                    
                    
                    // Button 
                    
                    let buttonCreateElement = document.createElement('a')
                    let button = div.appendChild(buttonCreateElement)
                    button.classList.add('container-project__button')

                    if(langNavigator.langCode == "en") {
                        element.name == "Rethinking UX" ? button.textContent = "Read the case study" : button.textContent = "Go to..."
                    } else if(langNavigator.langCode == "fr" ){
                        element.name == "Rethinking UX" ? button.textContent = "Lire l'étude de cas" : button.textContent = "Consulter le site"
                    }
                    button.target = "_blank"
                    button.rel = "noreferrer"
                    //button.href = element.link
                    button.style.marginRight = aSpacing[2] + "px"
                    button.style.padding = aSpacing[1] + "px"
                    button.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                    if(element.name == "Ordinem") {
                        let buttonCreateElement_case = document.createElement('a')
                        let button_case = div.appendChild(buttonCreateElement_case)
                        button_case.classList.add('button--case-study')
                        langNavigator.langCode == "en" ? button_case.textContent = "Read the case study" : button_case.textContent = "Lire l'étude de cas"
                        button_case.target = "_blank"
                        button_case.rel = "noreferrer"
                        button_case.href = element.case
                    }


                    // background
                    let backgroundCreateElement = document.createElement('div')
                    let background = containerImg.appendChild(backgroundCreateElement)
                    background.classList.add('background--project')

                    background.style.backgroundColor = "hsl(" + colorHSL.hue + "," + colorHSL.saturation + "%," + colorHSL.lightness + "%)"
                    var padding = aSpacing[1] + "px " + aSpacing[2] + "px "
                    background.style.borderRadius = aBorder
                    background.style.padding = aSpacing[2]

                    let main = document.querySelector('main')
                    let tlArticle = gsap.timeline({ duration:1})
                    


                    button.addEventListener('click', () => {
                        
                        let projects = document.querySelectorAll('.container-project')
                        for (let i = 0; i < projects.length; i++) {
                            const element = projects[i];
                            //tlArticle.resume()
                        }
                        gsap.to(main, {
                            autoAlpha:0,
                            display: "none"
                        })

                        let articleCreateElement = document.createElement('article')
                        let article = document.body.appendChild(articleCreateElement)

                        let button_backCreateElement = document.createElement('button')
                        let button_back = article.appendChild(button_backCreateElement)
                        button_back.textContent = "back"

                        let title_article = document.createElement('h3')
/*                         title_article
                        article.appendChild() */
                        button_back.addEventListener('click', () => {
                            for (let i = 0; i < projects.length; i++) {
                                const element = projects[i];
                            }
                            gsap.to(main, {
                                autoAlpha:1,
                                duration:1
                            })
                            gsap.to(main, {
                                display: "block",
                                delay:1
                            })

                            article.remove()
                            button_back.remove()
                        })
                    })
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }

function projectInteractions() {

}
export { project }
