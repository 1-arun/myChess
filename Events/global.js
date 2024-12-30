import { ROOT_DIV } from "../Helper/constant.js";
import { globalState } from "../index.js";
function globalEvent() {
    ROOT_DIV.addEventListener('click', function (e) {
        if(e.target.localName == 'img') {
            const userClick = e.target.parentNode.id;
            const flatArray = globalState.flat()
            
        }
    })

}
export {globalEvent}