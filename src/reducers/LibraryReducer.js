import data from './LibraryData.json';

export default (state = null, action) => {
  switch (action.type) {
    case 'CMD_searchText': {
      console.log('In lib reducer ... : ' + action.payload);
      var filterData = data.filter(function(v) { 
                            return v.title.match(new RegExp(action.payload, "i"));
                            });
      return filterData;
    }
    default:
      return data;
  };
    
};
