import { rN } from 'fcts.js'
function contentGen() {
    var generativeElement = document.querySelectorAll('.generative-content')

    fetch('../assets/data/generative-content.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for(let i = 0; i < generativeElement.length; i++) {
            let element = generativeElement[i]
            if(element.classList.contains("hi")) {
                let eData = data.salutation
                element.innerHTML = eData[rN(0, eData.length-1)]
            } else 
            if(element.classList.contains("amount_designer")) {
                element.innerHTML = rN(10000,100000)
            } else 
            if(element.classList.contains("trying_to")) {
                let eData = data.tryingTo
                element.innerHTML = eData[rN(0, eData.length-1)]
            }
            if(element.classList.contains("js-btn-hero")) {
                let eData = data.ctaHero
                element.innerHTML = eData[rN(0, eData.length-1)]
            }
        } 
    })
    .catch((err) => {
        console.log(err);
    })


}

export { contentGen } 