"use strict"

import { font } from 'font.js'
import { contentGen } from 'content.js'
import { interactions } from 'interactions.js'
import { layout } from 'layout.js'
import { buttons } from 'buttons.js'
import { gradientbg } from 'gradient.js'

// Generation of the site
function generation() {
    font()
    //layout()
    contentGen()
    //interactions()
    buttons()
    gradientbg()

}

generation()


/*


Background color and object color must match
These two must match with CTA and span color

How to do it ?

- All colors needs to be generated at the same time and be convenient
- Text : black or white
- Background is light or black 
- The circle has a color close to bg but enought different
-  

*/

