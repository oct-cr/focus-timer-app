import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Collapse from 'material-ui/transitions/Collapse'

import * as TimerActions from '../actions/timer'
import { StopIcon, TimerDisplay } from '../components'
import store from '../store'


/** Timer and its controls */
export class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.timeToDisplay = null

    this.startFocus = this.startFocus.bind(this)
    this.startBreak = this.startBreak.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }


  startBreak() {
    store.dispatch(TimerActions.startBreak(5 * 60))
  }

  startFocus() {
    store.dispatch(TimerActions.startFocus(25 * 60))
  }

  stopTimer() {
    store.dispatch(TimerActions.stop())
  }


  render() {
    const isRunning = this.props.seconds > 0

    if (isRunning) {
      this.timeToDisplay = this.props.seconds
    }

    return <React.Fragment>

      <Collapse in={isRunning}>
        <TimerDisplay seconds={this.timeToDisplay} />
      </Collapse>

      <Collapse in={isRunning}>
        <Button
          className={this.props.classes.stoppedButton}
          onClick={this.stopTimer}
          variant="fab"
        >
          <StopIcon />
        </Button>
      </Collapse>

      <Collapse in={!isRunning}>
        <Button
          className={this.props.classes.focusButton}
          onClick={this.startFocus}
          size="large"
          variant="raised"
        >
          Focus
        </Button>
        <Button
          className={this.props.classes.breakButton}
          onClick={this.startBreak}
          size="large"
          variant="raised"
        >
          Break
          </Button>
      </Collapse>

    </React.Fragment>
  }

}


Dashboard.propTypes = {
  /** Material UI Classes */
  classes: PropTypes.object.isRequired,
  /** remaining seconds */
  seconds: PropTypes.number.isRequired
}
