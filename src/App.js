import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'


import { AlarmControl, Dashboard, GitHubIcon, NotificationControl } from './components'
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
        <header>
          <NotificationControl
            lastBlockStatus={this.props.lastBlockStatus}
          />
          <AlarmControl
            lastBlockStatus={this.props.lastBlockStatus}
          />
        </header>
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
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </footer>
      </div >
    )
  }

}


const mapStateToProps = state => ({
  lastBlockStatus: state.timer.lastBlockStatus,
  seconds: state.timer.remainingSeconds,
  status: state.timer.status
})

App = connect(mapStateToProps)(App)
App = withStyles(styles)(App)
