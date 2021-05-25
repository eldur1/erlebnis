// This files will decide to show the website in french or english
import { content } from './content'
import { project } from './project'
import { isReload } from '../interactions'
import { projectTranslate } from './projectTranslate'  

export var paths = [
    'assets/data/en/projects.json',
    'assets/data/en/generative-content.json',
    'assets/data/en/weather.json' 
]

var langCode = navigator.language
export var langNavigator =  {
    langCode: langCode.substring(0,2)
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
            })


}

export { languages }

