import { rN } from '../utils/fcts.js'
import { paths } from './lang'
import { langNavigator } from '../content/lang'
export var rPicture = rN(1,6)

function hello() {
    var helloDOM = document.querySelector('.hello')


    if(langNavigator.langCode == "en") {
        var aHello = [
            "Good morning",
            "Good Afternoon",
            "Good Evening"
        ]
    } else {
        var aHello = [
            "Bonjour",
            "Bonne après-midi",
            "Bonne soirée"
        ]
    }
    // Good morning if it's in the morning
    var currentTime = new Date();
    var hours = currentTime.getHours();

    if(hours >= 5 && hours <= 12) {
        var hello = aHello[0]
    } else if(hours >= 12 && hours <= 17 ){
        var hello = aHello[1]
    } else if(hours > 17){
        var hello = aHello[2]
    }


    helloDOM.textContent = hello
    
    //Debug
    //console.log(eData);

}

export { hello } 