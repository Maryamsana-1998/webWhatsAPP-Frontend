//import update from 'immutability-helper';

const initState ={
    selectedChat: 0,
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type ==='CHAT_OPEN'){  
        const newS = {selectedChat: action.id};
        return newS
    }

    return state;
  }
  
  export default rootReducer;

 