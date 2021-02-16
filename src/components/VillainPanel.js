import React from 'react';
import VillainRange from './VillainRange';
import * as actions from '../actions/selectPlayer';


// const dispatch = useDispatch();
// const select = () => dispatch(selectPlayer2());
   



const VillainPanel = (props) => {

   // const player

   return ( 
      <div style={{
         color: 'white'
      }} className="container">
         <div className="justify-content-center">
         PLAYER: {props.player}
         <VillainRange />
         <button>SELECT</button>
         <button>FOLD</button>
         </div>
      </div>      
   );
}
 
export default VillainPanel;


// class VillainPanel extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {  }
//    }

//    render() { 
//       return ( 
//          <div style={{
//             color: 'white'
//          }} className="container">
//             <div className="justify-content-center">
//             PLAYER: {this.props.player}
//             <VillainRange />
//             <button player={this.props.player} onClick={() => dispatch(actions.selectPlayer2)}>SELECT</button>
//             <button>FOLD</button>
//             </div>
//          </div>      );
//    }
// }
 
// export default VillainPanel;

// class VillainPanel extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {  }
//    }
//    render (
//       return (
//          <div style={{
//             color: 'white'
//          }} className="container">
//             <div className="justify-content-center">
//             PLAYER: {this.props.player}
//             <VillainRange />
//             <button onClick={() => dispatch(selectPlayer2())}>SELECT</button>
//             <button>FOLD</button>
//             </div>
//          </div>
//       )
//    )
// };
 
// export default VillainPanel;

