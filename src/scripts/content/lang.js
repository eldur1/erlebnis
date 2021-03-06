// This files will decide to show the website in french or english
import { hello } from './hello'
import { project } from './project'
import { isReload } from '../interactions'
import { projectTranslate } from './projectTranslate'  
import { themeSet } from '../style/theme'
import { weather_id } from '../deprecated/weather'
export var paths = [
    'assets/data/en/projects.json',
    'assets/data/en/generative-content.json',
    'assets/data/en/weather.json',
    'assets/data/en/other.json' 

]
var lang_btn = document.querySelector('.js-lang')

if(localStorage.getItem('language') == undefined) { 
    var langCode = navigator.language
    let tmpLG = langCode.substring(0,2)
    localStorage.setItem('language', tmpLG)
} else {
    var langCode = localStorage.getItem('language')
    if(langCode == "fr") {
        lang_btn.textContent = "EN"
    } else {
        lang_btn.textContent = "FR"
    }
}


export var langNavigator =  {
    langCode: langCode.substring(0,2)
}
export function setLanguage() {
    // Set language 
    var lG = localStorage.getItem('language');
    if(lG == "fr") {
        lang_btn.textContent = "EN"
    } else if(lG == "fr"){
        console.log("Anglais comme langue détecté")
        lang_btn.textContent = "FR"
    }
}

function languages() {
        // Change paths
        let currentLanguage = langNavigator.langCode
        paths = [
            `assets/data/${currentLanguage}/projects.json`,
            `assets/data/${currentLanguage}/generative-content.json`,
            `assets/data/${currentLanguage}/weather.json`,
            `assets/data/${currentLanguage}/other.json`
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
                    hello()

                } else
                project()
                hello()
                setLanguage()
            })
}

export { languages }

