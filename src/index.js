import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/store';
import './scss/index.css';
import Root from './components/root/Root';
import {createLogger} from 'redux-logger';

const store = configureStore();


render(
  <Root store={store} />,
  document.getElementById('root')
)