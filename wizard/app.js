import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './frontend/store/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div>React is working really well</div>
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
