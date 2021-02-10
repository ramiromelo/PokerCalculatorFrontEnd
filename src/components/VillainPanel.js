import React, { Component } from 'react';
import VillainRange from './VillainRange'

class VillainPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return (
         <div style={{
            color: 'white'
         }} className="container">
            <div className="justify-content-center">
            PLAYER: {this.props.player}
            <VillainRange />
            
            <button>FOLD</button>
            </div>
         </div>
      );
   }
}
 
export default VillainPanel;