import {movies,filters} from './reducers';
import {createStore,combineReducers} from 'redux';

//Store
const store=createStore(combineReducers({
    'movies':movies,
    'filters':filters
}));

export default store;