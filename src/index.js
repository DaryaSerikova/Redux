import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

// const initialState = 0;



const store = createStore(reducer);// Создаем store




document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch(inc());
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(dec());
  });

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10)
    store.dispatch(rnd(payload));
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
