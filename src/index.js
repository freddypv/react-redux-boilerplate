import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import './scss/index.css';
import todoApp from './reducers'
import Root from './components/root/Root'

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)