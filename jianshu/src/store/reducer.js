const defaultState = {
    focus:false,
    hot_title_list:[],
    mouse_in_hot_list:false,
    now_page : 1,
    all_page : 0,
    topic_list : [],
    list_info_list:[],
    artist_data_list:{"users":[{"id":3136195,"slug":"6810a6332de9","nickname":"梅拾璎","avatar_source":"https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg","total_likes_count":31622,"total_wordage":269320,"is_following_user":false},{"id":7133325,"slug":"bf26d103fb8d","nickname":"Hobbit霍比特人","avatar_source":"https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48","total_likes_count":2417,"total_wordage":497650,"is_following_user":false},{"id":12665193,"slug":"757b5f9f910b","nickname":"宇文歡","avatar_source":"https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg","total_likes_count":2659,"total_wordage":147007,"is_following_user":false},{"id":8781442,"slug":"2399ca214fbd","nickname":"胡七筒","avatar_source":"https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg","total_likes_count":10698,"total_wordage":115398,"is_following_user":false},{"id":7416466,"slug":"e7dd0b3c7b70","nickname":"老沈1","avatar_source":"https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg","total_likes_count":805,"total_wordage":43586,"is_following_user":false}],"total_count":50098}
    
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
        case 'update_artist_data_list':
            console.log('update_artist_data_list',data)
            return{
                ...state,
                artist_data_list:data
            }
        default:
            return defaultState
    }
}