
var theme_btn = document.querySelector('.js-dark-mode')
import { content } from '../content/content'
import { langNavigator } from '../content/lang'
import { classSwitch } from '../interactions'

export function themeSet() {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(userPrefersDark) {
    localStorage.setItem('theme', 'dark')
    var contentTheme = langNavigator.langCode == "en" ? "Light mode" : "Mode clair"
  } else {
    localStorage.setItem('theme', 'light')
    var contentTheme = langNavigator.langCode == "en" ? "Dark mode" : "Mode sombre"
  }
  console.log(localStorage.getItem('theme'));
  theme_btn.textContent = contentTheme    
}
export function themeSwitch() {
  if(localStorage.getItem('theme') == "light" ) {
      var contentTheme = langNavigator.langCode == "en" ? "Light mode" : "Mode clair"
  } 
  else if(localStorage.getItem('theme') == "dark") {
      var contentTheme = langNavigator.langCode == "en" ? "Dark mode" : "Mode sombre"
  }
  console.log(contentTheme);
  theme_btn.textContent = contentTheme
}
