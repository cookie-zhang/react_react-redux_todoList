import { ADD_ITEM, CHANGEINPUTVALUE_ACTION, DELTE_ITEM } from './actionTypes';
//input框输入
export const changeInputValueCrators = (e)=>{ 
    return {
        type: CHANGEINPUTVALUE_ACTION,
        value: e.target.value
    }
}
//提交按钮
export const handleSubmitCrators = ()=>{  
    return {
       type: ADD_ITEM
    }
}
//删除item
export const handleDelteCrators = (index)=>{  
    return {
        type: DELTE_ITEM,
        index
    }
}