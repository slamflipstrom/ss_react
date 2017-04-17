import { combineReducers, createStore } from 'redux';


const userReducer = (state = {}, action) => {
  return state;
};

const gameStateReducer = (state = [], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  game: gameStateReducer
})

const store = createStore(reducers)

store.subscribe(() => 
  console.log("store changed", store.getState())
)
