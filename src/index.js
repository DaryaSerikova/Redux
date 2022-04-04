import { createStore } from 'redux';

// const initialState = 0;

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

const store = createStore(reducer);// Создаем store

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({type: 'INC'});
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({type: 'DEC'});
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10)
    store.dispatch({
      type: 'RND',
      payload
    });
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);



// store.subscribe(() => { 
//   //Выводим state после каждого изменения store
//   console.log(store.getState());
// });

// //Выводим первоначальное состояние нашего приложения:
// console.log(store.getState());

// Просим store выполнить одно из действий.
// Хотим выполнить действие с типом 'INC'
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

// //Выводим текущее состояние нашего приложения:
// console.log(store.getState());





// let state = reducer(undefined, {})

// // Просим изменить счетчик на 1:
// // let state = reducer(initialState, { type: 'INC' });
// state = reducer(state, { type: 'INC' });

// //Передаем начальное значение и хотим сделать действие с типом INC

// console.log(state);

// state = reducer(state, { type: 'INC' });
// console.log(state);
