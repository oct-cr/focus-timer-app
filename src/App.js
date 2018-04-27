import React from 'react'
import { connect } from 'react-redux'

import Typography from 'material-ui/Typography'

import { Dashboard } from './containers'
import { getFormattedTime } from './utils'


export class App extends React.Component {

  render() {
    const statusClass = (this.props.seconds === 0) ? 'stopped' : 'running'

    document.title = getFormattedTime(this.props.seconds)

    return (
      <div id="main-wrapper" className={statusClass}>
        <main>
          <div>
            <Dashboard />
          </div>
        </main>
        <footer>
          <Typography variant="body1" gutterBottom>
            Javascript Web App developed by <a href="https://octaviocoria.com/" target="_blank" rel="noopener noreferrer">
              Octavio Coria
          </a> - <a href="https://github.com/crearlink/focus-timer-app" target="_blank" rel="noopener noreferrer">
              Source Code
          </a>
          </Typography>
        </footer>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  seconds: state.timer.remainingSeconds
})

App = connect(mapStateToProps)(App)
