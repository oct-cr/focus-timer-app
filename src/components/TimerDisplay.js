import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

/** Displays ```seconds``` using mm:ss format */
export const TimerDisplay = props => {
  const minutes = Math.floor(props.seconds / 60)
  const seconds = props.seconds % 60

  const paddedMinutes = String(minutes).padStart(2, '0')
  const paddedSeconds = String(seconds).padStart(2, '0')

  return (
    <Typography variant="display4" gutterBottom>
      {paddedMinutes}:{paddedSeconds}
    </Typography>
  )
}

TimerDisplay.propTypes = {
  /** seconds to display */
  seconds: PropTypes.number.isRequired
}
