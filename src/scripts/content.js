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
        var name = Object.keys(data)
        var count = Object.keys(data).length;
        for (let i = 0; i < count; i++) {

            let element = Object.keys(data)[i]
            let elementDOM = generativeElement[i]
            let eData = data[element];


            // Good morning if it's in the morning
            if(name[i] == 'hello') {
                
                var currentTime = new Date();
                var hours = currentTime.getHours();

                if(hours >= 5 && hours <= 12) {
                    var rContent = eData[0]
                } else if(hours >= 12 && hours <= 17 ){
                    var rContent = eData[1]
                } else if(hours > 17){
                    var rContent = eData[2]
                }

            } 
            else {
                var rContent = eData[rN(0, eData.length-1)]
            }
            elementDOM.innerHTML = rContent
            
            //Debug
            //console.log(eData);

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