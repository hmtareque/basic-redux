const increment = (num) => {
    return {
      type: 'INCREMENT',
      payload: num
    }
  }
  
  const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

  export {
      increment,
      decrement
  };