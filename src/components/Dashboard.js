import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Collapse from 'material-ui/transitions/Collapse'

import * as TimerActions from '../actions/timer'
import { TimerDisplay } from '../components'
import store from '../store'


/** Timer and its controls */
export class Dashboard extends React.Component {

  constructor(props) {
    super(props)

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

    return <React.Fragment>

      <Collapse in={isRunning}>
        <TimerDisplay seconds={this.props.seconds} />
      </Collapse>

      <Collapse in={isRunning}>
        <Button onClick={this.stopTimer} variant="raised" color="secondary">
          Stop
        </Button>
      </Collapse>

      <Collapse in={!isRunning}>
        <Button onClick={this.startFocus} variant="raised" color="primary">
          Focus
        </Button>
        <Button onClick={this.startBreak} variant="raised" color="default">
          Break
          </Button>
      </Collapse>

    </React.Fragment>
  }

}


Dashboard.propTypes = {
  /** remaining seconds */
  seconds: PropTypes.number.isRequired
}
