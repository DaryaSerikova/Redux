import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducer';



const store = createStore(reducer);// Создаем store


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


// Это была 17 версия React:
// ReactDOM.render(<Counter />, document.getElementById('root'));







// const { inc, dec, rnd } = //{ incDispatch, decDispatch, rndDispatch }
//   bindActionCreators( actions, dispatch);


// const update = () => {
//   // document
//   //   .getElementById('counter')
//   //   .innerHTML = store.getState();
// };

// const bindActionCreator = (creator, dispatch) = (...args) => {
//   dispatch(creator(...args));
// };

// const incDispatch = bindActionCreators( inc, dispatch);
// const decDispatch = bindActionCreators( dec, dispatch);
// const rndDispatch = bindActionCreators( rnd, dispatch);//(payload) => dispatch(rnd(payload));



// document
//   .getElementById('inc')
//   .addEventListener('click', inc ); //incDispatch

// document
//   .getElementById('dec')
//   .addEventListener('click', dec );

// document
//   .getElementById('rnd')
//   .addEventListener('click', () => {
//     const payload = Math.floor(Math.random()*10);
//     rnd(payload); //store.dispatch(rnd(payload));
//   });



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
