import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import logger from 'redux-logger';

import {albumReducer}  from '../reducer/reducer';


const middleware = [thunkMiddleware , logger]

const store =  createStore(
    albumReducer,
    applyMiddleware([...middleware])
)

export default store;