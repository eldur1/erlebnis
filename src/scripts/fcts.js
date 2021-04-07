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


export { rN, trueOrFalse }