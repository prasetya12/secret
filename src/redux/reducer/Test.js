const initialState = {
    data :[]
}

export default Test = (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_TEST_PENDING':
          return {...state}
        case 'GET_TEST_FULFILLED':
          return {...state, data : action.payload.data}
    
        default:
          return state
      }
}