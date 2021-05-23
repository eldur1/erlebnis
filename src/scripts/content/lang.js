// This files will decide to show the website in french or english
import { content } from './content'
import { buttons } from './buttons'
import { project } from './project'
import { weather_id } from './weather'


export var paths = [
    'assets/data/en/projects.json',
    'assets/data/en/generative-content.json',
    'assets/data/en/weather.json' 
]


function languages() {
    let langCode = navigator.language
    let lang = langCode.substring(0,2)
    if(lang === 'fr') {
       // Change paths
        paths = [
        'assets/data/fr/projects.json',
        'assets/data/fr/generative-content.json',
        'assets/data/fr/weather.json' 
        ]
   } else {

   }
   content()
   buttons()
   project()
   //weather_id()

}

export { languages }

