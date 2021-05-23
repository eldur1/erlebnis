"use strict"


// Style import
import { spacing } from './style/spacing.js'
import { border } from './style/border.js'
import { gradient } from './style/gradient.js'
import { font } from './style/font.js' 


// Content import
import { content } from './content/content.js'
import { buttons } from './content/buttons.js'
import { project } from './content/project.js'

// Debug

// Spacing values
//import { aSpacing } from 'style/spacing.js'

// Border values
//import { aBorder } from 'style/border.js'


// Colors values
//import { colors } from 'style/spacing.js'


// Generation of the site
function generation() {
    // Style
    spacing()
    border()
    gradient()
    font()
    // Content generation
    content()
    buttons()
    project()



}

generation()

