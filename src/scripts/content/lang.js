// This files will decide to show the website in french or english
import { content } from './content'
import { project } from './project'
import { isReload } from '../interactions'
import { projectTranslate } from './projectTranslate'  
import { themeSet } from '../style/theme'
export var paths = [
    'assets/data/en/projects.json',
    'assets/data/en/generative-content.json',
    'assets/data/en/weather.json' 
]

console.log("coucou");
if(localStorage.getItem('language') == undefined) { 
    var langCode = navigator.language
} else {
    var langCode = localStorage.getItem('language')
}
export var langNavigator =  {
    langCode: langCode.substring(0,2)
}
export function setLanguage() {
    // Set language 
    let lang_btn = document.querySelector('.js-lang')
    var lG = localStorage.getItem('language');
    if(lG == "fr") {
        lang_btn.textContent = "EN"
        langNavigator.langCode = "fr"
    } else if(lG == "fr"){
        console.log("Anglais comme langue détecté")
        lang_btn.textContent = "FR"
        langNavigator.langCode = "en"
    }
}

function languages() {
        // Change paths
        paths = [
            `assets/data/${langNavigator.langCode}/projects.json`,
            `assets/data/${langNavigator.langCode}/generative-content.json`,
            `assets/data/${langNavigator.langCode}/weather.json`,
            `assets/data/${langNavigator.langCode}/other.json`
            ]
            // Translate 'static' content 
            let dynamic_DOM = document.querySelectorAll('.dynamic')
            var aOther = []
            fetch(paths[3])
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                aOther.push(data.content)
                for (let i = 0; i < dynamic_DOM.length; i++) {
                    const elemente = dynamic_DOM[i];
                    elemente.textContent = aOther.[0][i]
                }
                if(isReload.state === true) { 
                    // Only translate
                    projectTranslate()
                    content()

                } else
                project()
                content()
                themeSet()
            })
}

export { languages }

