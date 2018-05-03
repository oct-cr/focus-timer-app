import React from 'react'
import PropTypes from 'prop-types'

import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'


const STATUS_ICONS = {
  true: <VolumeUpIcon />,
  false: <VolumeOffIcon />
}

export const AlarmIcon = props => STATUS_ICONS[props.status]


AlarmIcon.propTypes = {
  /** Sound Status */
  status: PropTypes.bool.isRequired
}
