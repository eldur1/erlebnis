import { rN } from 'fcts.js'
import { parse } from 'postcss';
function contentGen() {
    var generativeElement = document.querySelectorAll('.generative-content')

    fetch('../assets/data/generative-content.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        var count = Object.keys(data).length;
        console.log(count);
        for (let i = 0; i < count; i++) {
            let element = Object.keys(data)[i]
            let elementDOM = generativeElement[i]
            let eData = data[element];
            console.log(eData);
            let rContent = eData[rN(0, eData.length-1)]
            elementDOM.innerHTML = rContent
        }
    })
    .catch((err) => {
        console.log(err);
    })


}

export { contentGen } 