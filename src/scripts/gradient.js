import { choosenPallet } from 'pallet.js'
import { rN } from 'fcts.js'
import gsap  from "gsap"
function gradientbg() {
    // Set up background
    let background = document.createElement('div')
    document.body.appendChild(background)
    background.classList.add('background')

    let aPallet = choosenPallet[1]
    let rColor = aPallet[0, rN(0, aPallet.length-1)]
    background.style.backgroundColor = aPallet[1]

    // movable object

    let object = document.createElement('div')
    document.body.appendChild(object)
    let rSize = rN(200, 500)
    object.style.width = rSize + "px"
    object.style.height = rSize + "px"
    object.style.zIndex = -2
    object.style.position = "absolute"
    object.style.borderRadius = rSize + "px"
    object.style.webkitFilter = "blur(" + rSize/2 + "px" + ")"
    object.style.backgroundColor = aPallet[2]
    let centerObject = rSize/2
    console.log(centerObject);
    document.addEventListener('mousemove', (event) => {
        event.clientX 
        gsap.to(object, {
            x:event.clientX-centerObject,
            y:event.clientY-centerObject
        })
    });
}
export { gradientbg }