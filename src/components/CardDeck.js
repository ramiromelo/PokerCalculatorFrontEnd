import React, { Component } from 'react';
import { GiClubs, GiDiamonds, GiHearts, GiSpades, GiCircle } from "react-icons/gi";

class CardDeck extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         color: 'black'
       }
   };

   cardBackground() {
      switch(this.props.suit) {
         case 'd':
            return '#44bffc'
         case 'h':
            return '#fc4444'
         case 's':
            return '#545454'
         case 'c':
            return '#5effa4'
         default:
            return '#545454'
      }
   }

   cardFontColor() {
      switch(this.props.suit) {
         case 'd':
            return 'blue'
         case 'h':
            return '#b00000'
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

      const cardText = {
         backgroundColor: this.cardBackground(),
         height: '100%',
         border: '0px',
         borderRadius: '7px',
         margin: '1px',
         userSelect: 'none',
      };


      return ( 
         
            
               <div style={cardText}>
                  <div style={{
                     fontSize: '10px',
                     color: this.cardFontColor(),
                     fontWeight: 'bold',
                  }}>{this.props.card}</div>
                  <div style={{
                     fontSize: '10px',
                     color: this.cardFontColor(),
                     fontWeight: 'bold'
                  }}>{this.formatSuit()}</div>
               </div>
            
         
      );
   }
}
 
export default CardDeck;