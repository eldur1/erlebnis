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
    layout()
    contentGen()
    interactions()
    buttons()
    gradientbg()
}

generation()



