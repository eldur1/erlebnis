"use strict"


// Style import
import { spacing } from './style/spacing'
import { font } from './style/font' 
import { buttons } from './style/buttons'

// Content import
import { languages } from './content/lang'
// Interactions
import { interactions } from './interactions'
import { gradient } from './style/gradient'





// Generation of the site
function generation() {
    // Content generation

    font()
    languages()
    gradient()
    // Style
    spacing()
    //border()
    buttons()
    // Color refresh
/*     window.setInterval(colorChanging, 1000)
    window.setInterval(gradient, 1000)
    window.setInterval(buttons, 1000) */



    // Interactions
    interactions()

}

generation()



// Debug

// Spacing values
//import { aSpacing } from 'style/spacing'

// Border values
//import { aBorder } from 'style/border'

// Colors values
//import { colors } from 'style/spacing'
