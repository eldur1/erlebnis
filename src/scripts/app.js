"use strict"

let content = document.querySelector('.content')

//import { rN, trueOrFalse } from 'fcts.js'
//import { choosenPallet } from 'pallet.js'

import { rN } from 'fcts.js'
import { aColor } from 'color.js'
import { font } from 'font.js'
import { contentGen } from 'content.js'
import { interactions } from 'interactions.js'
import { layout } from 'layout.js'
import { buttons } from 'buttons.js'

// Generation of the site
function generation() {
    font()
    layout()
    contentGen()
    interactions()
    buttons()
}

let bg = document.querySelector('.background');

generation()



let spanColor = document.querySelectorAll('.color--primary')

for (let i = 0; i < spanColor.length; i++) {
    let element = spanColor[i]
    //console.log(element);
    element.style.color = aColor[0]
}
bg.style.backgroundColor = aColor[3]
