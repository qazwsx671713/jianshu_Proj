const defaultState = {
    focus:false,
    hot_title_list:['理财','毕业','手账','简书交友','spring','古风','故事','旅行','连载']
    
}
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