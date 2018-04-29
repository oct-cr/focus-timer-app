import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import { Dashboard, GitHubIcon } from './components'
import { getFormattedTime } from './utils'
import styles from './styles'


export class App extends React.Component {

  setDocummentTitle() {
    const formattedTime = getFormattedTime(this.props.seconds)

    document.title = `${formattedTime} ${this.props.status}`
  }


  render() {
    this.setDocummentTitle()

    const statusClass = this.props.classes[this.props.status.toLowerCase()]

    return (
      <div id="main-wrapper" className={statusClass}>
        <main>
          <div>
            <Dashboard
              classes={this.props.classes}
              seconds={this.props.seconds}
              status={this.props.status}
            />
          </div>
        </main>
        <footer>
          <a href="https://github.com/crearlink/focus-timer-app" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </footer>
      </div >
    )
  }

}


const mapStateToProps = state => ({
  seconds: state.timer.remainingSeconds,
  status: state.timer.status
})

App = connect(mapStateToProps)(App)
App = withStyles(styles)(App)
