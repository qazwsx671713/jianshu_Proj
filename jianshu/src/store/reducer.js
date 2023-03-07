const defaultState = {
    focus:false,
    hot_title_list:[],
    mouse_in_hot_list:false,
    now_page : 1,
    all_page : 0,
    topic_list : [],
    list_info_list:[
        // {
        //     "title":"没有人不遗憾，只是有人不喊疼",
        //     "content":"文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性",
        //     "usr_name":"Lucky初叁",
        //     "comment_num":15,
        //     "like_num":20
        // },
        // {
        //     "title":"没有人不遗憾，只是有人不喊疼",
        //     "content":"文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性",
        //     "usr_name":"Lucky初叁",
        //     "comment_num":15,
        //     "like_num":20
        // },
        // {
        //     "title":"没有人不遗憾，只是有人不喊疼",
        //     "content":"文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性文/lucy 时间很公正，见证了人性",
        //     "usr_name":"Lucky初叁",
        //     "comment_num":15,
        //     "like_num":20
        // }
    ]
    
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
            
            return {
                ...state,
                mouse_in_hot_list:data
            }
        case 'update_topic_list_data':
            // console.log('supdate_topic_list_data',data)
            return {
                ...state,
                topic_list:data
            }
        case 'update_list_data_list':
            return {
                ...state,
                list_info_list:data
            }
        default:
            return defaultState
    }
}