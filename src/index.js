import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'core-js/fn/object/values'

import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-roboto'

import registerServiceWorker from './registerServiceWorker'

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

registerServiceWorker()
