import { rN } from 'fcts.js'
function contentGen() {
    var generativeElement = document.querySelectorAll('.generative-content')
    var aHello = [
        "Hello",
        "Hi",
        "Salut",
        "Hallo",
        "Hola",
        "Konnichiwa",
        "Guten Tag",
        "Olá",
        "Goddag",
        "Goedendag",
        "Namaste",
    ]

    var aTryingTo = [
        "impress his futur employee",
        "feel existing",
        "prove himself he can also do great design",
        "escape from impostor syndrome",
        "have the love he never had from his parents",
        "make a living from his passion",
        ]

    for(let i = 0; i < generativeElement.length; i++) {
        let currentElement = generativeElement[i]
        if(currentElement.classList.contains("hi")) {
            currentElement.innerHTML = aHello[rN(0, aHello.length-1)]
        } else 
        if(currentElement.classList.contains("amount_designer")) {
            currentElement.innerHTML = rN(10000,100000)
        } else 
        if(currentElement.classList.contains("trying_to")) {
            currentElement.innerHTML = aTryingTo[rN(0, aTryingTo.length-1)]
        }
    } 
}

export { contentGen } 