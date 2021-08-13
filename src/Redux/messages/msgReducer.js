import {
    FETCH_MSG_REQUEST,
    FETCH_MSG_SUCCESS,
    FETCH_MSG_FAILURE
  } from './msgTypes'
  
  const initialState = {
    loading: false,
    msg: [],
    error: ''
  }
  
  const msgReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case FETCH_MSG_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_MSG_SUCCESS:
        return {
          loading: false,
          msg: action.payload,
          error: ''
        }
      case FETCH_MSG_FAILURE:
        return {
          loading: false,
          msg: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default msgReducer;