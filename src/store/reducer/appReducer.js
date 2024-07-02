import actionTypes from "../actions/actionType";

const initSate = {
    homeData: [],
    test: 'hello world'
};

const appReducer = (state = initSate, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state
        default:
            return state
    }
};
export default appReducer;
