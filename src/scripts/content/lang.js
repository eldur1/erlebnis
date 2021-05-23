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




    // Change path of dynamic content
    let langCode = navigator.language
    let lang = langCode.substring(0,2)
    if(lang === 'fr') {
       // Change paths
        paths = [
        'assets/data/fr/projects.json',
        'assets/data/fr/generative-content.json',
        'assets/data/fr/weather.json',
        'assets/data/fr/other.json'
        ]
        // Change 'static' content in french
        let dynamic_DOM = document.querySelectorAll('.dynamic')
        var aOther = []
        fetch(paths[3])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            aOther.push(data.content)
            for (let i = 0; i < dynamic_DOM.length; i++) {
                const element = dynamic_DOM[i];
                //console.log(aOther.[0][i]);
                element.textContent = aOther.[0][i]
            }
        })
     






   } else {

   }
   content()
   buttons()
   project()
   //weather_id()

}

export { languages }

