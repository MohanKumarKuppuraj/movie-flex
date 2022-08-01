import movieReducer from './reducer';
import {createStore} from 'redux';
const movieStore = createStore(movieReducer);
export default movieStore;
