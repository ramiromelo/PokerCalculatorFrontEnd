import playerSelected from './playerSelected';
//import selectPlayer from './selectPlayer';
//import selectPlayer from './selectPlayer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   playerSelected: playerSelected,
})

export default allReducers;