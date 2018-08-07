import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'

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
      status: ('Notification' in window) && notificationStatusMap[Notification.permission]
    }

    this.handleToggleStatus = this.handleToggleStatus.bind(this)
  }


  componentDidUpdate(prevProps) {
    if (this.props.lastBlockStatus === null
      || (this.props.lastBlockStatus === prevProps.lastBlockStatus)
      || (this.state.status !== NOTIFICATION_STATUS.ENABLED)) {
      return
    }

    this.dispatchNotification(`${this.props.lastBlockStatus} FINISHED`)
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


  dispatchNotification(title) {
    new Notification(title, {
      icon: '/favicon.png',
      requireInteraction: true,
      vibrate: [200]
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


NotificationControl.propTypes = {
  lastBlockStatus: PropTypes.string
}
