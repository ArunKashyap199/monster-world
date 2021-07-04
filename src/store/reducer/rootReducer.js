import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import adminReducer from './adminReducer';

const persistConfig = {key:'root',storage,whitelist:[]};


const rootReducer = combineReducers({
    admin: adminReducer,
});

export default persistReducer(persistConfig,rootReducer);
