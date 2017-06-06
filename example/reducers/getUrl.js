import { DATA } from '../action/showData'

// export function getUrl(state = '', action) {
//     switch(action.type) {
//         case 'SHOWREACTJS':
//             return action.url
//         case 'SHOWFRONTEND':
//             return action.url
//         default:
//             return state
//     }
// }

export function getData(state={source:[],url:''},action) {
    if(action.type=='DATA') {
        return {
            source:action.source,
            url:action.url
        }
    }else{
        return state
    }
}
