import playerSelected from './playerSelectedReducer';
import { player1FoldReducer, 
   player2FoldReducer, 
   player3FoldReducer,
   player4FoldReducer,
   player5FoldReducer } from './playerFoldReducer'

import { pl1range1R,
   pl1range2R, } from './rangesReducer'

// import playerFold from './playerFoldReducer';
//import selectPlayer from './selectPlayer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   playerSelected: playerSelected,
   playerFold: combineReducers({
      1: player1FoldReducer,
      2: player2FoldReducer,
      3: player3FoldReducer,
      4: player4FoldReducer,
      5: player5FoldReducer
   }),
   ranges: combineReducers({
      1: combineReducers({
         1: pl1range1R,
         //2: pl1range2R,
      })

   })
})

export default allReducers;