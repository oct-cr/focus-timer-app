import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { getFormattedTime } from '../utils'


/** Displays ```seconds``` using mm:ss format */
export const TimerDisplay = props => {
  const time = getFormattedTime(props.seconds)

  return (
    <Typography variant="display4" gutterBottom>
      {time}
    </Typography>
  )
}

TimerDisplay.propTypes = {
  /** seconds to display */
  seconds: PropTypes.number.isRequired
}
