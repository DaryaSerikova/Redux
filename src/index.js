import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
// import { inc, dec, rnd } from './actions';

// const initialState = 0;



const store = createStore(reducer);// Создаем store
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) = (...args) => {
//   dispatch(creator(...args));
// };

// const incDispatch = bindActionCreators( inc, dispatch);
// const decDispatch = bindActionCreators( dec, dispatch);
// const rndDispatch = bindActionCreators( rnd, dispatch);//(payload) => dispatch(rnd(payload));

const { inc, dec, rnd } = //{ incDispatch, decDispatch, rndDispatch }
  bindActionCreators( actions, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', inc ); //incDispatch

document
  .getElementById('dec')
  .addEventListener('click', dec );

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload); //store.dispatch(rnd(payload));
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
