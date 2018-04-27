import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CssBaseline from 'material-ui/CssBaseline'
import 'typeface-roboto'

import { App } from './App'
import store from './store'

import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
)
