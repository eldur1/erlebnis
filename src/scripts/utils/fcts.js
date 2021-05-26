
function getRealTime() {
    var oTime = {
        hours: new Date().getHours(),
        days: new Date().getDay(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    }
    return oTime
}

// True or false 
function trueOrFalse() {
    let i = 0.5
    while( i == 0.5 ) { i = Math.random() }
    if( i > 0.5 ) { return true } 
    else { return false }
}
// random number between a determined min and max
function rN(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function deltaGeneration(rDeltaMin, rDeltaMax, maxDelta ) {
    var delta = 0
    // Get hue enought different than the first one
    do {
        var rDelta = [rN(rDeltaMin, rDeltaMax), rN(rDeltaMin, rDeltaMax)]
        var delta = Math.max(...rDelta) - Math.min(...rDelta)
    }
    while(delta < maxDelta )
    return rDelta
}

function closeColor(value, delta) {
    if(rN(0,1) == 0) {
        return rN(value, value+delta)
    }
    else {
        return rN(value-delta,value)
    }
}
export { rN, trueOrFalse, deltaGeneration, closeColor, getRealTime }