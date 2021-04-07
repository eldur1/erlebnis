"use strict"

let content = document.querySelector('.content')
var aColor = color()

//import { rN, trueOrFalse } from 'fcts.js'
//import { choosenPallet } from 'pallet.js'

import { color } from 'color.js'
import { font } from 'font.js'
import { contentGen } from 'content.js'
import { interactions } from 'interactions.js'
import { layout } from 'layout.js'
import { buttons } from 'buttons.js'

// Generation of the site
function generation() {
    color()
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