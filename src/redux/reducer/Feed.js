const initialState={
    data:{},
    results:[],
    isError:false,
    isLoading:false
}

export default Feed=(state=initialState,action)=>{
    switch(action.type){
        case 'ALL_FEED_PENDING':
            return {...state,isLoading:true,isError:false}
        case 'ALL_FEED_SUCCESS':
            return {...state,isLoading:false,results:action.payload.data}
        case 'ALL_FEED_FAILED':
            return {...state,isLoading:false,isError:true}
        default:
                return state;
    }

    
}

