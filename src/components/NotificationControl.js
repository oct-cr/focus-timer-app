import React from 'react'

import IconButton from 'material-ui/IconButton'

import { NotificationIcon } from './icons'
import { NOTIFICATION_STATUS } from '../constants'


/** Shows and controls Notification Status */
export const NotificationControl = () =>
  <IconButton>
    <NotificationIcon status={NOTIFICATION_STATUS.UNCONFIRMED} />
  </IconButton>
