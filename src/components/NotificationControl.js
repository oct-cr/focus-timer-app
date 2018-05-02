import React from 'react'

import IconButton from 'material-ui/IconButton'

import { NotificationIcon } from './icons'
import { NOTIFICATION_STATUS } from '../constants'


const notificationStatusMap = {
  granted: NOTIFICATION_STATUS.ENABLED,
  denied: NOTIFICATION_STATUS.DENIED,
  default: NOTIFICATION_STATUS.UNCONFIRMED
}


/** Shows and controls Notification Status */
export class NotificationControl extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      status: notificationStatusMap[Notification.permission]
    }

    this.handleToggleStatus = this.handleToggleStatus.bind(this)

  }

  handleToggleStatus() {
    const { status } = this.state

    if ((status === NOTIFICATION_STATUS.UNCONFIRMED)
      || (status === NOTIFICATION_STATUS.DENIED)) {
      Notification.requestPermission(permission => {
        this.setState({
          status: notificationStatusMap[Notification.permission]
        })
      })

      return
    }

    const newStatus = (status === NOTIFICATION_STATUS.ENABLED) ?
      NOTIFICATION_STATUS.DISABLED :
      NOTIFICATION_STATUS.ENABLED

    this.setState({
      status: newStatus
    })
  }


  render() {

    if (!('Notification' in window)) {
      return null
    }

    return (
      <IconButton onClick={this.handleToggleStatus}>
        <NotificationIcon status={this.state.status} />
      </IconButton>
    )
  }

}
