import React from 'react';
import VillainRange from './VillainRange';
import { useDispatch } from 'react-redux';
import { selectPlayer1, selectPlayer2, selectPlayer3,selectPlayer4, selectPlayer5 } from '../actions/selectPlayerAction';
import { player1FoldAction,
player2FoldAction,
player3FoldAction,
player4FoldAction,
player5FoldAction } from '../actions/playerFoldAction';
// import { player1FoldReducer } from '../actions/selectPlayerAction'


// const dispatch = useDispatch();
// const select = () => dispatch(selectPlayer2());
   

const VillainPanel = (props) => {
   
   const  dispatch = useDispatch();

   return ( 
      <div style={{
         color: 'white'
      }} className="container">
         <div className="justify-content-center">
         PLAYER: {props.player}
         <VillainRange player={props.player} />
         <button onClick={() => {
            switch (props.player) {
               case "1":
                  dispatch(selectPlayer1());
                  break;
               case "2":
                  dispatch(selectPlayer2());
                  break;
               case "3":
                  dispatch(selectPlayer3());
                  break;
               case "4":
                  dispatch(selectPlayer4());
                  break;
               case "5":
                  dispatch(selectPlayer5());
                  break;
               default:
                  dispatch(selectPlayer1());
            }
         }}>SELECT</button>
         <button onClick={() => {
            switch (props.player) {
               case "1":
                  dispatch(player1FoldAction());
                  break;
               case "2":
                  dispatch(player2FoldAction());
                  break;
               case "3":
                  dispatch(player3FoldAction());
                  break;
               case "4":
                  dispatch(player4FoldAction());
                  break;
               case "5":
                  dispatch(player5FoldAction());
                  break;
               default:
                  
            }
         }}>FOLD</button>
         </div>
      </div>      
   );
}
 
export default VillainPanel;


//dispatch(player1FoldAction())