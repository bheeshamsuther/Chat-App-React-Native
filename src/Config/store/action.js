let currentuser = (payload)=> {
return {
    type: "current" ,
    payload : payload
}
}

export {currentuser}