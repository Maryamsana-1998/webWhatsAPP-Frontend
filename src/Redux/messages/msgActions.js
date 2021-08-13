import axios from 'axios';
import {
  FETCH_MSG_REQUEST,
  FETCH_MSG_SUCCESS,
  FETCH_MSG_FAILURE
} from './msgTypes'

export const fetchMsgs = (url) => {
  return (dispatch) => {
    dispatch(fetchMsgRequest())
    axios(url)
      .then(response => {
        // response.data is the users
        console.log('data fetched')
        const msgs = response.data
        dispatch(fetchMsgSuccess(msgs))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchMsgFailure(error.message))
      })
  }
}

export const fetchMsgRequest = () => {
  return {
    type: FETCH_MSG_REQUEST
  }
}

export const fetchMsgSuccess = msgs => {
  return {
    type: FETCH_MSG_SUCCESS,
    payload: msgs
  }
}

export const fetchMsgFailure = error => {
  return {
    type: FETCH_MSG_FAILURE,
    payload: error
  }
}