import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h2>Counter: { counter }</h2>
      <h2>isLogged: { isLogged }</h2>
      </div>
  );
}

export default App;
