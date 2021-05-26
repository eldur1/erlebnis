"use strict"


// Style import
import { spacing } from './style/spacing'
import { border } from './style/border'
import { gradient } from './style/gradient'
import { font } from './style/font' 
import { darkMode, theme } from './style/theme'
import { buttons } from 'style/buttons'


// Content import
import { languages } from './content/lang'
// Interactions
import { interactions } from './interactions'





// Generation of the site
function generation() {
    
    //window.setInterval(getRealTime,1000)

    // Content generation
    languages()

    // Style
    spacing()
    border()
    buttons()
    //
    gradient()
    window.setInterval(gradient, 1000)
    font()
    darkMode()




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
