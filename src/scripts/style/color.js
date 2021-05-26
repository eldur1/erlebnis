import { getRealTime} from '../utils/fcts'


function colorChanging() {
    var time = getRealTime()
    // Every hours color is changing or 15 hue (at midnight, it's not 0 but 240 for a dark blue)
    function hueComputing() {
        let currentHue = ((time.hours+16)/24)*360
        var hue = currentHue >= 360 ? currentHue - 360 : currentHue
        return hue
    }
    // Saturation change between 50 and 80 in a minute
    function saturationComputing() {
        var saturation = 50 + time.minutes/2
        return saturation
    }
    // Lightness change between 60 and 30 every second
    function lightnessComputing() {
        var lightness = 60 - (time.seconds/2)
        return lightness
    }
    let hueComputed = hueComputing()
    let saturationComputed = saturationComputing()
    let lightnessComputed = lightnessComputing()

    var colorHSL = {
        hue: hueComputed,
        saturation: saturationComputed,
        lightness: lightnessComputed
    }
    return colorHSL
}
export { colorChanging }