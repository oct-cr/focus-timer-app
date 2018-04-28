import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'material-ui/Button'
import Collapse from 'material-ui/transitions/Collapse'


import { startBreak, startFocus, stop } from '../actions/timer'

import { TimerDisplay } from '../components'

/** Timer and its controls */
export class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.startFocus = this.startFocus.bind(this)
    this.startBreak = this.startBreak.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }


  startFocus() {
    this.props.startFocus(25 * 60)
  }


  startBreak() {
    this.props.startBreak(5 * 60)
  }


  stopTimer() {
    this.props.stop()
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


const mapStateToProps = state => ({
  seconds: state.timer.remainingSeconds
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({ startBreak, startFocus, stop }, dispatch)

Dashboard = connect(mapStateToProps, matchDispatchToProps)(Dashboard)
