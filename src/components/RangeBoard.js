import React from 'react';
import RangeButton from './RangeButton';
import { useSelector } from 'react-redux';



function RangeBoard() {

   const playerSelectedPanel = useSelector(state => state.playerSelected);

   return ( 

      <div style={{
         // height: '30vh',
         // display: 'flex',
         color: 'white',
      }} className="container">
         <div nameClass="row">
            <div>PLAYER SELECTED: {playerSelectedPanel}</div>
            <table>
               <tbody>
                  <tr>
                     <td><RangeButton buttonName="AA" type="p" /></td>
                     <td><RangeButton buttonName="AK" type="s" /></td>
                     <td><RangeButton buttonName="AQ" type="s" /></td>
                     <td><RangeButton buttonName="AJ" type="s" /></td>
                     <td><RangeButton buttonName="AT" type="s" /></td>
                     <td><RangeButton buttonName="A9" type="s" /></td>
                     <td><RangeButton buttonName="A8" type="s" /></td>
                     <td><RangeButton buttonName="A7" type="s" /></td>
                     <td><RangeButton buttonName="A6" type="s" /></td>
                     <td><RangeButton buttonName="A5" type="s" /></td>
                     <td><RangeButton buttonName="A4" type="s" /></td>
                     <td><RangeButton buttonName="A3" type="s" /></td>
                     <td><RangeButton buttonName="A2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AK" type="o" /></td>
                     <td><RangeButton buttonName="KK" type="p" /></td>
                     <td><RangeButton buttonName="KQ" type="s" /></td>
                     <td><RangeButton buttonName="KJ" type="s" /></td>
                     <td><RangeButton buttonName="KT" type="s" /></td>
                     <td><RangeButton buttonName="K9" type="s" /></td>
                     <td><RangeButton buttonName="K8" type="s" /></td>
                     <td><RangeButton buttonName="K7" type="s" /></td>
                     <td><RangeButton buttonName="K6" type="s" /></td>
                     <td><RangeButton buttonName="K5" type="s" /></td>
                     <td><RangeButton buttonName="K4" type="s" /></td>
                     <td><RangeButton buttonName="K3" type="s" /></td>
                     <td><RangeButton buttonName="K2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AQ" type="o" /></td>
                     <td><RangeButton buttonName="KQ" type="o" /></td>
                     <td><RangeButton buttonName="QQ" type="p" /></td>
                     <td><RangeButton buttonName="QJ" type="s" /></td>
                     <td><RangeButton buttonName="QT" type="s" /></td>
                     <td><RangeButton buttonName="Q9" type="s" /></td>
                     <td><RangeButton buttonName="Q8" type="s" /></td>
                     <td><RangeButton buttonName="Q7" type="s" /></td>
                     <td><RangeButton buttonName="Q6" type="s" /></td>
                     <td><RangeButton buttonName="Q5" type="s" /></td>
                     <td><RangeButton buttonName="Q4" type="s" /></td>
                     <td><RangeButton buttonName="Q3" type="s" /></td>
                     <td><RangeButton buttonName="Q2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AJ" type="o" /></td>
                     <td><RangeButton buttonName="KJ" type="o" /></td>
                     <td><RangeButton buttonName="QJ" type="o" /></td>
                     <td><RangeButton buttonName="JJ" type="p" /></td>
                     <td><RangeButton buttonName="JT" type="s" /></td>
                     <td><RangeButton buttonName="J9" type="s" /></td>
                     <td><RangeButton buttonName="J8" type="s" /></td>
                     <td><RangeButton buttonName="J7" type="s" /></td>
                     <td><RangeButton buttonName="J6" type="s" /></td>
                     <td><RangeButton buttonName="J5" type="s" /></td>
                     <td><RangeButton buttonName="J4" type="s" /></td>
                     <td><RangeButton buttonName="J3" type="s" /></td>
                     <td><RangeButton buttonName="J2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="AT" type="o" /></td>
                     <td><RangeButton buttonName="KT" type="o" /></td>
                     <td><RangeButton buttonName="QT" type="o" /></td>
                     <td><RangeButton buttonName="JT" type="o" /></td>
                     <td><RangeButton buttonName="TT" type="p" /></td>
                     <td><RangeButton buttonName="T9" type="s" /></td>
                     <td><RangeButton buttonName="T8" type="s" /></td>
                     <td><RangeButton buttonName="T7" type="s" /></td>
                     <td><RangeButton buttonName="T6" type="s" /></td>
                     <td><RangeButton buttonName="T5" type="s" /></td>
                     <td><RangeButton buttonName="T4" type="s" /></td>
                     <td><RangeButton buttonName="T3" type="s" /></td>
                     <td><RangeButton buttonName="T2" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A9" type="o" /></td>
                     <td><RangeButton buttonName="K9" type="o" /></td>
                     <td><RangeButton buttonName="Q9" type="o" /></td>
                     <td><RangeButton buttonName="J9" type="o" /></td>
                     <td><RangeButton buttonName="T9" type="o" /></td>
                     <td><RangeButton buttonName="99" type="p" /></td>
                     <td><RangeButton buttonName="98" type="s" /></td>
                     <td><RangeButton buttonName="97" type="s" /></td>
                     <td><RangeButton buttonName="96" type="s" /></td>
                     <td><RangeButton buttonName="95" type="s" /></td>
                     <td><RangeButton buttonName="94" type="s" /></td>
                     <td><RangeButton buttonName="93" type="s" /></td>
                     <td><RangeButton buttonName="92" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A8" type="o" /></td>
                     <td><RangeButton buttonName="K8" type="o" /></td>
                     <td><RangeButton buttonName="Q8" type="o" /></td>
                     <td><RangeButton buttonName="J8" type="o" /></td>
                     <td><RangeButton buttonName="T8" type="o" /></td>
                     <td><RangeButton buttonName="98" type="o" /></td>
                     <td><RangeButton buttonName="88" type="p" /></td>
                     <td><RangeButton buttonName="87" type="s" /></td>
                     <td><RangeButton buttonName="86" type="s" /></td>
                     <td><RangeButton buttonName="85" type="s" /></td>
                     <td><RangeButton buttonName="84" type="s" /></td>
                     <td><RangeButton buttonName="83" type="s" /></td>
                     <td><RangeButton buttonName="82" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A7" type="o" /></td>
                     <td><RangeButton buttonName="K7" type="o" /></td>
                     <td><RangeButton buttonName="Q7" type="o" /></td>
                     <td><RangeButton buttonName="J7" type="o" /></td>
                     <td><RangeButton buttonName="T7" type="o" /></td>
                     <td><RangeButton buttonName="97" type="o" /></td>
                     <td><RangeButton buttonName="87" type="o" /></td>
                     <td><RangeButton buttonName="77" type="p" /></td>
                     <td><RangeButton buttonName="76" type="s" /></td>
                     <td><RangeButton buttonName="75" type="s" /></td>
                     <td><RangeButton buttonName="74" type="s" /></td>
                     <td><RangeButton buttonName="73" type="s" /></td>
                     <td><RangeButton buttonName="72" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A6" type="o" /></td>
                     <td><RangeButton buttonName="K6" type="o" /></td>
                     <td><RangeButton buttonName="Q6" type="o" /></td>
                     <td><RangeButton buttonName="J6" type="o" /></td>
                     <td><RangeButton buttonName="T6" type="o" /></td>
                     <td><RangeButton buttonName="96" type="o" /></td>
                     <td><RangeButton buttonName="86" type="o" /></td>
                     <td><RangeButton buttonName="76" type="o" /></td>
                     <td><RangeButton buttonName="66" type="p" /></td>
                     <td><RangeButton buttonName="65" type="s" /></td>
                     <td><RangeButton buttonName="64" type="s" /></td>
                     <td><RangeButton buttonName="63" type="s" /></td>
                     <td><RangeButton buttonName="62" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A5" type="o" /></td>
                     <td><RangeButton buttonName="K5" type="o" /></td>
                     <td><RangeButton buttonName="Q5" type="o" /></td>
                     <td><RangeButton buttonName="J5" type="o" /></td>
                     <td><RangeButton buttonName="T5" type="o" /></td>
                     <td><RangeButton buttonName="95" type="o" /></td>
                     <td><RangeButton buttonName="85" type="o" /></td>
                     <td><RangeButton buttonName="75" type="o" /></td>
                     <td><RangeButton buttonName="65" type="o" /></td>
                     <td><RangeButton buttonName="55" type="p" /></td>
                     <td><RangeButton buttonName="54" type="s" /></td>
                     <td><RangeButton buttonName="53" type="s" /></td>
                     <td><RangeButton buttonName="52" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A4" type="o" /></td>
                     <td><RangeButton buttonName="K4" type="o" /></td>
                     <td><RangeButton buttonName="Q4" type="o" /></td>
                     <td><RangeButton buttonName="J4" type="o" /></td>
                     <td><RangeButton buttonName="T4" type="o" /></td>
                     <td><RangeButton buttonName="94" type="o" /></td>
                     <td><RangeButton buttonName="84" type="o" /></td>
                     <td><RangeButton buttonName="74" type="o" /></td>
                     <td><RangeButton buttonName="64" type="o" /></td>
                     <td><RangeButton buttonName="54" type="o" /></td>
                     <td><RangeButton buttonName="44" type="p" /></td>
                     <td><RangeButton buttonName="43" type="s" /></td>
                     <td><RangeButton buttonName="42" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A3" type="o" /></td>
                     <td><RangeButton buttonName="K3" type="o" /></td>
                     <td><RangeButton buttonName="Q3" type="o" /></td>
                     <td><RangeButton buttonName="J3" type="o" /></td>
                     <td><RangeButton buttonName="T3" type="o" /></td>
                     <td><RangeButton buttonName="93" type="o" /></td>
                     <td><RangeButton buttonName="83" type="o" /></td>
                     <td><RangeButton buttonName="73" type="o" /></td>
                     <td><RangeButton buttonName="63" type="o" /></td>
                     <td><RangeButton buttonName="53" type="o" /></td>
                     <td><RangeButton buttonName="43" type="o" /></td>
                     <td><RangeButton buttonName="33" type="p" /></td>
                     <td><RangeButton buttonName="32" type="s" /></td>
                  </tr>
                  <tr>
                     <td><RangeButton buttonName="A2" type="o" /></td>
                     <td><RangeButton buttonName="K2" type="o" /></td>
                     <td><RangeButton buttonName="Q2" type="o" /></td>
                     <td><RangeButton buttonName="J2" type="o" /></td>
                     <td><RangeButton buttonName="T2" type="o" /></td>
                     <td><RangeButton buttonName="92" type="o" /></td>
                     <td><RangeButton buttonName="82" type="o" /></td>
                     <td><RangeButton buttonName="72" type="o" /></td>
                     <td><RangeButton buttonName="62" type="o" /></td>
                     <td><RangeButton buttonName="52" type="o" /></td>
                     <td><RangeButton buttonName="42" type="o" /></td>
                     <td><RangeButton buttonName="32" type="o" /></td>
                     <td><RangeButton buttonName="22" type="p" /></td>
                  </tr>
               </tbody>
            </table>

         </div>
      </div>

   );
}
 
export default RangeBoard;