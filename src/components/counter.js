import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button 
        onClick={dec}
        className="btn btn-primary btn-lg">DEC</button>
      <button 
        onClick={inc}
        className="'btn btn-primary btn-lg">INC</button>
      <button 
        onClick={rnd}
        className="'btn btn-primary btn-lg">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => { //(текущий state)
  return {
    counter: state //counter - это весь state
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);//{ inc, dec, rnd }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


export default connect(mapStateToProps, actions)(Counter);

// connect()() - возвращает компонент. Это обертка над компонентом
// connect(здесь параметры конфигурации)(оборачиваемый компонент)
// как withData()

// Вернет новый компонент, который оборачивает Counter
// и этот самый новый компонент будет знать про redux
// он будет брать значения из store и передавать их в counter