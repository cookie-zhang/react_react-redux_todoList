import { ADD_ITEM, CHANGEINPUTVALUE_ACTION, DELTE_ITEM } from './actionTypes'
const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState, action)=>{
    if(action.type === CHANGEINPUTVALUE_ACTION){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELTE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        debugger;
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}