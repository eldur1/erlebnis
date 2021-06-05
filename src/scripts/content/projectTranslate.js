// Project link
    import { paths, langNavigator } from './lang'
    export function projectTranslate() {
        fetch(paths[0])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Recover border, spacing
            var count = Object.keys(data).length
            var summary = document.querySelectorAll('.container-project__summary')
            var caseContent = document.querySelectorAll('.article__p')
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    summary[count-1].textContent = element.summary
                    count--;

                }
            }
        })
        .catch((err) => {
            console.log(err);
        })

        function buttonTranslate() {
            let button = document.querySelectorAll('.container-project__button')
            for (let i = 0; i < button.length; i++) {
                const element = button[i];
                if(element.classList.contains('container-project__button--website')) {
                    langNavigator.langCode == "en" ? element.textContent = "Go to..." : element.textContent = "Voir le site"
                } else {
                    langNavigator.langCode == "en" ? element.textContent = "Learn more..." : element.textContent = "En savoir plus"
                }

                
            }
        }
        buttonTranslate()
    }
