import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from 'material-ui/Button'


import { start, stop } from '../actions/timer'

import { TimerDisplay } from '../components'


export class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }


  startTimer() {
    this.props.start(25 * 60)
  }


  stopTimer() {
    this.props.stop()
  }


  render() {
    return <React.Fragment>
      <TimerDisplay seconds={this.props.seconds} />

      <Button onClick={this.startTimer} variant="raised" color="primary">
        Focus
      </Button>

      <Button onClick={this.stopTimer} variant="raised" color="secondary">
        Stop
      </Button>
    </React.Fragment>
  }

}


const mapStateToProps = state => ({
  seconds: state.timer.remainingSeconds
})

const matchDispatchToProps = dispatch =>
  bindActionCreators({ start, stop }, dispatch)

Dashboard = connect(mapStateToProps, matchDispatchToProps)(Dashboard)
