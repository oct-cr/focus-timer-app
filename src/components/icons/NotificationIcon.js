import React from 'react'
import PropTypes from 'prop-types'

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'

import { NOTIFICATION_STATUS } from '../../constants'


const STATUS_ICONS = {
  [NOTIFICATION_STATUS.DENIED]: <NotificationsOffIcon />,
  [NOTIFICATION_STATUS.DISABLED]: <NotificationsNoneIcon />,
  [NOTIFICATION_STATUS.ENABLED]: <NotificationsActiveIcon />,
  [NOTIFICATION_STATUS.UNCONFIRMED]: <NotificationsIcon />
}


export const NotificationIcon = props => STATUS_ICONS[props.status]

NotificationIcon.propTypes = {
  /** Notification Status */
  status: PropTypes.string.isRequired
}
