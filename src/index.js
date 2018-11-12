import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList';
import { Provider } from 'react-redux'
import store from './store'


//Provider是提供者的意思，连接store后，Provider下面的子组件就都可以获取到store
const App = (
    <Provider store={store}>
        <TodoList></TodoList>
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
