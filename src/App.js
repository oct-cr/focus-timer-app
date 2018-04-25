import React from 'react'

import { Dashboard } from './containers'


export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Focus Timer</h1>
        <Dashboard />
      </React.Fragment>
    )
  }

}
