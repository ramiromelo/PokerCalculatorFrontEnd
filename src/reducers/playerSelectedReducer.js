const playerSelected = (state = 1 , action) => {
   switch(action.type) {
      case 'SELECT_PLAYER_1':
         return 1;
         break;
      case 'SELECT_PLAYER_2':
         return 2;
         break;
      case 'SELECT_PLAYER_3':
         return 3;
         break;
      case 'SELECT_PLAYER_4':
         return 4;
         break;
      case 'SELECT_PLAYER_5':
         return 5;
         break;
      default:
         return 1;
   }
}

export default playerSelected;