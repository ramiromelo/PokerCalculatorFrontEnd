import React, { Component } from 'react';
import VillainRangeButton from './VillainRangeButton';


// function VillainPanel() {
//    const playerSelectedPanel = useSelector(state => state.playerSelected);
//    return (
//       <div style={{
//          color: 'white'
//       }} className="container">
//          <div className="justify-content-center">
//          PLAYER: {playerSelectedPanel}
//          <VillainRange />
         
//          <button>FOLD</button>
//          </div>
//       </div>
//    );
// }
 
// export default VillainPanel;


function VillainRange() {
   // const playerSelectedPanel = useSelector(state => state.playerSelected);
   return ( 
      <div>
         <table style={{
            margin: 'auto'
         }}>
            <tbody>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='true' /></td>
                  <td><VillainRangeButton range='ATs' selected='true' /></td>
                  <td><VillainRangeButton range='A9s' selected='true' /></td>
                  <td><VillainRangeButton range='A8s' selected='true' /></td>
                  <td><VillainRangeButton range='A7s' selected='true' /></td>
                  <td><VillainRangeButton range='A6s' selected='true' /></td>
                  <td><VillainRangeButton range='A5s' selected='true' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='true' /></td>
                  <td><VillainRangeButton range='ATs' selected='true' /></td>
                  <td><VillainRangeButton range='A9s' selected='true' /></td>
                  <td><VillainRangeButton range='A8s' selected='true' /></td>
                  <td><VillainRangeButton range='A7s' selected='true' /></td>
                  <td><VillainRangeButton range='A6s' selected='true' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='true' /></td>
                  <td><VillainRangeButton range='ATs' selected='true' /></td>
                  <td><VillainRangeButton range='A9s' selected='true' /></td>
                  <td><VillainRangeButton range='A8s' selected='true' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='true' /></td>
                  <td><VillainRangeButton range='ATs' selected='true' /></td>
                  <td><VillainRangeButton range='A9s' selected='true' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='true' /></td>
                  <td><VillainRangeButton range='ATs' selected='true' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='true' /></td>
                  <td><VillainRangeButton range='AQs' selected='true' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='true' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
               <tr>
                  <td><VillainRangeButton range='AA' selected='false' /></td>
                  <td><VillainRangeButton range='AKs' selected='false' /></td>
                  <td><VillainRangeButton range='AQs' selected='false' /></td>
                  <td><VillainRangeButton range='AJs' selected='false' /></td>
                  <td><VillainRangeButton range='ATs' selected='false' /></td>
                  <td><VillainRangeButton range='A9s' selected='false' /></td>
                  <td><VillainRangeButton range='A8s' selected='false' /></td>
                  <td><VillainRangeButton range='A7s' selected='false' /></td>
                  <td><VillainRangeButton range='A6s' selected='false' /></td>
                  <td><VillainRangeButton range='A5s' selected='false' /></td>
                  <td><VillainRangeButton range='A4s' selected='false' /></td>
                  <td><VillainRangeButton range='A3s' selected='false' /></td>
                  <td><VillainRangeButton range='A2s' selected='false' /></td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}
 
export default VillainRange;