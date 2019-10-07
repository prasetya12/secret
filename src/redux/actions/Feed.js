import axios from 'axios'
import qs from 'qs'
import API from '../../constant/constant'


export const allFeed = (data)=>{
    return {
        type:'ALL_FEED',
        payload:axios({
            method:'POST',
            url:`${API}/items.get.inc.php`,
            data:qs(data)
        })
    }
}


// export function allFeed(data){
//     return{
//         type:'ALL_FEED',
//         payload:axios({
//             url:`${API}/items.get.inc.php`,
//             method:'POST',
//             data:data
//         })
//     }
// }

// export const allFeed=(data)=>{
//     return dispatch=>{
//         dispatch(allFeedPending());

//         axios.post(`${API}/items.get.inc.php`, qs.stringify(data)).then(response =>{
//             dispatch(allFeedSuccess(response.data.items));
//             // const listData = this.state.data
//             // const data = listData.concat(response.data.items)
//             // this.setState({
//             //       data:data,
//             //       itemId:response.data.itemId,
//             //       refreshing: false
//             //   })
//             }).catch(error=>{
//                 dispatch(allFeedFailed(error.message));
//             })
//     }
// }

// const allFeedPending = ()=>({
//     type:'ALL_FEED_PENDING'
// })

// const allFeedSuccess=data=>({
//     type:'ALL_FEED_SUCCESS',
//     payload:{
//         ...data
//     }
// })

// const allFeedFailed=error=>({
//     type:'ALL_FEED_FAILED',
//     payload:{
//         error
//     }
// })