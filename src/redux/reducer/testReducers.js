const initialState = {
    results:[],
    data :[],
    isLoading: false,
    isError: false
}

// export default Test = (state=initialState,action)=>{

//     switch (action.type) {
//         case "GET_TEST_PENDING":
//             return { ...state, isLoading: true, data: action.payload }
//         case "GET_TEST_FULFILLED":
//             return { ...state, isLoading: false, data: action.payload.data }
//         case "GET_TEST_REJECTED":
//             return { ...state, isLoading: false, isError: true }  
    
//         default:
//           return state
//       }
// }
function testReducers(state = initialState, action) {
//   console.warn(action)
  switch (action.type) {

      case "GET_TEST_PENDING":
          return { ...state, isLoading: true }
      case "GET_TEST_FULFILLED":
          return { ...state, isLoading: false, data: action.payload.data }
      case "GET_TEST_REJECTED":
          return { ...state, isLoading: false, isError: true }


      default:
          return state
  }
}

export default testReducers
