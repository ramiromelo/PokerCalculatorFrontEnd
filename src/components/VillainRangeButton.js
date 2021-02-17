import React, { Component } from 'react';

class VillainRangeButton extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         
      }
   }

   buttonSelected(){
      if(this.props.fold === 'true') {
         return 'gray';
      } else {
         if(this.props.selected === true) {
            return 'orange'
         } else {
            return 'white'
         }
      }          
   }
   

   render() { 
      return ( 
         <div style={{
            height: '5px',
            width: '5px',
            backgroundColor: this.buttonSelected(),
         }}></div>
       );
   }
}
 
export default VillainRangeButton;