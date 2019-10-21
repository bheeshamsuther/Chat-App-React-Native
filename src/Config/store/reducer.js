let Initial_State = {
    user : "",
    Alluser: [],
    chat : []
}


let reducer = (state= Initial_State, action)=> {
    console.log(action)
switch( action.type) {
case "current" :
return {
...state, user: action.payload
}
case 'Addproduct' :
return {
state

}
default : 
return {
state
}
}
}

export default reducer