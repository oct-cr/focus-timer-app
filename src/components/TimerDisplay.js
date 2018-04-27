import React from 'react'
import PropTypes from 'prop-types'


export const TimerDisplay = props => {
  const minutes = Math.floor(props.seconds / 60)
  const seconds = props.seconds % 60

  const paddedMinutes = String(minutes).padStart(2, '0')
  const paddedSeconds = String(seconds ).padStart(2, '0')

  return (
    <span>
      {paddedMinutes}:{paddedSeconds}
    </span>
  )
}

TimerDisplay.propTypes = {
  seconds: PropTypes.number.isRequired
}
