export const pl1range1R = (state = true, action) => { 
   switch(action.type) { 
      case 'PL1_1': 
         return !state; 
      default: 
         return state; 
   }
}
//export const pl1range2R = (state = true, action) => { switch(action.type) { case 'PL1_2': return !state; default: return state; }}