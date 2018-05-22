import React from 'react'
import Sound from 'react-sound'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'

import { AlarmIcon } from './icons'


/** Shows alarm sound control and plays the sound */
export class AlarmControl extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      shouldPlay: false,
      status: true
    }

    this.handleToggleStatus = this.handleToggleStatus.bind(this)
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      shouldPlay: (nextProps.lastBlockStatus && prevState.status)
    }
  }


  handleToggleStatus() {
    this.setState({
      shouldPlay: false,
      status: !this.state.status
    })
  }


  render() {
    const playStatus = (this.state.shouldPlay)
      ? Sound.status.PLAYING
      : Sound.status.STOPPED

    return (
      <React.Fragment>
        <Sound
          url="alarm.mp3"
          playStatus={playStatus}
        />
        <IconButton onClick={this.handleToggleStatus}>
          <AlarmIcon status={this.state.status} />
        </IconButton>
      </React.Fragment>
    )
  }

}


AlarmControl.propTypes = {
  lastBlockStatus: PropTypes.string
}
