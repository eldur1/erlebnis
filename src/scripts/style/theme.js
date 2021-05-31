
var theme_btn = document.querySelector('.js-dark-mode')
import { hello } from '../content/hello'
import { langNavigator } from '../content/lang'
import { classSwitch } from '../interactions'




// Set theme at loading
// If there's no preference of color scheme, check color scheme prefs
if(localStorage.getItem('theme') == undefined) {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(userPrefersDark) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
// Display theme of local storage
} else {
  if(localStorage.getItem('theme') == "light") {
    classSwitch()
    // If dark theme
  }
}



export function themeSwitch() {

  if(localStorage.getItem('theme') == "light" ) {
    localStorage.setItem('theme', 'dark')
  } 
  else if(localStorage.getItem('theme') == "dark") {
    localStorage.setItem('theme', 'light')
  }

}
