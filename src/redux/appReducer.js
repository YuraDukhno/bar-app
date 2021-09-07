const SET_SIDEBAR = "SHOW_SIDEBAR";


const defaultState = {
  sideBar: false,
};


export default function appReducer( state = defaultState, action ) {
    switch ( action.type ) {
        case SET_SIDEBAR:
            return { ...state, sideBar: action.payload }

            default:
                return state;
    }
}

export const setSideBar = ( payload ) => ({ type: SET_SIDEBAR, payload: payload})