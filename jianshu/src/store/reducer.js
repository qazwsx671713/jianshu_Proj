const defaultState = {focus:false}
export default  (state=defaultState,action)=>{
    const {type,data} = action
    switch(type){
        case 'change-focue':
            return {
                ...state,
                focus:data
            }
        default:
            return defaultState
    }
}