const defaultState = {
    focus:false,
    hot_title_list:[],
    mouse_in_hot_list:false,
    now_page : 1,
    all_page : 0
    
}
export default  (state=defaultState,action)=>{
    const {type,data} = action
    switch(type){
        case 'change-focus':
            return {
                ...state,
                focus:data
            }
        case 'update_hot_title_list':
            return {
                ...state,
                hot_title_list:data.hot_title_list,
                all_page:data.all_page
            }
        case 'change_search':
            return {
                ...state,
                now_page:data
            }
        case 'change_mouse_state':
            console.log('state_mouse_in_hot_list:',state.mouse_in_hot_list)
            return {
                ...state,
                mouse_in_hot_list:data
            }
        default:
            return defaultState
    }
}