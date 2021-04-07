import { rN } from 'fcts.js'
function layoutGeneration() {
    let content = document.querySelector('.content')
    let rMargin = rN(8, 24) + "px"
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

      }else{
        let contentWidth = rN(40,60) + "%"
        content.style.width = contentWidth
        content.classList.add("center")
      }

    document.body.style.margin = rMargin

}
export {layoutGeneration as layout}