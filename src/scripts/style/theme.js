
var theme_btn = document.querySelector('.js-dark-mode')
import { content } from '../content/content'
import { langNavigator } from '../content/lang'
import { classSwitch } from '../interactions'




// Set theme at loading
// If there's no preference of color scheme, check color scheme prefs
if(localStorage.getItem('theme') == undefined) {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(userPrefersDark) {
    localStorage.setItem('theme', 'dark')
    var contentTheme = langNavigator.langCode == "en" ? "Light mode" : "Mode clair"
  } else {
    localStorage.setItem('theme', 'light')
    var contentTheme = langNavigator.langCode == "en" ? "Dark mode" : "Mode sombre"
  }
// Display theme of local storage
} else {
  if(localStorage.getItem('theme') == "light") {
    var contentTheme = langNavigator.langCode == "en" ? "Dark mode" : "Mode sombre"
    classSwitch()
    // If dark theme
  } else if(localStorage.getItem('theme') == "dark"){
    var contentTheme = langNavigator.langCode == "en" ? "Light mode" : "Mode clair"
  }
}

theme_btn.textContent = contentTheme    



export function themeSwitch() {

  if(localStorage.getItem('theme') == "light" ) {
    var contentTheme = langNavigator.langCode == "en" ? "Light mode" : "Mode clair"
    localStorage.setItem('theme', 'dark')
  } 
  else if(localStorage.getItem('theme') == "dark") {
    var contentTheme = langNavigator.langCode == "en" ? "Dark mode" : "Mode sombre"
    localStorage.setItem('theme', 'light')
  }
  theme_btn.textContent = contentTheme

}
