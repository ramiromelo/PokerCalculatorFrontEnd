export const player1FoldReducer = (state = false, action) => {
   switch(action.type) {
      case 'PLAYER_1_FOLD':
         return !state;
      default:
         return state;
   }
}

export const player2FoldReducer = (state = false, action) => {
   switch(action.type) {
      case 'PLAYER_2_FOLD':
         return !state;
      default:
         return state;
   }
}

export const player3FoldReducer = (state = false, action) => {
   switch(action.type) {
      case 'PLAYER_3_FOLD':
         return !state;
      default:
         return state;
   }
}

export const player4FoldReducer = (state = false, action) => {
   switch(action.type) {
      case 'PLAYER_4_FOLD':
         return !state;
      default:
         return state;
   }
}

export const player5FoldReducer = (state = false, action) => {
   switch(action.type) {
      case 'PLAYER_5_FOLD':
         return !state;
      default:
         return state;
   }
}
// export player1FoldReducer;

