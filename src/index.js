import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import {store} from './store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/templatemo-klassy-cafe.css';
import './assets/css/lightbox.css';
import './assets/css/custom-style.css'

render(
    <Provider store={store}>
       <BrowserRouter>
       <App />
       </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
