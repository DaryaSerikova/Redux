


const reducer = (state = 0, action) => { //(текущий state, действие над state)
  //аналогия setState

  switch (action.type) {

    case 'RND':
      return state + action.payload;

    case 'INC':
      return state + 1;

    case 'DEC':
        return state - 1;

    default: 
      return state;
  }

  // return 0;
};

export default reducer;