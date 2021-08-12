const initState ={
    selectedChat: 0,
    settings : false
}

const displayReducer = (state = initState, action) => {
    console.log(action)
    if (action.type ==='CHAT_OPEN'){  
        const newS = {...state,selectedChat: action.id};
        return newS
    }

    if(action.type ==='DISPLAY_SETTINGS'){
        const newS = {...state,settings : action.value};
        return newS
    }

    return state;
  }
  
  export default displayReducer;