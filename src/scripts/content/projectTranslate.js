// Project link
    import { paths } from './lang'
    import { isReload } from '../interactions'
    function projectTranslate() {
        fetch(paths[0])
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Recover border, spacing
            var count = Object.keys(data).length
            var summary = document.querySelectorAll('.summary')
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
    
                    const element = data[key];
                    summary[count-1].textContent = element.summary
                    count--;
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }
export { projectTranslate }
