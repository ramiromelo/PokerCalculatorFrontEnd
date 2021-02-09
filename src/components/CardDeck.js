import React, { Component } from 'react';
import { GiClubs } from "react-icons/gi";

class CardDeck extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         cardColor: 'black'
       }
   };


   
   
   render() { 

      // const defaultCardColor = this.props.suit;
      // const cardColor = this.state.cardColor;
      // // console.log(cardColor);
      
      // if(defaultCardColor==='c'){
      //    cardColor = 'green';
      // };

      // switch(this.props.suit) {
      //    case 'c':
      //       console.log('c');
      //       console.log(typeof(cardColor));
      //       console.log(cardColor);
      //       break;
      //    case 'd':
      //       console.log('d');
      //       break;
      //    default:
      //       console.log('default');
      // }

      const cardStyle = {
         backgroundColor: 'white',
         height: '40px',
         width: '16px',
         textAlign: 'center',
         verticalAlign: 'middle',
         border: '1px solid black',
         padding: '5px',
         borderRadius: '6px',
         margin: '2px',
         userSelect: 'none',
         color: this.state.cardColor
      };

      return ( 
         <div>
            <div style={cardStyle}>{this.props.card}<GiClubs /></div>
            
         </div>
      );
   }
}
 
export default CardDeck;