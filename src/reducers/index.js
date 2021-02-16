import playerSelected from './playerSelectedReducer';
import { player1FoldReducer, 
   player2FoldReducer, 
   player3FoldReducer,
   player4FoldReducer,
   player5FoldReducer } from './playerFoldReducer'
// import playerFold from './playerFoldReducer';
//import selectPlayer from './selectPlayer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   playerSelected: playerSelected,
   playerFold: combineReducers({
      player1Fold: player1FoldReducer,
      player2Fold: player2FoldReducer,
      player3Fold: player3FoldReducer,
      player4Fold: player4FoldReducer,
      player5Fold: player5FoldReducer
   }),
})

export default allReducers;