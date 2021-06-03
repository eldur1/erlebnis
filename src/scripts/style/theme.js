
var theme_btn = document.querySelector('.js-dark-mode')
import { hello } from '../content/hello'
import { langNavigator } from '../content/lang'


export function classSwitch() {
  document.body.classList.toggle('theme--light')

  let footer = document.querySelector('footer')
  footer.classList.toggle('theme--light')

  let section_projet = document.querySelector('.section__projects')
  section_projet.classList.toggle('theme--light')

  let aDOM = document.querySelectorAll('.button--case-study')
  for (let i = 0; i < aDOM.length; i++) {
      const element = aDOM[i];
      console.log(element);
      element.classList.toggle('theme--light')
      
  }

  let icon_DOM = document.querySelectorAll('.icon')
  for (let i = 0; i < icon_DOM.length; i++) {
      const element = icon_DOM[i];
      element.classList.toggle('theme--light')
      
  }
  let nav = document.querySelector('nav')
  nav.classList.toggle('theme--light')
}

// Set theme at loading
// If there's no preference of color scheme, check color scheme prefs
if(localStorage.getItem('theme') == undefined) {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(userPrefersDark) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
    classSwitch()

  }
// Display theme of local storage
} else {
  if(localStorage.getItem('theme') == "light") {
    // If dark theme
    classSwitch()
  } else {

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
