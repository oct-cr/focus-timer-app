import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'typeface-roboto'

import App from './App'
import store from './store'

import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
