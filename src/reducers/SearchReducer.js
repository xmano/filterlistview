export default (state = null, action) => {
  switch (action.type) {
    case 'CMD_searchText': {
      console.log('In Search reducer ... : ' + action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};
