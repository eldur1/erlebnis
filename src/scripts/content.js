import { rN } from 'fcts.js'
function contentGen() {
    var generativeElement = document.querySelectorAll('.generative-content')

    // Replace ./data.json with your JSON feed
    fetch('../assets/data/generative-content.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here


        for(let i = 0; i < generativeElement.length+1; i++) {
            let element = generativeElement[i]

            if(element.classList.contains("hi")) {
                let eData = data.salutation
                element.innerHTML = eData[rN(0, eData.length)]
            } else 
            if(element.classList.contains("amount_designer")) {
                element.innerHTML = rN(10000,100000)
            } else 
            if(element.classList.contains("trying_to")) {
                let eData = data.tryingTo
                element.innerHTML = eData[rN(0, eData.length)]
            }
            if(element.classList.contains("cta_hero")) {
                let eData = data.ctaHero
                element.innerHTML = eData[rN(0, eData.length)]
            }
        } 
    })
    .catch((err) => {
        // Do something for an error here
    })

}

export { contentGen } 