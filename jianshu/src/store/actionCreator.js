import store from './store'
import axios from 'axios'
export function changeFocus(isActive){
    return store.dispatch({
        type:'change-focus',
        data:isActive
    })
}

export function get_hot_search_data(){
    const hot_title_list = store.getState().hot_title_list
    if (hot_title_list.length!==0) return
    return store.dispatch((dispatch)=>{
        axios.get('/api/get_data.json').then(
            res=>{
                console.log(res.data.data)
                dispatch({
                    type:'update_hot_title_list',
                    data:{
                        hot_title_list:[...res.data.data],
                        all_page:Math.ceil(res.data.data.length/10)
                    }
                })
            },
            err=>{
                alert(err)
            }
        )
    }
    )
}

export function change_Search(now_page,all_page){
    console.log(now_page,all_page)
    return store.dispatch((dispatch)=>{
        if(now_page<all_page){
            dispatch(
                {
                    type:'change_search',
                    data:now_page+1
                }
            )
        }
        else{
            dispatch(
                {
                    type:'change_search',
                    data:1
                })
        }
    })
}

export function change_mouse_state(data){
    return store.dispatch({
        type:'change_mouse_state',
        data:data
    }
    )
}