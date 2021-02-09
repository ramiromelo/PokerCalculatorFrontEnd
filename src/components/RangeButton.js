import React, { Component } from 'react';

class RangeButton extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         color: 'black'
       }
   };
   
   buttonRangeBackground() {
      switch(this.props.type) {
         case 'p':
            return '#F4B3CE'
         case 's':
            return '#68D1C5'
         case 'o':
            return '#EBFFE4'
         default:
            return 'white'
      }
   }


   render() { 

      const rangeButtonStyle = {
         backgroundColor: this.buttonRangeBackground(),
         height: '20px',
         width: '20px',
         border: '0px',
         borderRadius: '6px',
         margin: '0px',
         padding: '0px',
         fontWeight: 'normal',
         zIndex: 1,
         position: 'relative',
         top: 0,
         left: 0
      };

      return ( 
         
         <div style={ rangeButtonStyle }>
            <div style={{
               position: 'absolute', left: '50%', top: '50%',
               transform: 'translate(-50%, -50%)',
               fontSize: '11px',
               textAlign: 'center',
               userSelect: 'none',

               
            }}>
               {this.props.buttonName}
            </div>
         </div>
      );
   }
}
 
export default RangeButton;