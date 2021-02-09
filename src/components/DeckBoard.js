import React, { Component } from 'react';
import CardDeck from './CardDeck';

class DeckBoard extends Component {
   state = {  }
   render() { 
      return ( 
         <div>
            <CardDeck card='A' suit='s' />
            <CardDeck card='A' suit='c' />
            <CardDeck card='A' suit='h' />
            <CardDeck card='A' suit='d' />
         </div>
      );
   }
}
 
export default DeckBoard;