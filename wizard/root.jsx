import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './frontend/store/store';
import App from './frontend/components/app'; 

const Root = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
