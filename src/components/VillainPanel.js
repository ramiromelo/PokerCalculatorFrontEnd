import React from 'react';
import VillainRange from './VillainRange';
import { useDispatch } from 'react-redux';
import { selectPlayer1, selectPlayer2, selectPlayer3,selectPlayer4, selectPlayer5 } from '../actions/selectPlayer';


// const dispatch = useDispatch();
// const select = () => dispatch(selectPlayer2());
   

const VillainPanel = (props) => {
   const  dispatch = useDispatch();

   let a;
   let b;
   switch (a) {
      case 1:
         b = selectPlayer2();
         break;
      case 2:
         b = selectPlayer2();
         break;
      case 3:
         b = selectPlayer3();
         break;
      case 4:
         b = selectPlayer4();
         break;
      case 5:
         b = selectPlayer5();
         break;
      default:
         b = selectPlayer1();
   }
   


   return ( 
      <div style={{
         color: 'white'
      }} className="container">
         <div className="justify-content-center">
         PLAYER: {props.player}
         <VillainRange />
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
         <button>FOLD</button>
         </div>
      </div>      
   );
}
 
export default VillainPanel;
