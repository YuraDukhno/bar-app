import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

// const rootReducer = combineReducers({
//   app: appReducer,
// });

const defaultState = {
    sideBar: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) { 
    case "SHOW_SIDEBAR":
      return { ...state, sideBar: action.payload}
    
    default:
      return state
    }
}

export const store = createStore(reducer);
