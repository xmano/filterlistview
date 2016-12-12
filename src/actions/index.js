export const findTerm = (term) =>{
    return {
        type : 'CMD_searchText',
        payload : term
    };
};
