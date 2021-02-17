import React from 'react';
import VillainRangeButton from './VillainRangeButton';
import { useSelector } from 'react-redux';

const VillainRange = (props) => {

   const playerSelFold = useSelector(state => state.playerFold);
   const villain = Number(props.player);

   console.log(useSelector(state => state.ranges[1][1]))
   console.log(villain)
   // let one = toString(1);
   // console.log(one)
   // console.log(typeof(one));

   return ( 
      <div>
         <table style={{
            margin: 'auto'
         }}>
            <tbody>
               <tr>
                  <td><VillainRangeButton selected={useSelector(state => state.ranges[1][1])} range='AA' player={props.player} fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='true' fold={playerSelFold[props.player].toString()} /></td>
                  <td><VillainRangeButton range='AA' player={props.player} selected='false' fold={playerSelFold[props.player].toString()} /></td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
 
export default VillainRange;