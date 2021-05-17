import { rN } from 'fcts.js'
import { parse } from 'postcss';

export var rPicture = rN(1,6)

function contentGen() {
    var generativeElement = document.querySelectorAll('.generative-content')

    fetch('assets/data/generative-content.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        var count = Object.keys(data).length;
        for (let i = 0; i < count; i++) {
            let element = Object.keys(data)[i]
            let elementDOM = generativeElement[i]
            let eData = data[element];
            //console.log(eData);
            let rContent = eData[rN(0, eData.length-1)]
            elementDOM.innerHTML = rContent
        }
    })
    .catch((err) => {
        console.log(err);
    })


    // Dynamic picture

    let profilePicture = document.querySelector('.avatar')


    profilePicture.src = 'assets/images/avatar_' + rPicture + ".jpeg"

}

export { contentGen } 