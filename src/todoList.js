import React  from 'react';
import { connect } from "react-redux";
import { changeInputValueCrators, handleSubmitCrators, handleDelteCrators } from './store/actionCreators'

//因为只有一个render函数，所以可以写成一个无状态组件，这样可以大大提高性能
const TodoList = (props)=>{
    const { inputValue,list,changeInputValue,handleSubmit,handleDelte} = props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}></input>
          <button onClick={handleSubmit}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index} onClick={handleDelte.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}

//mapStateToProps翻译过来其实是说将store里面的数据映射到组件里面成为组件的props
const mapStateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//mapDispatchToProps可以翻译成store.dispatch.props
const mapDispatchToProps = (dispatch)=>{
  return {
    changeInputValue(e){
      const action = changeInputValueCrators(e);
      dispatch(action);
    },
    handleSubmit(){
      const action = handleSubmitCrators();
      dispatch(action);
    },
    handleDelte(index){
      const action = handleDelteCrators(index); 
      dispatch(action)
    }
  }
}
//connet是连接的意思，意思是让组件和store做连接，总之是为了拿到store里面的数据；
//拿到数据以后再用mapStateToProps做映射，映射到props里面，props里面的inputValue
//mapDispatchToProps 就是action的派发了
//首先派发到reducer，reducer中整合新数据，返回最新的数据到store，mapStateToProps将最新的数据映射到组件的props中，
//组件就可以用this.props拿到mapStateToProps里面的数据；
export default connect(mapStateToProps, mapDispatchToProps)(TodoList); //将数据和组件连接
