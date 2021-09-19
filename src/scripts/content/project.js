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


            function creation(component,container,options) {
                let current = document.createElement(component)
                container.appendChild(current)
                if(options) {
                    current.className = options.className
                    current.textContent = options.textContent
                    current.setAttribute('style', options.style)
                    current.src = options.src
                }
            }  

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
                    var title = creation('h3', div, {
                        className:"container-project__title",
                        textContent: element.name,
                        style: `font-size: ${aComputedRatio[3]* oFont.ratio}px; font-weight: bold; margin-bottom:64px`
                    })

                    let containerLineActivityCreateElement = document.createElement('div')
                    let containerLineActivity = div.appendChild(containerLineActivityCreateElement)
                    containerLineActivity.classList.add("container-project__category")

                    var line = creation('span', containerLineActivity, {
                        className:"icon icon--line",
                    })
                    var activity = creation('p', containerLineActivity, {
                        className:"container-project__category",
                        textContent: element.activity,
                        style: "display: inline-block;"
                    })

                    // Background and thumbnail container
                    let containerImgCreateElement = document.createElement('div')
                    let containerImg = div.appendChild(containerImgCreateElement)
                    containerImg.style.position = "relative"
                    containerImg.style.marginTop = "32px"

                    var thumbnailCreate = document.createElement('img')
                    var thumbnail = containerImg.appendChild(thumbnailCreate)
                    thumbnail.classList.add('container-project__thumb')
                    thumbnail.style.marginBottom = aSpacing[2] + "px"
                    thumbnail.src = element.src
                    thumbnail.alt = element.alt

                    var summary = creation('p', div, {
                        className: "container-project__summary",
                        textContent: element.summary,
                        style: `margin-top: ${aSpacing[3]}px; margin-bottom: ${aSpacing[3]}px; font-size: ${oFont.base}px; line-height:${oFont.lineHeight.p}`
                    })
                    var background = creation('div', containerImg, {
                        className: 'background--project',
                        style: `background-color: hsl(${colorHSL.hue},${colorHSL.saturation}%, ${colorHSL.lightness}%); padding: ${aSpacing[2]}px`,
                    })

                    let buttonCreateElement = document.createElement('a')
                    let button = div.appendChild(buttonCreateElement)
                    button.classList.add('container-project__button')
                    langNavigator.langCode == "en" ? button.textContent = "Learn more..." : button.textContent = "En savoir plus" 
                    button.target = "_blank"
                    button.rel = "noreferrer"
                    button.style.cursor = "pointer"
                    button.style.textShadow = "0px 0px 2px #000000";
                    button.style.marginRight = aSpacing[2] + "px"
                    button.style.padding = "12px"
                    button.style.backgroundColor = `hsl(${colorHSL.hue},${colorHSL.saturation}%, ${colorHSL.lightness}%)`
                    
                    //button.href = element.link
                    let button_websiteCreateElement = document.createElement('a')
                    let button_website = div.appendChild(button_websiteCreateElement)
                    button_website.classList.add('container-project__button', 'container-project__button--website')
                    button_website.href = element.link
                    button_website.target = "_blank"
                    button_website.rel = "noreferrer"
                    langNavigator.langCode == "en" ? button_website.textContent = "Go to..." : button_website.textContent = "Voir le site"
                    button_website.style.marginRight = aSpacing[2] + "px"
                    button_website.style.padding = "12px"

                    button.addEventListener('click', () => {
                        let main = document.querySelector('main')
                        let nav = document.querySelector('nav')
                        let projects = document.querySelectorAll('.container-project')
                        console.log(paths[0]);
                        fetch(paths[0])
                        .then((response) => {
                            return response.json()
                        })
                        .then((data) => {
                            const element2 = data[key];
                            
                            for (let i = 0; i < projects.length; i++) {
                                const element = projects[i];
                            }
                            gsap.to(main, {
                                autoAlpha:0,
                                duration:1,
                                display: "none"
                            })
                            gsap.to(nav, {
                                autoAlpha:0,
                                duration:1,
                                display: "none"
                            })
                            let currentBg = containerImg.children[1]
                            gsap.to(currentBg, {
                                height:"0px",
                                duration:0.7
                            })
                            let currentImg = containerImg.children[0]
                            gsap.to(currentImg, {
                                x:-100,
                                duration:0.7
                            })
                            let summaryy = div.children[3]
                            gsap.to(summaryy, {
                                x:-100,
                                duration:0.7
                            })
                            
                            let title = div.children[0]
                            gsap.to(title, {
                                y:-100,
                                opacity:0,
                                duration:0.3
                            })
                            let category = div.children[1]
                            gsap.to(category, {
                                opacity:0,
                                duration:0.2
                            })

                            let articleCreate = document.createElement('article')
                            let article = document.body.appendChild(articleCreate)
                            article.classList.add('article')
                            setTimeout(() => {
                                window.scrollTo(0,0)
                            }, 900);
                        
                            let title_article = creation('h3', article, {
                                className:"container-project__title",
                                style: `font-weight: bold; 
                                        margin-bottom: ${aSpacing[3]}px; 
                                        margin-top: ${aSpacing[3]}px; 
                                        font-size: ${aComputedRatio[3]* oFont.ratio}px`,
                                textContent: element2.name
                            })
    
                            let p1 = creation('p', article, {
                                className: 'base-font article__p',
                                style: `margin-bottom: ${aSpacing[3]}px;
                                        margin-top: ${aSpacing[3]}px; 
                                        font-size: ${oFont.base}px; 
                                        line-height: ${oFont.lineHeight.p};`,
                                textContent: element2.case_content.p
                            })
                            let img1 = creation('img', article, {
                                src: element2.case_content.img,
                                style: `margin-bottom: ${aSpacing[3]}px; margin-top: ${aSpacing[3]}px;`,
                                className: "article__img"
                            })
                            let p2 = creation('p', article, {
                                className: 'base-font article__p',
                                style: `margin-bottom: ${aSpacing[3]}px;
                                        margin-top: ${aSpacing[3]}px;
                                        font-size:${oFont.base}px; 
                                        line-height: ${oFont.lineHeight.p};`,
                                textContent: element2.case_content.p2
                            })
                            let img2 = creation('img', article, {
                                src: element2.case_content.img2,
                                style: `margin-bottom: ${aSpacing[3]}px; margin-top: ${aSpacing[3]}px;`,
                                className: "article__img"
                            })
                            let p3 = creation('p', article, {
                                className: 'base-font article__p',
                                style: `margin-bottom: ${aSpacing[3]}px;
                                        margin-top: ${aSpacing[3]}px; 
                                        font-size: ${oFont.base}px;
                                        line-height: ${oFont.lineHeight.p};`,
                                textContent: element2.case_content.p3
                            })
                            let img3 = creation('img', article, {
                                src: element.case_content.img3,
                                style: `margin-bottom: ${aSpacing[3]}px; margin-top: ${aSpacing[3]}px;`,
                                className: "article__img"
                            })
    
                            let buttonBackCreateElement = document.createElement('button')
                            let button_back = article.appendChild(buttonBackCreateElement)
                            button_back.textContent = "Back"
                            button_back.classList.add('article__button_back')
                            button_back.style.padding = aSpacing[1]+ "px"
                            button_back.style.backgroundColor = `hsl(${colorHSL.hue},${colorHSL.saturation}%, ${colorHSL.lightness}%)`
                            
                            gsap.to(button_back, { 
                                display:"block",
                                opacity:1,
                                delay:1
                            })
    
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
    
                                gsap.to(nav, {
                                    autoAlpha:1,
                                    duration:1
                                })
                                gsap.to(nav, {
                                    display: "flex",
                                    delay:1
                                })
    
                                gsap.to(article, {
                                    autoAlpha:0,
                                    duration:1
                                })
                                gsap.to(button_back, {
                                    autoAlpha:0,
                                    duration:1
                                })
                                let currentBg = containerImg.children[1]
                                if (window.matchMedia("(min-width: 600px)").matches) {
                                    gsap.to(currentBg, {
                                        height:"670px",
                                        duration:0.3
                                    })
                                  } else {
                                    gsap.to(currentBg, {
                                        height:"calc(100% - 82px)",
                                        duration:0.3
                                    })
                                  }

                                let currentImg = containerImg.children[0]
                                gsap.to(currentImg, {
                                    x:0,
                                    duration:0.3
                                })
                                let summaryy = div.children[3]
                                gsap.to(summaryy, {
                                    x:0,
                                    duration:0.3
                                })
                                
                                let title = div.children[0]
                                gsap.to(title, {
                                    y:0,
                                    opacity:1,
                                    duration:0.3
                                })
                                let category = div.children[1]
                                gsap.to(category, {
                                    opacity:1,
                                    duration:0.2
                                })

                                setTimeout(() => {
                                    article.remove()
                                    button_back.remove()
                                }, 1000);
    
                        })

                        
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
