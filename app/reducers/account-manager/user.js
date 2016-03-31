const user = (state={
    firstname:"david",
    lastname:"collette",
},action) => {
    switch(action.type){
        case "SAVE_USER":
            return state;
            break;
        default:
            return state;
    }
};

export default user;

