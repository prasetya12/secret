import axios from 'axios'

// export const GET_TEST = ()=>{
//     return{
//         type:'GET_TEST',
//         payload:Axios({
//             method:'GET',
//             url: 'https://jsonplaceholder.typicode.com/todos/1'
//         })
//     }
// }

export function GET_TEST() {
    return {
        type: "GET_TEST",
        payload: axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
}
