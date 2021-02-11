import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {render} from 'react-dom';
import {store} from './store/index';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/templatemo-klassy-cafe.css';
import './assets/css/lightbox.css';
import './assets/css/custom-style.css'
import  {configureDummyData}  from './shared/helper/dummyDataStore';
configureDummyData();

render(
    <Provider store={store}>
       {/* <BrowserRouter>
       <App />
       </BrowserRouter> */}
         <App />
    </Provider>,
    document.getElementById("root")
  );
