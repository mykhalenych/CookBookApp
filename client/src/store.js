import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { recipesReducer } from "./redux2/reducers"
import {authReducer} from './redux2/auth.reducers'
const reducer = combineReducers({
  recipe: recipesReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
