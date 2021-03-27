import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {counterReducer,iceCounterReducer} from './reducers/counterReducer';
import {fetchReducer} from './reducers/fetchReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'; 

const rootReducer = combineReducers({
        cake:counterReducer,
    iceCreame:iceCounterReducer,
    users:fetchReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root'));