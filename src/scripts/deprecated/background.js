import { rN } from 'fcts.js'
import gsap from 'gsap/gsap-core';



let windowWidth = window.innerWidth
let windowHeight = window.innerHeight


// DOM
let background = document.querySelector('.color-bg')

let rSquareNumber = 7
let rBlur = 100
var rHue = rN(0,360)

for (let i = 0; i < rSquareNumber; i++) {
    let iHeight = Math.ceil(window.innerHeight / (window.innerWidth / rSquareNumber))
    var rSaturation = rN(60,65)
    var rLightness = rN(50,50)

    for (let i = 0; i < iHeight ; i++) {
        // Choisir un hue et générer un chiffre 
        var delta = 0
        var rHue2 = rN(0,360)
        do {
            rHue2 = rN(0,360)
            let highestHue = Math.max(rHue, rHue2)
            let minHue = Math.min(rHue, rHue2)
            delta = highestHue - minHue
        } while(delta > 100)
        console.log(rHue);
        console.log(rHue2);
        let square = document.createElement('div')
        let squareDOM = background.appendChild(square)
        let widthSquare = window.innerWidth / rSquareNumber + "px"
        squareDOM.style.width = widthSquare
        squareDOM.style.height = widthSquare
        squareDOM.style.display = "inline-block"
        squareDOM.style.filter = "blur(" + rBlur + "px"
        squareDOM.classList.add('squareColor')
        squareDOM.style.backgroundColor = "hsl(" + rHue2 + "," + rSaturation + "%," + rLightness + "%)"
    }
}
