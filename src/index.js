import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {counterReducer,iceCounterReducer} from './reducers/counterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
const rootReducer = combineReducers({
        cake:counterReducer,
    iceCreame:iceCounterReducer
})
const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root'));