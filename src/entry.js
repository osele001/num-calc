import Hello from './components/hello.jsx';
import MenuBar from './components/MenuBar.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

ReactDOM.render(<Hello/>, document.getElementById('comp1'));
ReactDOM.render(<MenuBar items={ ['Русский', 'Английский'] }/>, document.getElementById('menu'));

if (module.hot) {
    module.hot.accept();
}
/*if (module.hot) {
  module.hot.dispose(function() {
    sideEffectNode.parentNode.removeChild(sideEffectNode);
  });
}*/