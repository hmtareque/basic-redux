import { createStore } from 'redux';

// store -> global store

// action -> name of action
// simple function that returns an object 
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


// reducer -> operation to change the state 
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT": 
      return state + 1; 
    case "DECREMENT": 
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

// display in console 
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());