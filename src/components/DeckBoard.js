import React, { Component } from 'react';
import CardDeck from './CardDeck';

class DeckBoard extends Component {
   render() { 
      return ( 
         <div style={{
            // height: '55vh',
            // display: 'flex',
         }} className="container">
            <div style={{
               height: '30px',
            // display: 'flex',
         }}></div>
            <table style={{ width: '100%', height: '100%'}}>
               <tr>
                  <td><CardDeck card='A' suit='d' /></td>
                  <td><CardDeck card='A' suit='h' /></td>
                  <td><CardDeck card='A' suit='s' /></td>
                  <td><CardDeck card='A' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='K' suit='d' /></td>
                  <td><CardDeck card='K' suit='h' /></td>
                  <td><CardDeck card='K' suit='s' /></td>
                  <td><CardDeck card='K' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='Q' suit='d' /></td>
                  <td><CardDeck card='Q' suit='h' /></td>
                  <td><CardDeck card='Q' suit='s' /></td>
                  <td><CardDeck card='Q' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='J' suit='d' /></td>
                  <td><CardDeck card='J' suit='h' /></td>
                  <td><CardDeck card='J' suit='s' /></td>
                  <td><CardDeck card='J' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='10' suit='d' /></td>
                  <td><CardDeck card='10' suit='h' /></td>
                  <td><CardDeck card='10' suit='s' /></td>
                  <td><CardDeck card='10' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='9' suit='d' /></td>
                  <td><CardDeck card='9' suit='h' /></td>
                  <td><CardDeck card='9' suit='s' /></td>
                  <td><CardDeck card='9' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='8' suit='d' /></td>
                  <td><CardDeck card='8' suit='h' /></td>
                  <td><CardDeck card='8' suit='s' /></td>
                  <td><CardDeck card='8' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='7' suit='d' /></td>
                  <td><CardDeck card='7' suit='h' /></td>
                  <td><CardDeck card='7' suit='s' /></td>
                  <td><CardDeck card='7' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='6' suit='d' /></td>
                  <td><CardDeck card='6' suit='h' /></td>
                  <td><CardDeck card='6' suit='s' /></td>
                  <td><CardDeck card='6' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='5' suit='d' /></td>
                  <td><CardDeck card='5' suit='h' /></td>
                  <td><CardDeck card='5' suit='s' /></td>
                  <td><CardDeck card='5' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='4' suit='d' /></td>
                  <td><CardDeck card='4' suit='h' /></td>
                  <td><CardDeck card='4' suit='s' /></td>
                  <td><CardDeck card='4' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='3' suit='d' /></td>
                  <td><CardDeck card='3' suit='h' /></td>
                  <td><CardDeck card='3' suit='s' /></td>
                  <td><CardDeck card='3' suit='c' /></td>
               </tr>
               <tr>
                  <td><CardDeck card='2' suit='d' /></td>
                  <td><CardDeck card='2' suit='h' /></td>
                  <td><CardDeck card='2' suit='s' /></td>
                  <td><CardDeck card='2' suit='c' /></td>
               </tr>
            </table>
            
         </div>
      );
   }
}
 
export default DeckBoard;