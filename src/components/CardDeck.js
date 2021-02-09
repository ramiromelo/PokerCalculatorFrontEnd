import React, { Component } from 'react';
import { GiClubs, GiDiamonds, GiHearts, GiSpades, GiCircle } from "react-icons/gi";

class CardDeck extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         color: 'black'
       }
   };

   formatCard() {
      switch(this.props.suit) {
         case 'd':
            return 'blue'
         case 'h':
            return 'red'
         case 's':
            return 'black'
         case 'c':
            return 'green'
         default:
            return 'black'
      }
   }

   formatSuit() {
      switch(this.props.suit) {
         case 'd':
            return <GiDiamonds />
         case 'h':
            return <GiHearts />
         case 's':
            return <GiSpades />
         case 'c':
            return <GiClubs />
         default:
            return <GiCircle />
      }
   }
   
   
   render() { 

      const cardStyle = {
         backgroundColor: 'white',
         height: '50px',
         width: '30px',
         textAlign: 'center',
         verticalAlign: 'middle',
         border: '1px solid black',
         borderRadius: '6px',
         margin: '2px',
         userSelect: 'none',
         color: this.formatCard(),
         fontWeight: 'bold'
      };

      return ( 
         <div>
            <div style={cardStyle}>{this.props.card}<br />{this.formatSuit()}</div>
         </div>
      );
   }
}
 
export default CardDeck;