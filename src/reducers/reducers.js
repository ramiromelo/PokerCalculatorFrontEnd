export const playerSelected = (state = 1, action) => {
   switch(action.type) {
      case 'SELECT_PLAYER_1':
         return 1;
      case 'SELECT_PLAYER_2':
         return 2;
      case 'SELECT_PLAYER_3':
         return 3;
      case 'SELECT_PLAYER_3':
         return 4;
      case 'SELECT_PLAYER_4':
         return 4;
      case 'SELECT_PLAYER_5':
         return 5;
      default:
         return 1;
   }
}