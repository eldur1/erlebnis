"use strict"


// Style import
import { spacing } from './style/spacing'
import { border } from './style/border'
import { gradient } from './style/gradient'
import { font } from './style/font' 
import { darkMode, theme } from './style/theme.js'


// Content import
import { languages } from './content/lang'
// Interactions
import { interactions } from './interactions'





// Generation of the site
function generation() {
    
    console.log(navigator.geolocation)

    // Style
    spacing()
    border()
    gradient()
    font()
    darkMode()

    // Content generation
    languages()


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
