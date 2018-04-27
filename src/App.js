import React from 'react'
import { connect } from 'react-redux'

import { Dashboard } from './containers'
import { getFormattedTime } from './utils'


export class App extends React.Component {

  render() {
    const statusClass = (this.props.seconds === 0) ? 'stopped' : 'running'

    document.title = getFormattedTime(this.props.seconds)

    return (
      <div id="main-wrapper" className={statusClass}>
        <main>
          <Dashboard />
        </main>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  seconds: state.timer.remainingSeconds
})

App = connect(mapStateToProps)(App)
